using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HogwartsPotions.Data;
using HogwartsPotions.Models.Dtos;
using HogwartsPotions.Models.Entities;
using HogwartsPotions.Models.Enums;
using HogwartsPotions.Services.Interface;
using Microsoft.EntityFrameworkCore;

namespace HogwartsPotions.Services;

public class PotionService : IPotionService
{
    public const int MaxIngredientsForPotions = 5;
    private HogwartsContext _context;

    public PotionService(HogwartsContext context)
    {
        _context = context;
    }

    public Task<List<Potion>> GetAllPotions()
    {
        return _context.Potions
            .Include(p => p.Brewer)
                .ThenInclude(s => s.Room)
            .Include(p => p.Ingredients)
            .Include(p => p.Recipe)
                .ThenInclude(p => p.Ingredients)
            .ToListAsync();
    }

    public async Task<Potion> CreatePotionFromDto(PotionDto potionDto)
    {
        var brewer = await _context.Students
            .Include(s => s.Recipes)
            .FirstOrDefaultAsync(s => s.ID == potionDto.StudentID);
        if (brewer == null)
        {
            throw new ArgumentException("StudentID does not correspond with any students.");
        }

        if (potionDto.Ingredients.Count != MaxIngredientsForPotions)
        {
            throw new ArgumentException($"Ingredient list must contain exactly {MaxIngredientsForPotions} items.");
        }

        var ingredients = new List<Ingredient>();
        foreach (var ingredientDto in potionDto.Ingredients)
        {
            var ingredient = await _context.Ingredients.FirstOrDefaultAsync(i => i.Name == ingredientDto.Name);
            if (ingredient == null)
            {
                ingredient = new Ingredient() { Name = ingredientDto.Name };
            }
            ingredients.Add(ingredient);
        }

        var brewingStatus = BrewingStatus.Replica;
        var recipe = await _context.Recipes
            .Include(r => r.Ingredients)
            .Include(r => r.Brewer)
            .Where(r => r.Ingredients
                .All(i => ingredients
                    .Contains(i)))
            .FirstOrDefaultAsync();

        if (recipe == null)
        {
            brewingStatus = BrewingStatus.Discovery;
            recipe = new Recipe
            {
                Brewer = brewer,
                Ingredients = ingredients,
                Name = $"{brewer.Name}'s discovery #{brewer.Recipes.Count + 1}"
            };
        }

        var potion = new Potion()
        {
            Name = $"A bottle of {recipe.Name}",
            Brewer = brewer,
            Ingredients = ingredients,
            Recipe = recipe,
            BrewingStatus = brewingStatus
        };

        return potion;
    }

    public async Task AddPotion(Potion potion)
    {
        await _context.Potions.AddAsync(potion);
        await _context.SaveChangesAsync();
    }
}
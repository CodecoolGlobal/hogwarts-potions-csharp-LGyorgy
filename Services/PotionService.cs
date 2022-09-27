using System.Collections.Generic;
using System.Threading.Tasks;
using HogwartsPotions.Data;
using HogwartsPotions.Models.Entities;
using HogwartsPotions.Services.Interface;
using Microsoft.EntityFrameworkCore;

namespace HogwartsPotions.Services;

public class PotionService : IPotionService
{
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
}
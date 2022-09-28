using System.Collections.Generic;
using System.Threading.Tasks;
using HogwartsPotions.Models.Dtos;
using HogwartsPotions.Models.Entities;

namespace HogwartsPotions.Services.Interface;

public interface IPotionService
{
    Task<List<Potion>> GetAllPotions();
    Task<Potion> CreatePotionFromDto(PotionDto potionDto);
    Task AddPotion(Potion potion);
}
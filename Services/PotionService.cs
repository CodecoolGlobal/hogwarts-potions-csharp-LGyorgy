using System.Collections.Generic;
using System.Threading.Tasks;
using HogwartsPotions.Models.Entities;
using HogwartsPotions.Services.Interface;

namespace HogwartsPotions.Services;

public class PotionService : IPotionService
{
    public Task<List<Potion>> GetAllPotions()
    {
        throw new System.NotImplementedException();
    }
}
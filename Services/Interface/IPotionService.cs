using System.Collections.Generic;
using System.Threading.Tasks;
using HogwartsPotions.Models.Entities;

namespace HogwartsPotions.Services.Interface;

public interface IPotionService
{
    Task<List<Potion>> GetAllPotions();
}
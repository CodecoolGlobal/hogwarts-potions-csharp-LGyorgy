using System.Collections.Generic;
using HogwartsPotions.Models.Entities;

namespace HogwartsPotions.Services.Interface;

public interface IPotionService
{
    List<Potion> GetAllPotions();
}
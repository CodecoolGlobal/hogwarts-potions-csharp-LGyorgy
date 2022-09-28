using System.Collections.Generic;

namespace HogwartsPotions.Models.Dtos;

public class PotionDto
{
    public long StudentID { get; set; }
    public List<IngredientDto> Ingredients { get; set; }
}
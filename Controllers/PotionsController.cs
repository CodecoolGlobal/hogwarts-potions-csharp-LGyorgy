using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HogwartsPotions.Models.Entities;
using HogwartsPotions.Services.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HogwartsPotions.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PotionsController : ControllerBase
    {
        private readonly IPotionService _potionService;

        public PotionsController(IPotionService potionService)
        {
            _potionService = potionService;
        }

        [HttpGet]
        public async Task<List<Potion>> GetAllPotions()
        {
            return await _potionService.GetAllPotions();
        }

        [HttpPost]
        public async Task<ActionResult<Potion>> CreatePotion(Potion potion)
        {
            throw new NotImplementedException();
        }
    }
}

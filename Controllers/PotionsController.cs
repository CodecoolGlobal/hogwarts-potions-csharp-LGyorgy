﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HogwartsPotions.Models.Dtos;
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
        public async Task<ActionResult<Potion>> CreatePotion(PotionDto potionDto)
        {
            var potion = await _potionService.CreatePotionFromDto(potionDto);
            await _potionService.AddPotion(potion);

            return Created(nameof(CreatePotion), potion);

        }

        [HttpGet("students/{studentId}")]
        public async Task<ActionResult<List<Potion>>> GetStudentCookbook(long studentId)
        {
            try
            {
                var cookbook = await _potionService.GetStudentCookbook(studentId);
                return Ok(cookbook);
            }
            catch (ArgumentException e)
            {
                return NotFound();
            }
        }
    }
}

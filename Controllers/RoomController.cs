﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HogwartsPotions.Data;
using HogwartsPotions.Models.Dtos;
using HogwartsPotions.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HogwartsPotions.Controllers
{
    [ApiController, Route("/room")]
    public class RoomController : ControllerBase
    {
        private readonly HogwartsContext _context;

        public RoomController(HogwartsContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<List<Room>> GetAllRooms()
        {
            return await _context.GetAllRooms();
        }

        [HttpPost]
        public async Task<IActionResult> AddRoom([FromBody] RoomDto roomDto)
        {
            var room = new Room()
            {
                Capacity = roomDto.Capacity
            };

            await _context.AddRoom(room);

            return CreatedAtAction(
                nameof(GetRoomById),
                new { id = room.ID },
                room);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetRoomById(long id)
        {
            var room = await _context.GetRoom(id);
            if (room == null)
            {
                return NotFound();
            }

            return Ok(room);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateRoomById(long id, [FromBody] RoomDto roomDto)
        {
            if (id != roomDto.ID)
            {
                return BadRequest();
            }

            var roomToUpdate = await _context.GetRoom(id);
            if (roomToUpdate == null)
            {
                return NotFound();
            }

            roomToUpdate.Capacity = roomDto.Capacity;

            try
            {
                await _context.UpdateRoom(roomToUpdate);
            }
            catch (DbUpdateConcurrencyException) when (!_context.Rooms.Any(r => r.ID == id))
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoomById(long id)
        {
            var room = await _context.GetRoom(id);
            if (room == null)
            {
                return NotFound();
            }

            await _context.DeleteRoom(room);

            return NoContent();
        }

        [HttpGet("rat-owners")]
        public async Task<List<Room>> GetRoomsForRatOwners()
        {
            return await _context.GetRoomsForRatOwners();
        }
    }
}

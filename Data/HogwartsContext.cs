﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HogwartsPotions.Models.Entities;
using HogwartsPotions.Models.Enums;
using Microsoft.EntityFrameworkCore;

namespace HogwartsPotions.Data;

public class HogwartsContext : DbContext
{
    public const int MaxIngredientsForPotions = 5;

    public HogwartsContext(DbContextOptions<HogwartsContext> options) : base(options)
    {
    }

    public DbSet<Student> Students { get; set; }
    public DbSet<Room> Rooms { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Student>()
            .ToTable("Student");

        modelBuilder.Entity<Room>()
            .ToTable("Room");
    }

    public async Task AddRoom(Room room)
    {
        await Rooms.AddAsync(room);
        await SaveChangesAsync();
    }

    public Task<Room> GetRoom(long roomId)
    {
        var room = Rooms
            .Include(r => r.Residents)
            .AsNoTracking()
            .FirstOrDefaultAsync(r => r.ID == roomId);
        return room;
    }

    public Task<List<Room>> GetAllRooms()
    {
        return Rooms
            .Include(r => r.Residents)
            .ToListAsync();
    }

    public async Task UpdateRoom(Room room)
    {
        if (Entry(room).State == EntityState.Detached)
        {
            Entry(room).State = EntityState.Modified;
        }
        await SaveChangesAsync();
    }

    public async Task DeleteRoom(Room room)
    {
        Rooms.Remove(room);
        await SaveChangesAsync();
    }

    public Task<List<Room>> GetRoomsForRatOwners()
    {
        return Rooms
            .Where(r => r.Residents
                .All(s => s.PetType != PetType.Cat && s.PetType == PetType.Owl)
            )
            .ToListAsync();
    }
}
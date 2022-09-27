using HogwartsPotions.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace HogwartsPotions.Data;

public class HogwartsContext : DbContext
{
    public HogwartsContext(DbContextOptions<HogwartsContext> options) : base(options)
    {
    }

    public DbSet<Student> Students { get; set; }
    public DbSet<Room> Rooms { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Student>().ToTable("Student");
        modelBuilder.Entity<Room>().ToTable("Room");
    }
}
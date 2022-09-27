using Microsoft.EntityFrameworkCore;

namespace HogwartsPotions.Data;

public class HogwartsContext : DbContext
{
    public HogwartsContext(DbContextOptions<HogwartsContext> options) : base(options)
    {
    }
}
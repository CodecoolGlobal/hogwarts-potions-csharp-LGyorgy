using System.Linq;
using HogwartsPotions.Models.Entities;
using HogwartsPotions.Models.Enums;

namespace HogwartsPotions.Data;

public class DbInitializer
{
    public static void Initialize(HogwartsContext context)
    {
        context.Database.EnsureCreated();

        if (context.Students.Any())
        {
            return;
        }

        var students = new Student[]
        {
            new Student{Name = "Hermione Granger", HouseType = HouseType.Gryffindor, PetType = PetType.Cat},
            new Student{Name = "Draco Malfoy", HouseType = HouseType.Slytherin, PetType = PetType.None},
            new Student{Name = "Harry Potter", HouseType = HouseType.Gryffindor, PetType = PetType.Owl},
            new Student{Name = "Ron Weasly", HouseType = HouseType.Gryffindor, PetType = PetType.Rat},
        };
        foreach (var student in students)
        {
            context.Students.Add(student);
        }

        var rooms = new Room[]
        {
            new Room{Capacity = 5},
            new Room{Capacity = 4},
            new Room{Capacity = 6},
            new Room{Capacity = 4},
        };
        foreach (var room in rooms)
        {
            context.Rooms.Add(room);
        }

        context.SaveChanges();

        students[0].Room = rooms[0];
        students[1].Room = rooms[1];
        students[2].Room = rooms[2];
        students[3].Room = rooms[3];

        context.SaveChanges();
    }
}
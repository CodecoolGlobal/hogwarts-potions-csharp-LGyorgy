import { useState } from "react";
import RecipeCard from "./recipeCard";

const PotionHelper = ({ potion }) => {
    const dummyRecipes = [
        {
            "id": 1,
            "name": "First Potion Recipe",
            "brewer": {
                "id": 1,
                "name": "Hermione Granger",
                "houseType": "Gryffindor",
                "petType": "Cat"
            },
            "ingredients": [
                {
                    "id": 1,
                    "name": "Bloodroot"
                },
                {
                    "id": 2,
                    "name": "Mandrake"
                },
                {
                    "id": 3,
                    "name": "Bone"
                },
                {
                    "id": 4,
                    "name": "Jewelweed"
                },
                {
                    "id": 5,
                    "name": "Moondew"
                }
            ]
        },
        {
            "id": 2,
            "name": "Harry Potter's discovery #1",
            "brewer": {
                "id": 3,
                "name": "Harry Potter",
                "houseType": "Gryffindor",
                "petType": "Owl"
            },
            "ingredients": [
                {
                    "id": 12,
                    "name": "adfdasf"
                },
                {
                    "id": 13,
                    "name": "fgdg"
                },
                {
                    "id": 14,
                    "name": "fgdgnbvm"
                },
                {
                    "id": 15,
                    "name": "fgdgnbvmfhj"
                },
                {
                    "id": 16,
                    "name": "fgdgnbvmfhjvbn"
                }
            ]
        },
        {
            "id": 3,
            "name": "Ron Weasly's discovery #1",
            "brewer": {
                "id": 4,
                "name": "Ron Weasly",
                "houseType": "Gryffindor",
                "petType": "Rat"
            },
            "ingredients": [
                {
                    "id": 27,
                    "name": "asdf"
                },
                {
                    "id": 28,
                    "name": "asdfda"
                },
                {
                    "id": 29,
                    "name": "asdfas"
                },
                {
                    "id": 30,
                    "name": "rgsdfg"
                },
                {
                    "id": 31,
                    "name": "gfkghkj"
                }
            ]
        },
        {
            "id": 4,
            "name": "Ron Weasly's discovery #2",
            "brewer": {
                "id": 4,
                "name": "Ron Weasly",
                "houseType": "Gryffindor",
                "petType": "Rat"
            },
            "ingredients": [
                {
                    "id": 25,
                    "name": "123"
                },
                {
                    "id": 27,
                    "name": "asdf"
                },
                {
                    "id": 38,
                    "name": "adsf"
                },
                {
                    "id": 39,
                    "name": "ewqr"
                },
                {
                    "id": 40,
                    "name": "asf"
                }
            ]
        },
        {
            "id": 5,
            "name": "Ron Weasly's discovery #3",
            "brewer": {
                "id": 4,
                "name": "Ron Weasly",
                "houseType": "Gryffindor",
                "petType": "Rat"
            },
            "ingredients": [
                {
                    "id": 8,
                    "name": "3"
                },
                {
                    "id": 22,
                    "name": "adf"
                },
                {
                    "id": 27,
                    "name": "asdf"
                },
                {
                    "id": 41,
                    "name": "2144"
                },
                {
                    "id": 42,
                    "name": "aasd"
                }
            ]
        },
        {
            "id": 6,
            "name": "Hermione Granger's discovery #2",
            "brewer": {
                "id": 1,
                "name": "Hermione Granger",
                "houseType": "Gryffindor",
                "petType": "Cat"
            },
            "ingredients": [
                {
                    "id": 43,
                    "name": ""
                },
                {
                    "id": 44,
                    "name": "324"
                },
                {
                    "id": 45,
                    "name": "13342"
                },
                {
                    "id": 46,
                    "name": "5435sg"
                },
                {
                    "id": 47,
                    "name": "5345"
                }
            ]
        },
        {
            "id": 7,
            "name": "Ron Weasly's discovery #4",
            "brewer": {
                "id": 4,
                "name": "Ron Weasly",
                "houseType": "Gryffindor",
                "petType": "Rat"
            },
            "ingredients": [
                {
                    "id": 7,
                    "name": "alma"
                },
                {
                    "id": 37,
                    "name": "körte"
                },
                {
                    "id": 49,
                    "name": "béka"
                },
                {
                    "id": 50,
                    "name": "banán"
                },
                {
                    "id": 51,
                    "name": "répa"
                }
            ]
        },
        {
            "id": 8,
            "name": "Hermione Granger's discovery #3",
            "brewer": {
                "id": 1,
                "name": "Hermione Granger",
                "houseType": "Gryffindor",
                "petType": "Cat"
            },
            "ingredients": [
                {
                    "id": 6,
                    "name": "Apple"
                },
                {
                    "id": 53,
                    "name": "fish"
                },
                {
                    "id": 54,
                    "name": "stone"
                },
                {
                    "id": 55,
                    "name": "water"
                },
                {
                    "id": 56,
                    "name": "orange"
                }
            ]
        }
    ];

    const [recipes, setRecipes] = useState(dummyRecipes);

    return (
        recipes.map((recipe) =>
            <div className="my-3">
                <RecipeCard recipe={recipe} />
            </div>
        )

    );
}

export default PotionHelper;
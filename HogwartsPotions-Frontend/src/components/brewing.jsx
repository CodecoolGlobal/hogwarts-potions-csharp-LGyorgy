import { useEffect, useState } from "react";
import CreateNewPotion from "./potionCreator";
import IngredientAdder from "./ingredientAdder";

const Brewing = () => {
    const [potion, setPotion] = useState(null);

    useEffect(() => {
        const fetchTest = async () => {
            const url = "potions/brew";
            const testData = await fetch(url, {
                method: "Post",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ studentId: 1 })
            })
            .then(r => r.json())
            .then(data =>  console.log(data));
        }
        fetchTest();
    });

    
    if (!potion) {
        return (
            <>
                <CreateNewPotion />
            </>
        );
    }

    return (
        <>
            <IngredientAdder potion={potion} />
        </>
    );
}

export default Brewing;
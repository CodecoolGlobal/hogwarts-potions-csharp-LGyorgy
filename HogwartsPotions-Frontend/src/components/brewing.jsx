import { useState } from "react";
import CreateNewPotion from "./potionCreator";
import IngredientAdder from "./ingredientAdder";

const Brewing = () => {
    const [potion, setPotion] = useState(null);

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
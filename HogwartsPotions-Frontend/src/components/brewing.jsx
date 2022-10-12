import { useState } from "react";
import CreateNewPotion from "./potionCreator";
import IngredientAdder from "./ingredientAdder";
import PotionDetails from "./potionDetails";

const Brewing = () => {
    const [potion, setPotion] = useState(null);

    if (!potion) {
        return (
            <>
                <CreateNewPotion handleNewPotion={setPotion} />
            </>
        );
    }

    return (
        <>
            <PotionDetails potion={potion}/>
            <IngredientAdder potion={potion} handleNewPotion={setPotion}/>
        </>
    );
}

export default Brewing;
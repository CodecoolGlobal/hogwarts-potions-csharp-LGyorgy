import { useLoaderData } from "react-router-dom";
import { getPotion } from "../services/potionService";
import IngredientAdder from "../components/ingredientAdder";
import PotionDetails from "../components/potionDetails";

const loader = async ({ params }) => {
    return await getPotion(params.potionId);
}

const Potions = () => {
    const potion = useLoaderData();

    const setPotion = () => {
        return;
    }

    return (
        <>
            <PotionDetails potion={potion}/>
            <IngredientAdder potion={potion} handleNewPotion={setPotion}/>
        </>
    );
}

export default Potions;
export { loader };
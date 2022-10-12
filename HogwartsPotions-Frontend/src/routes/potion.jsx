import { useLoaderData } from "react-router-dom";
import { addIngredient, getPotion } from "../services/potionService";
import IngredientAdder from "../components/ingredientAdder";
import PotionDetails from "../components/potionDetails";

const loader = async ({ params }) => {
    return await getPotion(params.potionId);
}

const action = async ({request, params}) => {
    const formData = await request.formData();

    const name = formData.get("ingredientName");

    const potion = await addIngredient(params.potionId, name);
    return potion;
}

const Potion = () => {
    const potion = useLoaderData();

    const setPotion = () => {
        return;
    }

    return (
        <>
            <PotionDetails potion={potion}/>
            <IngredientAdder/>
        </>
    );
}

export default Potion;
export { loader, action };
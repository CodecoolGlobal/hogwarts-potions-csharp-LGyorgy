import { useState } from "react";
import { useFetcher } from "react-router-dom";

const IngredientAdder = ({ potion }) => {
    const [ingredentName, setIngredientName] = useState("");

    const fetcher = useFetcher();

    return (
        <>
            <h2>Add ingredient</h2>
            <fetcher.Form id="ingredientAdderForm" onSubmit={() => setIngredientName("")} method="PUT">
                <ul>
                    <li>
                        <label htmlFor="ingredient">Ingredient: </label>
                        <input value={ingredentName} onChange={e => setIngredientName(e.target.value)} name="ingredientName" type="text"></input>
                    </li>
                </ul>
                <button type="submit">Add ingredient</button>
            </fetcher.Form>
        </>
    );
}

export default IngredientAdder;
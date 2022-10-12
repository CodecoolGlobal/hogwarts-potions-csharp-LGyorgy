import { useState } from "react";

const IngredientAdder = ({ potion, handleNewPotion }) => {
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const name = value;
        const url = `potions/${potion.id}/add`;
        const options = {
            method: "PUT",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ name })
        };
        const newPotion = await fetch(url, options)
            .then(r => r.json());
        handleNewPotion(newPotion);
        setValue("");
    }

    return (
        <>
            <h2>Add ingredient</h2>
            <form onSubmit={onSubmit}>
                <ul>
                    <li>
                        <label htmlFor="ingredient">Ingredient: </label>
                        <input value={value} onChange={onChange} type="text"></input>
                    </li>
                </ul>
                <button type="submit">Add ingredient</button>
            </form>
        </>
    );
}

export default IngredientAdder;
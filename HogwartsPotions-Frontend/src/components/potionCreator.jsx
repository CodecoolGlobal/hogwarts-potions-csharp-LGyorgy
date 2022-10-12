import { useState } from "react";

const PotionCreator = ({ handleNewPotion }) => {
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const studentId = value;
        const url = "potions/brew";
        const options = {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ studentId })
        };
        const potion = await fetch(url, options)
            .then(r => r.json());
        handleNewPotion(potion)
    }

    return (
        <>
            <h2>Create new potion</h2>
            <form onSubmit={onSubmit}>
                <ul>
                    <li>
                        <label htmlFor="studentId">Student ID: </label>
                        <input value={value} onChange={onChange} type="number"></input>
                    </li>
                </ul>
                <button type="submit">Start brewing a potion</button>
            </form>
        </>
    );
}

export default PotionCreator;
import {
    Form,
    redirect,
  } from "react-router-dom";
import { brewPotion } from "../services/potionService";

const action = async ({ request }) => {
    const formData = await request.formData();
    const studentId = formData.get("studentId");

    const potion = await brewPotion(studentId);

    return redirect(`/potions/${potion.id}`);
}

const Brew = () => {

    return (
        <>
            <h2>Create new potion</h2>
            <Form method="post">
                <ul>
                    <li>
                        <label htmlFor="studentId">Student ID: </label>
                        <input name="studentId" type="number"></input>
                    </li>
                </ul>
                <button type="submit">Start brewing a potion</button>
            </Form>
        </>
    );
}

export default Brew;
export { action };
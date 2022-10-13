import { redirect, useFetcher } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import { updateRecipeName } from "../services/potionService";
import { useState } from "react";


const action = async ({request, params}) => {
    var formData = await request.formData();

    var name = formData.get("newRecipeName");

    updateRecipeName(params.recipeId, name);
}

const NewRecipeNameSetter = ({ recipe }) => {
    const [value, setValue] = useState(recipe.name);
    const fetcher = useFetcher();

    return (
        <fetcher.Form method="PATCH" action={`/recipes/${recipe.id}/rename`}>
            <Form.Group className="mb-3" controlId="newRecipeName">
                <Form.Label>Name of discovered recipe: </Form.Label>
                <Form.Control value={value} onChange={e => setValue(e.target.value)} name="newRecipeName" type="text" placeholder="Enter recipe name" />
            </Form.Group>
            <Button className="shadow-sm" variant="primary" type="submit" disabled={fetcher.state !== "idle" ? true : false}>
                {fetcher.state !== "idle" && <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />}
                {fetcher.state === "idle" ? "Name recipe" : "Naming recipe..."}
            </Button>
        </fetcher.Form>
    );
}

export default NewRecipeNameSetter;
export { action };
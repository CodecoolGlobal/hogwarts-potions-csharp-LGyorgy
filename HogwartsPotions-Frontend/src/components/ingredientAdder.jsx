import { useState } from "react";
import { useFetcher } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';

const IngredientAdder = ({ potion, onHelp }) => {
    const [ingredentName, setIngredientName] = useState("");

    const fetcher = useFetcher();

    return (
        <>
            <h5>Add ingredient</h5>
            <fetcher.Form id="ingredientAdderForm" onSubmit={() => setIngredientName("")} method="PUT">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ingredient: </Form.Label>
                    <Form.Control value={ingredentName} onChange={e => setIngredientName(e.target.value)} name="ingredientName" type="text" placeholder="Enter ingredient name" />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={fetcher.state !== "idle" ? true : false}>
                    {fetcher.state !== "idle" && <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />}
                    {fetcher.state === "idle" ? "Add ingredient" : "Adding ingredient..."}
                </Button>
                <Button variant="secondary" className="float-end" onClick={onHelp}>
                    Help
                </Button>
            </fetcher.Form>
        </>
    );
}

export default IngredientAdder;
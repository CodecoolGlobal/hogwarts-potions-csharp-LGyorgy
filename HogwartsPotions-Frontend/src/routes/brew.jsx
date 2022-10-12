import {
    Form as RouterForm,
    redirect,
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
            <div className="card mx-auto mt-5 p-3" style={{"width": "50%"}}>
                <h3 className="text-center card-title">Create new potion</h3>
                <RouterForm method="post">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Student ID:</Form.Label>
                        <Form.Control name="studentId" type="number" placeholder="Enter student id" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Start brewing a potion
                    </Button>
                </RouterForm>
            </div>
        </>
    );
}

export default Brew;
export { action };
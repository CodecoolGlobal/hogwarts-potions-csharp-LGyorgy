import { useLoaderData } from "react-router-dom";
import { addIngredient, getPotion } from "../services/potionService";
import IngredientAdder from "../components/ingredientAdder";
import PotionDetails from "../components/potionDetails";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const loader = async ({ params }) => {
    return await getPotion(params.potionId);
}

const action = async ({ request, params }) => {
    const formData = await request.formData();

    const name = formData.get("ingredientName");

    const potion = await addIngredient(params.potionId, name);
    return potion;
}

const Potion = () => {
    const potion = useLoaderData();

    return (
        <>
            <h2 className=" mt-3 text-center card-title">Potion details</h2>
            <Container>
                <Row>
                    <Col>
                        <div className="card mt-3 p-3 sticky-top">
                            <PotionDetails potion={potion} />
                            {potion.brewingStatus == "Brew" && <IngredientAdder />}
                        </div>
                    </Col>
                    <Col>
                        {/* TODO: Column for recipes */}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Potion;
export { loader, action };
import { useLoaderData } from "react-router-dom";
import { addIngredient, getPotion, getRecipes } from "../services/potionService";
import IngredientAdder from "../components/ingredientAdder";
import PotionDetails from "../components/potionDetails";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PotionHelper from "../components/potionHelper";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import NewRecipeNameSetter from "../components/newRecipeNameSetter";

const discoveryTexts = [
    "Yey! You have discovered a new recipe!",
    "Congratulations! This seems to be a completely new recipe!",
    "Wow, you have discovered a new recipe! Great work!"
]


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
    const [recipes, setRecipes] = useState(null);
    const [showHelp, setShowHelp] = useState(false);
    const [isNewDiscovery, setIsNewDiscovery] = useState(false);
    const [prevStatus, setPrevStatus] = useState(potion.brewingStatus);

    useEffect(() => {
        if (showHelp) {
            (async () => {
                const newRecipes = await getRecipes(potion.id);
                setRecipes(newRecipes);
            })();
        } else {
            setRecipes(null);
        }
    }, [potion, showHelp]);

    useEffect(() => {
        setIsNewDiscovery(prevStatus !== "Discovery" && potion.brewingStatus === "Discovery");
        setPrevStatus(potion.brewingStatus);
    }, [potion]);

    const onHelp = async () => {
        if (showHelp) {
            setShowHelp(false)
        } else {
            if (recipes === null) {
                const newRecipes = await getRecipes(potion.id);
                setRecipes(newRecipes);
            }
            setShowHelp(true);
        }
    }

    return (
        <>
            <h2 className=" mt-3 text-center card-title">Potion details</h2>
            <Container>
                <Row className="mt-3">
                    <Col>
                        <div className="card my-3 p-3 sticky-top">
                            <PotionDetails potion={potion} />
                            {potion.brewingStatus === "Brew" && <IngredientAdder onHelp={onHelp} />}
                            {isNewDiscovery &&
                                <>
                                    <div className="text-center text-success">
                                        <strong>
                                            {discoveryTexts[Math.floor(Math.random() * discoveryTexts.length)]}
                                        </strong>
                                    </div>
                                    <NewRecipeNameSetter recipe={potion.recipe} />
                                </>
                            }
                        </div>
                    </Col>

                    <Col>
                        {potion.brewingStatus === "Brew" &&
                            <>
                                <div className="text-center my-3 p-3">
                                    <Button variant="secondary" className="mx-auto" onClick={onHelp}>
                                        {showHelp
                                            ? "Hide recipes"
                                            : "Show compatible recipes"}
                                    </Button>
                                </div>
                                {showHelp && <PotionHelper recipes={recipes} />}
                            </>}
                    </Col>

                </Row>
            </Container>
        </>
    );
}

export default Potion;
export { loader, action };
import { Card } from "react-bootstrap";

const RecipeCard = ({ recipe }) => {
    return (
        <Card className="shadow-sm">
            <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text>
                    <p><strong>Brewer:</strong> {recipe.brewer.name}</p>
                    <p><strong>Ingredients:</strong> {
                        recipe.ingredients.length > 0
                            ? recipe.ingredients
                                .map(i => i.name)
                                .join(', ')
                            : <em>No ingredients</em>
                    }</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );

}

export default RecipeCard;
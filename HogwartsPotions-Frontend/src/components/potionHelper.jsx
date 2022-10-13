import RecipeCard from "./recipeCard";

const PotionHelper = ({ recipes }) => {
    return (
        recipes.map((recipe) =>
            <div className="my-3">
                <RecipeCard recipe={recipe} />
            </div>
        )

    );
}

export default PotionHelper;
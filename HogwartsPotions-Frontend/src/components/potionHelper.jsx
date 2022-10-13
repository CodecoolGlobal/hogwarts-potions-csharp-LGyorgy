import RecipeCard from "./recipeCard";

const PotionHelper = ({ recipes }) => {
    if (recipes.length === 0) {
        return <div className="text-center">
            No compatible recipes have been discovered yet...
        </div>
    }

    return (
        recipes.map((recipe) =>
            <div className="my-3">
                <RecipeCard recipe={recipe} />
            </div>
        )
    );
}

export default PotionHelper;
const PotionDetails = ({ potion }) => {
    return (
        <>
            <div>
                <h3 className="card-title text-center">{potion.name !== undefined && potion.name !== null ? potion.name : "Unnamed potion"}</h3>
                <p><strong>Brewer:</strong> {potion.brewer.name}</p>
                <p><strong>Status:</strong> {potion.brewingStatus}</p>
                <p><strong>Ingredients:</strong> {
                    potion.ingredients.length > 0
                        ? potion.ingredients
                            .map(i => i.name)
                            .join(', ')
                        : <em>No ingredients</em>
                }</p>
                {potion.recipe !== undefined && <p><strong>Recipe:</strong> {potion.recipe.name} </p>}
            </div>
        </>
    );
}

export default PotionDetails;
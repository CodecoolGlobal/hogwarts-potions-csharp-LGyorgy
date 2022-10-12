const PotionDetails = ({ potion }) => {
    return (
        <>
            <div>
                <p>Id: {potion.id}</p>
                <p>Brewer: {potion.brewer.name}</p>
                <p>Ingredients: {
                    potion.ingredients
                        .map(i => i.name)
                        .join(', ')
                }</p>
            </div>
        </>
    );
}

export default PotionDetails;
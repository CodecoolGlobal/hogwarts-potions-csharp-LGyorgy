const getPotion = async (potionId) => {
    const url = `/api/potions/${potionId}`;
    const potion = await fetch(url)
        .then(r => r.json());
    return potion;
}

const brewPotion = async (studentId) => {
    const url = "/api/potions/brew";
    const options = {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ studentId })
    };
    const potion = await fetch(url, options)
        .then(r => r.json());

    return potion;
}

const addIngredient = async (potionId, ingredientName) => {
    const url = `/api/potions/${potionId}/add`;
    const options = {
        method: "PUT",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ name: ingredientName })
    };
    const potion = await fetch(url, options)
        .then(r => r.json());

    return potion;
}

const getRecipes = async (potionId) => {
    const url = `/api/potions/${potionId}/help`;
    const recipes = await fetch(url)
        .then(r => r.json());

    return recipes;
}

export {
    getPotion,
    brewPotion,
    addIngredient,
    getRecipes
};
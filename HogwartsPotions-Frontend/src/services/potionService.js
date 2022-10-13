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

const updateRecipeName = async (recipeId, recipeName) => {
    const url = `/api/recipes/${recipeId}/rename`;
    const options = {
        method: "PATCH",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(recipeName)
    };
    const result = await fetch(url, options)
        .then(r => r.json());

    return result;
};

export {
    getPotion,
    brewPotion,
    addIngredient,
    getRecipes,
    updateRecipeName
};
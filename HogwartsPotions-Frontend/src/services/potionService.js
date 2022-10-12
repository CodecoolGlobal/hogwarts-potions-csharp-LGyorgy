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

export { getPotion, brewPotion };
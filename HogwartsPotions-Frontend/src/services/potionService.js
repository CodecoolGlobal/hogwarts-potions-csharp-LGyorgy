const getPotion = async (potionId) => {
    const url = `/api/potions/${potionId}`;
    const potion = await fetch(url)
        .then(r => r.json());
    return potion;
}

export { getPotion };
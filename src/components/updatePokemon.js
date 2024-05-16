import createAbilities from './createAbilities.js';

const updatePokemon = (pokemonDom, pokemonData) => {
    const name = pokemonDom.querySelector('.pokemon-name');
    name.innerText = pokemonData.name;

    const img = pokemonDom.querySelector('.pokemon-image');
    img.src = pokemonData.sprites.front_default;
    img.alt = pokemonData?.name;

    const newAbilities = createAbilities(pokemonData.abilities);
    const oldAbilities = pokemonDom.querySelector('.abilities');
    oldAbilities.replaceWith(newAbilities);

    return pokemonDom;
};
export default updatePokemon;

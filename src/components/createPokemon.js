import createAbilities from './createAbilities.js';

const createPokemon = (pokemon) => {
    // create pokemon container
    const divEle = document.createElement('div');
    divEle.classList.add('pokemon-container');
    divEle.id = 'container';

    // create pokemon name
    const h3Ele = document.createElement('h3');
    h3Ele.classList.add('pokemon-name');
    h3Ele.id = pokemon.name;
    h3Ele.innerText = pokemon?.name;

    // create pokemon image
    const imgEle = document.createElement('img');
    imgEle.classList.add('pokemon-image');
    imgEle.id = 'img';
    imgEle.src = pokemon?.sprites?.front_default;
    imgEle.alt = pokemon?.name;

    // create ability
    const abilityEle = document.createElement('h3');
    abilityEle.classList.add('ability');
    abilityEle.id = 'ability';
    abilityEle.innerText = 'Abilities';

    const abilities = createAbilities(pokemon?.abilities);

    divEle.append(h3Ele, imgEle, abilityEle, abilities);
    return divEle;
};

export default createPokemon;

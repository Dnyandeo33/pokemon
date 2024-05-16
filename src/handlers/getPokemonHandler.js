import getPokemonData from '../../api/getPokemonData.js';
import createPokemon from '../components/createPokemon.js';
import updatePokemon from '../components/updatePokemon.js';
import data from '../data.js';
import dom from '../dom.js';

const getPokemonHandler = async () => {
    const value = Number(dom.input.value);

    // check old value and new value
    if (data.oldId === value) {
        return;
    }

    const isValid = value > 0;
    // validate value and throw error
    if (!isValid) {
        const existPokemonContainer = dom.root.querySelector('.pokemon-container');
        existPokemonContainer.remove();
        dom.errorDiv.className = 'error';
        dom.errorDiv.innerText = 'Please provide valid id';
        dom.root.append(dom.errorDiv);
        return;
    }

    // clear error
    const errorExist = dom.root.querySelector('.error');
    if (errorExist) {
        dom.errorDiv.remove();
    }

    // get the data from api & validate
    const pokemonData = await getPokemonData(value);
    if (!pokemonData) {
        dom.errorDiv.innerText = 'Please provide valid id';
        dom.root.append(dom.errorDiv);
        return;
    }

    // check exist pokemon dom & update
    const existPokemonContainer = dom.root.querySelector('.pokemon-container');
    if (existPokemonContainer) {
        updatePokemon(existPokemonContainer, pokemonData);
    } else {
        const pokemonDom = createPokemon(pokemonData);
        dom.root.append(pokemonDom);
    }

    dom.input.value = '';
    data.oldId = value;
};

export default getPokemonHandler;

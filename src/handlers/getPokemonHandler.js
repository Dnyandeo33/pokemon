import getPokemonData from '../../api/getPokemonData.js';
import createPokemon from '../components/createPokemon.js';
import updatePokemon from '../components/updatePokemon.js';
import data from '../data.js';
import dom from '../dom.js';

const getPokemonHandler = async () => {
    const value = Number(dom.input.value);
    const existPokemonContainer = dom.root.querySelector('.pokemon-container');

    // check old value and new value
    if (data.oldId === value) {
        return;
    }

    const isValid = value > 0 && value < 1280;
    // validate value and throw error
    if (!isValid) {
        existPokemonContainer.remove();
        data.oldId = null;
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

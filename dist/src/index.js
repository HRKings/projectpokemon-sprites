/* eslint-disable max-len */
import fs from 'fs';
import path from 'path';
import { __dirname } from './utils.js';
const generationsFiles = path.join(__dirname, 'data/generations');
const pokeapiGenerationsFiles = path.join(__dirname, 'data/parsed');
const generations = {
    1: 'gen1',
    2: 'gen2',
    3: 'gen3',
    4: 'gen4',
    5: 'gen5',
    6: 'gen6',
    7: 'gen7',
    8: 'gen8',
};
const generationsNames = {
    'generation-i': 'gen1',
    'generation-ii': 'gen2',
    'generation-iii': 'gen3',
    'generation-iv': 'gen4',
    'generation-v': 'gen5',
    'generation-vi': 'gen6',
    'generation-vii': 'gen7',
    'generation-viii': 'gen8',
};
const generationCache = {
    file: '',
    isPokeApi: false,
    data: {},
};
function getGenerationFile(generation) {
    let generationFile = '';
    if (typeof generation === 'number') {
        generationFile = generations[generation];
    }
    else {
        generationFile = generationsNames[generation];
    }
    return generationFile;
}
/**
 * Loads a Generation file into memory
 * @param generation - the generation that will be loaded
 * (must be a number between 1 and 8 or a string with a PokeAPI generation)
 * @returns the list of all pokemon sprites for this generation
*/
export function loadGeneration(generation, isPokeAPI = false) {
    const generationFile = getGenerationFile(generation);
    const pathToUse = isPokeAPI ? pokeapiGenerationsFiles : generationsFiles;
    const rawData = fs.readFileSync(`${pathToUse}/${generationFile}.json`).toString();
    const data = JSON.parse(rawData);
    if (generationFile === 'gen8') {
        const rawLgpe = fs.readFileSync(`${pathToUse}/lgpe.json`).toString();
        const lgpe = JSON.parse(rawLgpe);
        return { ...data, ...lgpe };
    }
    return data;
}
/**
 * Get the Pokemon Sprite from Project Pokemon
 * @param pokemonNameOrPokeApiId - the pokemon name or a PokeAPI ID
 * @param generation - the generation the pokemon belongs to
 * (must be a number between 1 and 8 or a string with a PokeAPI generation)
 * @returns a Pokemon Sprite
 */
export function getPokemonSprite(pokemonNameOrPokeApiId, generation) {
    const generationFile = getGenerationFile(generation);
    const isPokeAPI = typeof pokemonNameOrPokeApiId === 'number';
    if (generationCache.file !== generationFile || generationCache.isPokeApi !== isPokeAPI) {
        generationCache.file = generationFile;
        generationCache.isPokeApi = isPokeAPI;
        generationCache.data = loadGeneration(generation, isPokeAPI);
    }
    const pokemonSprite = generationCache.data[pokemonNameOrPokeApiId.toString()];
    if (!pokemonSprite) {
        throw new Error(`The pokemon '${pokemonNameOrPokeApiId}' isn't in the Generation '${generation}'`);
    }
    return pokemonSprite;
}

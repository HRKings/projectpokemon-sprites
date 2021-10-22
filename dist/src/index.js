import fs from 'fs';
import path from 'path';
import { __dirname } from './utils.js';
const generationsFiles = path.join(__dirname, 'data/generations/');
const pokeApiReplaces = {
    gmax: 'gigantamax',
    'totem-alola': 'totem',
    '-star': 'star',
    'original-cap': 'kantocap',
    '-cap': 'cap',
};
export function getGeneration1() {
    const rawData = fs.readFileSync(`${generationsFiles}gen1.json`).toString();
    return JSON.parse(rawData);
}
export function getGeneration2() {
    const rawData = fs.readFileSync(`${generationsFiles}gen2.json`).toString();
    return JSON.parse(rawData);
}
export function getGeneration3() {
    const rawData = fs.readFileSync(`${generationsFiles}gen3.json`).toString();
    return JSON.parse(rawData);
}
export function getGeneration4() {
    const rawData = fs.readFileSync(`${generationsFiles}gen4.json`).toString();
    return JSON.parse(rawData);
}
export function getGeneration5() {
    const rawData = fs.readFileSync(`${generationsFiles}gen5.json`).toString();
    return JSON.parse(rawData);
}
export function getGeneration6() {
    const rawData = fs.readFileSync(`${generationsFiles}gen6.json`).toString();
    return JSON.parse(rawData);
}
export function getGeneration7() {
    const rawData = fs.readFileSync(`${generationsFiles}gen7.json`).toString();
    return JSON.parse(rawData);
}
export function getGeneration8() {
    const rawData = fs.readFileSync(`${generationsFiles}gen8.json`).toString();
    return JSON.parse(rawData);
}
export function getLGPE() {
    const rawData = fs.readFileSync(`${generationsFiles}lgpe.json`).toString();
    return JSON.parse(rawData);
}
export function fromPokeAPI(pokemonName) {
    let projectPokemonName = pokemonName;
    for (const original in pokeApiReplaces) {
        projectPokemonName = projectPokemonName.replace(original, pokeApiReplaces[original]);
    }
    return projectPokemonName;
}

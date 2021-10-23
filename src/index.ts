import fs from 'fs';
import path from 'path';
import { __dirname } from './utils.js';
import { PokemonSprite } from './interfaces/IPokemonSprite.js';
import { PokemonGeneration } from './interfaces/IPokemonGeneration.js';

const generationsFiles = path.join(__dirname, 'data/generations/');
const pokeApiReplaces: Record<string, string> = {
  gmax: 'gigantamax',
  'totem-alola': 'totem',
  '-star': 'star',
  'original-cap': 'kantocap',
  '-cap': 'cap',
};

const generations: Record<number, string> = {
  1: 'gen1',
  2: 'gen2',
  3: 'gen3',
  4: 'gen4',
  5: 'gen5',
  6: 'gen6',
  7: 'gen7',
  8: 'gen8',
};

const generationsNames: Record<string, string> = {
  'generation-i': 'gen1',
  'generation-ii': 'gen2',
  'generation-iii': 'gen3',
  'generation-iv': 'gen4',
  'generation-v': 'gen5',
  'generation-vi': 'gen6',
  'generation-vii': 'gen7',
  'generation-viii': 'gen8',
};

const generationCache: PokemonGeneration = {
  file: '',
  data: {},
};

function getGenerationFile(generation: number | string): string {
  let generationFile = '';

  if (typeof generation === 'number') {
    generationFile = generations[generation];
  } else {
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
export function loadGeneration(generation: number | string): Record<string, PokemonSprite> {
  const generationFile = getGenerationFile(generation);

  const rawData = fs.readFileSync(`${generationsFiles}${generationFile}.json`).toString();
  const data: Record<string, PokemonSprite> = JSON.parse(rawData);

  if (generationFile === 'gen8') {
    const rawLgpe = fs.readFileSync(`${generationsFiles}lgpe.json`).toString();
    const lgpe = JSON.parse(rawLgpe);

    return { ...data, ...lgpe };
  }

  return data;
}

/**
 * Get the Pokemon Sprite from Project Pokemon
 * @param pokemonName - the pokemon name
 * @param generation - the generation the pokemon belongs to
 * (must be a number between 1 and 8 or a string with a PokeAPI generation)
 * @returns a Pokemon Sprite
 */
export function getPokemonSprite(pokemonName: string, generation: number | string): PokemonSprite {
  const generationFile = getGenerationFile(generation);

  if (generationCache.file !== generationFile) {
    generationCache.file = generationFile;
    generationCache.data = loadGeneration(generation);
  }

  const pokemonSprite = generationCache.data[pokemonName];

  if (!pokemonSprite) {
    throw new Error(`The pokemon '${pokemonName}' isn't in the Generation '${generation}'`);
  }

  return pokemonSprite;
}

/**
 * A function to convert a PokeAPI pokemon name
 * into one accepted by the Project Pokemon Sprite Index
 * @param pokeApiPokemonName - the pokemon name as in the PokeAPI
 * @returns the pokemon name accepted by the Project Pokemon Sprite Index
 */
export function fromPokeAPI(pokeApiPokemonName: string): string {
  let projectPokemonName = pokeApiPokemonName;

  for (const original in pokeApiReplaces) {
    projectPokemonName = projectPokemonName.replace(original, pokeApiReplaces[original]);
  }

  return projectPokemonName;
}

/**
 * Get the Pokemon Sprite from Project Pokemon
 * @param pokeApiPokemonName - the pokemon name as in the PokeAPI
 * @param generation - the generation the pokemon belongs to,
 *  can be a generation string from PokeAPI
 * @returns a Pokemon Sprite
 */
export function loadFromPokeAPI(pokeApiPokemonName: string,
  generation: number | string): PokemonSprite {
  const projectPokemonName = fromPokeAPI(pokeApiPokemonName);

  return getPokemonSprite(projectPokemonName, generation);
}

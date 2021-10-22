import fs from 'fs';
import { PokemonSprite } from '@/interfaces/IPokemonSprite';

const generationsFiles = 'dist/src/data/generations/';
const pokeApiReplaces: Record<string, string> = {
  gmax: 'gigantamax',
  'totem-alola': 'totem',
  '-star': 'star',
  'original-cap': 'kantocap',
  '-cap': 'cap',
};

export function getGeneration1(): Record<string, PokemonSprite> {
  const rawData = fs.readFileSync(`${generationsFiles}gen1.json`).toString();
  return JSON.parse(rawData);
}

export function getGeneration2(): Record<string, PokemonSprite> {
  const rawData = fs.readFileSync(`${generationsFiles}gen2.json`).toString();
  return JSON.parse(rawData);
}

export function getGeneration3(): Record<string, PokemonSprite> {
  const rawData = fs.readFileSync(`${generationsFiles}gen3.json`).toString();
  return JSON.parse(rawData);
}

export function getGeneration4(): Record<string, PokemonSprite> {
  const rawData = fs.readFileSync(`${generationsFiles}gen4.json`).toString();
  return JSON.parse(rawData);
}

export function getGeneration5(): Record<string, PokemonSprite> {
  const rawData = fs.readFileSync(`${generationsFiles}gen5.json`).toString();
  return JSON.parse(rawData);
}

export function getGeneration6(): Record<string, PokemonSprite> {
  const rawData = fs.readFileSync(`${generationsFiles}gen6.json`).toString();
  return JSON.parse(rawData);
}

export function getGeneration7(): Record<string, PokemonSprite> {
  const rawData = fs.readFileSync(`${generationsFiles}gen7.json`).toString();
  return JSON.parse(rawData);
}

export function getGeneration8(): Record<string, PokemonSprite> {
  const rawData = fs.readFileSync(`${generationsFiles}gen8.json`).toString();
  return JSON.parse(rawData);
}

export function getLGPE(): Record<string, PokemonSprite> {
  const rawData = fs.readFileSync(`${generationsFiles}lgpe.json`).toString();
  return JSON.parse(rawData);
}

export function fromPokeAPI(pokemonName: string): string {
  let projectPokemonName = pokemonName;

  for (const original in pokeApiReplaces) {
    projectPokemonName = projectPokemonName.replace(original, pokeApiReplaces[original]);
  }

  return projectPokemonName;
}
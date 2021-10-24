/* eslint-disable no-continue */
/* eslint-disable no-await-in-loop */
/* eslint-disable import/no-extraneous-dependencies */

import fs from 'fs';
import path from 'path';
import PokeAPI from 'pokedex-promise-v2';

import { PokemonSprite } from '../src/interfaces/IPokemonSprite.js';
import { __dirname } from '../src/utils.js';

const generationsFilesPath = 'dist/src/data/generations';
const parsedFilesPath = path.join(__dirname, 'data/parsed');

const pokeApiReplaces: any[][] = [
  [/gigantamax$/, 'gmax'],
  ['raticate-totem', 'raticate-totem-alola'],
  [/-(.*)star$/, '-$1-star'],
  [/-kantocap$/, '-originalcap'],
  [/cap$/, '-cap'],
  [/megax$/, 'mega-x'],
  [/megay$/, 'mega-y'],
  [/-f$/, ''],
  [/-active$/, ''],
  [/^mr./, 'mr-'],
  [/_f$/, '-f'],
  [/_m$/, '-m'],
  [/(unown-\w).{0,7}/, '$1'],
  ['unown-iation', 'unown-question'],
  ['unown-eion', 'unown-exclamation'],
  [/_g6$/, ''],
  [/_jr$/, '-jr'],
  ['basculin-blue', 'basculin-blue-striped'],
  ['genesect-water', 'genesect-douse'],
  ['genesect-electric', 'genesect-shock'],
  ['genesect-fire', 'genesect-burn'],
  ['genesect-ice', 'genesect-chill'],
  ['vivillon-highplains', 'vivillon-high-plains'],
  ['vivillon-savannah', 'vivillon-savanna'],
  ['vivillon-pokeball', 'vivillon-poke-ball'],
  ['furfrou-lareine', 'furfrou-la-reine'],
  ['oricorio-pompom', 'oricorio-pom-pom'],
  ['typenull', 'type-null'],
  [/tapu(.*)/, 'tapu-$1'],
  [/^mimikyu-totem$/, 'mimikyu-totem-disguised'],
  [/(necrozma-.*)-.*/, '$1'],
  ['zeraora-stand', 'zeraora'],
  ['toxtricity-gmax', 'toxtricity-low-key-gmax'],
  ['mimejr.', 'mime-jr'],
  ['urshifu-gmax', 'urshifu-single-strike-gmax'],
  ['gigantamax-inteleon', 'inteleon-gmax'],
  ['darmanitan-galar', 'darmanitan-standard-galar'],
  ['darmanitan-galar-zen', 'darmanitan-zen-galar'],
  ['eiscue-noice-face', 'eiscue-noice'],
  ['morpeko-hangry-mode', 'morpeko-hangry'],
  [/(.*-crowned)-.*/, '$1'],
];

const genFiles = [
  'gen1',
  'gen2',
  'gen3',
  'gen4',
  'gen5',
  'gen6',
  'gen7',
  'gen8',
  'lgpe',
];

const pokedex = new PokeAPI();

const pokemonList = await pokedex.getPokemonsList();
const formsList = await pokedex.getPokemonFormsList();
const speciesList = await pokedex.getPokemonSpeciesList();

function toPokeAPI(projectPokemonName: string) {
  let pokeApiPokemonName = projectPokemonName;

  for (const original of pokeApiReplaces) {
    pokeApiPokemonName = pokeApiPokemonName.replace(original[0], original[1]);
  }

  return pokeApiPokemonName;
}

genFiles.forEach(async (file) => {
  const rawData = fs.readFileSync(`${generationsFilesPath}/${file}.json`).toString();
  const data: Record<string, PokemonSprite> = JSON.parse(rawData);
  const sanitized: Record<string, PokemonSprite> = {};
  const except: string[] = [];

  if (file === 'gen8') {
    data['toxtricity-amped-gmax'] = data['toxtricity-gigantamax'];
  }

  for (const key in data) {
    const pokeApiName = toPokeAPI(key).replaceAll('--', '-');

    let url: string = '';

    console.log(`Parsing ${key} (${pokeApiName}) from ${file}`);

    const isPokemon = pokemonList.results.find((pokemon) => pokemon.name === pokeApiName);
    const isForm = formsList.results.find((pokemon) => pokemon.name === pokeApiName);
    const isSpecies = speciesList.results.find((pokemon) => pokemon.name === pokeApiName);

    if (isPokemon) {
      url = isPokemon.url.toString();
    } else if (isForm) {
      url = isForm.url.toString();
    } else if (isSpecies) {
      url = isSpecies.url.toString();
    } else {
      except.push(`${key}|${pokeApiName}|${file}`);
      continue;
    }

    const id = url.split('/').reverse()[1];

    if (key.endsWith('-f')) {
      sanitized[`female-${id}`] = data[key];
    } else {
      sanitized[id.toString()] = data[key];
    }
  }

  fs.writeFileSync(`${parsedFilesPath}/${file}.json`, JSON.stringify(sanitized, null, 2));

  if (except.length !== 0) {
    fs.writeFileSync(`${parsedFilesPath}/except/${file}.json`, JSON.stringify(except, null, 2));
  }
});

process.exit(0);

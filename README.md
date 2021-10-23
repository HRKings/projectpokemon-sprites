# Project Pokemon Sprite Index

A simple NodeJS package to serve a list of the available sprites on the [Project Pokemon Sprite](https://projectpokemon.org/home/docs/spriteindex_148), currently it supports the following list from the Index:

- [Generation 1](https://projectpokemon.org/home/docs/spriteindex_148/3d-models-generation-1-pok%C3%A9mon-r90/)
- [Generation 2](https://projectpokemon.org/home/docs/spriteindex_148/3d-models-generation-2-pok%C3%A9mon-r91/)
- [Generation 3](https://projectpokemon.org/home/docs/spriteindex_148/3d-models-generation-3-pok%C3%A9mon-r92/)
- [Generation 4](https://projectpokemon.org/home/docs/spriteindex_148/3d-models-generation-4-pok%C3%A9mon-r93/)
- [Generation 5](https://projectpokemon.org/home/docs/spriteindex_148/3d-models-generation-5-pok%C3%A9mon-r94/)
- [Generation 6](https://projectpokemon.org/home/docs/spriteindex_148/3d-models-generation-6-pok%C3%A9mon-r95/)
- [Generation 7](https://projectpokemon.org/home/docs/spriteindex_148/3d-models-generation-7-pok%C3%A9mon-r96/)
- [Generation 8](https://projectpokemon.org/home/docs/spriteindex_148/3d-models-generation-8-pok%C3%A9mon-r123/)

Additionally it support the [Let's Go Pikachu and Eevee](https://projectpokemon.org/home/docs/spriteindex_148/lgpe-models-r111/), but it is included on the Generation 8.

# Using

The most simple way to use is calling the method `getPokemonSprite`, as follows:
```js
import { getPokemonSprite } from 'projectpokemon-sprites';

const pikachu = getPokemonSprite('pikachu', 1); // Pass the generation number
const pikachu = getPokemonSprite('pikachu', 'generation-i'); // Pass the PokeAPI generation name
```

You can pass any generation from 1 to 8, optionally you can pass a PokeAPI compatible generation name (intended for use with the [pokedex-promise-v2](https://github.com/PokeAPI/pokedex-promise-v2))

This method auto caches the last used generation, so no second IO operation is required if getting another pokemon from the same generation;

## PokeAPI Support

PokeAPI support is also included out of the box, so you can pass the pokemon and generation names that the API uses.

```js
import { loadFromPokeAPI } from 'projectpokemon-sprites';

const pikachu = loadFromPokeAPI(pokeApiPokemonResponse.name, pokeApiGenerationResponse.name); // Example pokeApi usage
```

# Developing

The JSON files for each generation can be created by using `pnpm run getsprites`, it will scrape the Project Pokemon Sprite Index (it has a cache, so it will not request the HTML every time) and generate the JSONs for each generation
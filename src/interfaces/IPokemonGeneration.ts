import { PokemonSprite } from './IPokemonSprite.js';

export interface PokemonGeneration {
  file: string,
  isPokeApi: boolean,
  data: Record<string, PokemonSprite>
}

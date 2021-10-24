declare module 'projectpokemon-sprites' {
  interface PokemonSpriteKind {
    default?: string;
    shiny?: string;
  }
  interface PokemonSprite {
    front?: PokemonSpriteKind;
    back?: PokemonSpriteKind;
  }

  interface PokemonGeneration {
    file: string,
    data: Record<string, PokemonSprite>
  }

  /**
   * Loads a Generation file into memory
   * @param generation - the generation that will be loaded
   * (must be a number between 1 and 8 or a string with a PokeAPI generation)
   * @returns the list of all pokemon sprites for this generation
  */
  function loadGeneration(generation: number | string): Record<string, PokemonSprite>;

  /**
  * Get the Pokemon Sprite from Project Pokemon
  * @param pokemonNameOrPokeApiId - the pokemon name or a PokeAPI ID
  * @param generation - the generation the pokemon belongs to
  * (must be a number between 1 and 8 or a string with a PokeAPI generation)
  * @returns a Pokemon Sprite
  */
  function getPokemonSprite(pokemonNameOrPokeApiId: string | number, generation: number | string): PokemonSprite;
}

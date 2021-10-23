declare module 'projectpokemon-sprites' {
    interface PokemonSpriteKind {
        default?: string;
        shiny?: string;
        [index: string]: string | undefined;
    }
    interface PokemonSprite {
        front?: PokemonSpriteKind;
        back?: PokemonSpriteKind;
        [index: string]: PokemonSpriteKind | undefined;
    }

    /**
     * Loads a Generation file into memory
     * @param generation - the generation that will be loaded
     * (must be a number between 1 and 8 or a string with a PokeAPI generation)
     * @returns the list of all pokemon sprites for this generation
    */
    function loadGeneration(generation: number | string): Record<string, PokemonSprite>;

    /**
     * A function to convert a PokeAPI pokemon name
     * into one accepted by the Project Pokemon Sprite Index
     * @param pokeApiPokemonName - the pokemon name as in the PokeAPI
     * @returns the pokemon name accepted by the Project Pokemon Sprite Index
     */
    function fromPokeAPI(pokeApiPokemonName: string): string

    /**
     * Get the Pokemon Sprite from Project Pokemon
     * @param pokeApiPokemonName - the pokemon name as in the PokeAPI
     * @param generation - the generation the pokemon belongs to,
     *  can be a generation string from PokeAPI
     * @returns a Pokemon Sprite
     */
    function loadFromPokeAPI(pokeApiPokemonName: string, generation: number | string): PokemonSprite;
}

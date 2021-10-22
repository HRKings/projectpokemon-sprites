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

    function getGeneration1(): Record<string, PokemonSprite>;
    function getGeneration2(): Record<string, PokemonSprite>;
    function getGeneration3(): Record<string, PokemonSprite>;
    function getGeneration4(): Record<string, PokemonSprite>;
    function getGeneration5(): Record<string, PokemonSprite>;
    function getGeneration6(): Record<string, PokemonSprite>;
    function getGeneration7(): Record<string, PokemonSprite>;
    function getGeneration8(): Record<string, PokemonSprite>;
    function getLGPE(): Record<string, PokemonSprite>;
    function fromPokeAPI(pokemonName: string): string;
}

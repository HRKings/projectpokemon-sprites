export interface PokemonSpriteKind {
  default?: string,
  shiny?: string,
  [index: string]: string | undefined,
}

export interface PokemonSprite {
  front?: PokemonSpriteKind,
  back?: PokemonSpriteKind,
  [index: string]: PokemonSpriteKind | undefined,
}

export interface PokemonState {
  search: string
  loading: boolean

  count: number
  next?: string
  previous?: string
  results: Pokemon[]
}

export interface PokemonResult {
  name: string
  url: string
}

export interface ReducerAction {
  type: string
  payload: any
}

export interface Pokemon {
  favorite: boolean
  abilities: Ability2[]
  base_experience: number
  forms: any[]
  game_indices: any[]
  height: number
  held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: any[]
  name: string
  order: number
  past_types: any[]
  species: Ability
  sprites: Sprites
  stats: any[]
  types: any[]
  weight: number
}

interface Sprites {
  back_default: string
  back_female?: any
  back_shiny: string
  back_shiny_female?: any
  front_default: string
  front_female?: any
  front_shiny: string
  front_shiny_female?: any
  other: Other
  versions: Other
}

interface Other {}

interface Ability2 {
  ability: Ability
  is_hidden: boolean
  slot: number
}

interface Ability {
  name: string
  url: string
}

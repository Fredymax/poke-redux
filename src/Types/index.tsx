export interface PokemonState {
  search: string

  count: number
  next?: string
  previous?: string
  results: Pokemon[]
}

export interface Pokemon {
  name: string
  url: string
}

export interface ReducerAction {
  type: string
  payload: any
}

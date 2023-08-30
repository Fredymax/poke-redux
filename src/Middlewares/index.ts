import { Action, Dispatch, MiddlewareAPI } from 'redux'

type MiddlewareType = <S extends MiddlewareAPI<any>>(store: S) => (next: Dispatch<Action>) => (action: Action) => any

export const logger: MiddlewareType = (_) => (next) => (action) => {
  console.log(action)
  next(action)
}

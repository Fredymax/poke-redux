import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { pokemonsReducer } from '@/Reducers/pokemons'

import { Provider } from 'react-redux'
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import { logger } from '@/Middlewares'

import './index.css'

const composedEnhancers = composeWithDevTools(applyMiddleware(logger))
const store = createStore(pokemonsReducer, composedEnhancers)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

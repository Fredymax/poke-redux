import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { pokemonsReducer } from '@/Reducers/pokemons'
// import { logger } from '@/Middlewares'

import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.css'

const composedEnhancers = composeWithDevTools(applyMiddleware(thunk))
const store = createStore(pokemonsReducer, composedEnhancers)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

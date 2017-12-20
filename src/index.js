import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import reducer from './reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

render(
  <Provider store = { createStoreWithMiddleware(reducer) }>
    <App/>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

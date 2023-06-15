import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './store/counterSlice'

const store = configureStore({
  reducer:{
    counter: counterReducer,
  },
  preloadedState: {
    counter: {
      inputValue: '', // Use the stored value or an empty string
      count: 0
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
)

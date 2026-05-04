// ✅ Sahi Tareeka
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  {Provider}  from 'react-redux'
import { store } from './store' // Path check karein, aapka store src ke andar hai

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider >
)
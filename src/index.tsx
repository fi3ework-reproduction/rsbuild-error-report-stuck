import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { a } from './a'

console.log(a)

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

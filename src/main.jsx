import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { StateProvider } from './context/StateProvider.jsx'
import { initialState } from './context/initialState.jsx'
import reducer from './context/reducer.jsx'
// import { StateProvider } from './context/StateProvider.jsx'
// import { initialState } from './context/initialState.jsx'
// import reducer from './context/reducer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <StateProvider initailState={initialState} reducer={reducer}>
     <App/>
    </StateProvider>
  </Router>,
)

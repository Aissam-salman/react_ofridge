import React from 'react'
import ReactDOM from 'react-dom/client'
// import './Header.css'
// import Header from './header.jsx'
import BackGround from './backgroundApp.jsx'
import './backgroundAppCss.css'



ReactDOM.createRoot(document.getElementById('backgroundBody')).render(
  <React.StrictMode>
    <BackGround />
  </React.StrictMode>,
)

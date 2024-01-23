import { useState } from 'react'
import './Header.css'


function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <div className="containerHeader">
      <div className="top-left">
       <h1>O'fridge</h1> 
      </div>
      </div>
      
    </>
  )
}

export default Header

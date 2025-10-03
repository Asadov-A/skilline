import { useState } from 'react'
import './Header.css'
import webLogo from '../../assets/icons/web-logo.png'

function Header() {

  return (
    <>
    <header>
      <div className="container">
    <nav>
      <img src={webLogo} alt="web-logo" />
 
      <ol>
        <li><a href="#">Home</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About Us</a></li>

        <div className="header__buttons">
          <button className="header__button-1">Login</button>
          <button className="header__button-2">Sign Up</button>
        </div>
      </ol>
    </nav>
      </div>
    </header>
    </>
  )
}

export default Header


import {React, useState} from 'react'
import './NavBar.css'
import { RxHamburgerMenu } from "react-icons/rx";


const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

  return (
    <header>
        <div className="container">
            <div className="grid navbar-grid">
                <div className="logo">
                    <h1>Mero Portfolio</h1>
                </div>
                
                <nav className={showMenu ? "menu-mobile": "menu-web"}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Services</a></li>
                        <li><a href="#projects">Portfolio</a></li>
                    </ul> 
                </nav>
                {/* Ham Part  */}
                <div className="ham-menu">
                    <button onClick={toggleMenu} >
                    <RxHamburgerMenu />
                    </button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavBar
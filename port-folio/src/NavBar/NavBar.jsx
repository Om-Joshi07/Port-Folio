

import React from 'react'

const NavBar = () => {
  return (
    <header>
        <div className="container">
            <div className="grid navbar-grid">
                <div className="logo">
                    <h1>Mero Portfolio</h1>
                </div>

                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Services</a></li>
                        <li><a href="#projects">Portfolio</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default NavBar
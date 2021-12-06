import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
       <header>
          <nav className="menu">
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>             
         </nav>
         <div className="logo-container">      
            <h1 className="logo">
              <Link to="/">
              <i className="fas fa-camera-retro"></i> Pexler
              </Link>
              </h1>           
        </div>    
      </header>
    )
}

export default Navbar
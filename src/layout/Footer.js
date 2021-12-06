import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer>
            <p><i className="fas fa-camera-retro"></i> Pexler &copy; 2021 Todos os direitos reservados</p>
            <nav className="menu">
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>                        
            </nav>
       </footer>
       </>
    )
}

export default Footer

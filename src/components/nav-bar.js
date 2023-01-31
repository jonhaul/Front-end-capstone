import React, { useState } from "react";
import { Link }  from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    
    const [click, setClick] = useState(false);
    

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    

    return (
    
        <nav className="nav-bar">
            <div className="nav-bar-cont">
                <Link to="/test" className="nav-logo">
                    <FontAwesomeIcon icon="faPalette" />
                </Link>
               
                <ul className='nav-menu'>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/Contact' className="nav-links" onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/Gallery' className="nav-links" onClick={closeMobileMenu}>
                            Gallery
                        </Link>
                    </li>

                    

                </ul>
                
            </div>
        </nav>
        
    );
}

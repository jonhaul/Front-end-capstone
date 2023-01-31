import React, { useState } from "react";
import { Link }  from 'react-router-dom';
// import { Button } from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Navbar() {
    
    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    // const showButton = () => {
    //     if(window.innerWidth <= 960) {
    //         setButton(false);
    //     } else {
    //           setButton(true);
    //     };
    // }   

    // window.addEventListener('resize', showButton);

    return (
    
        <nav className="nav-bar">
            <div className="nav-bar-cont">
                <Link to="/test" className="nav-logo">
                    <FontAwesomeIcon icon="palette" />
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

                    {/* <li className="nav-item">
                        <Link to='/test' className="nav-links-mobile" onClick={closeMobileMenu}>
                            Test
                        </Link>
                    </li> */}

                </ul>
                {/* {button && <Button buttonStyle='btn--outline'>Test</Button>} */}
            </div>
        </nav>
        
    );
}

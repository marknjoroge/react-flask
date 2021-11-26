import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { GiFilmSpool } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './NavBar.css';



function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const cookie = new Cookies();

    isLoggedIn = cookie.get('jwt_cookie') == null ?
        false :
        true

    alert(cookie.get('jwt_cookie'))

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };


    window.addEventListener('resize', showButton);



    return (

        <div className="navbar">
            <div className="navbar-container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <GiFilmSpool className='navbar-icon' />
                    Events
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                            Data
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}>

                                <Button buttonStyle='btn--outline'>
                                    SIGN UP
                                </Button>
                            </Link>
                        ) : (
                            <Link to='/sign-up' className='btn-link' onClick={closeMobileMenu}>

                                <Button buttonStyle='btn--outline'
                                    buttonSize='btn--mobile'>
                                    SIGN UP
                                </Button>
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;

import React, { useState, useEffect, useContext } from 'react';
import { Button } from './Button';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const {isAuthenticated,isEmployee} = useContext(AuthContext)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    {!isAuthenticated ? (
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Zebra
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                For Employee
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/employer'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                For Employer
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Resources
              </Link>
            </li>
            <li>
              {isEmployee && <Link
                to='/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
              }
              {!isEmployee && <Link
                to='/login-employer'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
              }
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && 
          <>
          <Button linkTo={isEmployee ? '/login':'/login-employer'} buttonStyle='btn--primary'>Login</Button>
          <Button linkTo={'/sign-up'} buttonStyle='btn--outline'>SIGN UP</Button>
          </>
          }
        </div>
      </nav>
      ) : null}
    </>
  );
}

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Brand from './Brand';
import CallToAction from './CallToAction';
import CartWidget from './CartWidget';
import CategoryButton from './CategoryButton';
import UserWidget from './UserWidget';
import HamburgerMenu from './HamburgerMenu';


const NavBar = () => {

  const [ isDesktop, setIsDesktop ] = useState(false);
  const [ openMenu, setOpenMenu ] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const desktopHeader = () => {
    return (
      <header className='header'>
        <div className='container'>
          <Brand />
          <nav className='header__navbar'>
            <ul className='navbar__list'>
              <li className='listItem' id='callToActionBtn'>
                <CallToAction />
              </li>
              <li className='listItem' id='categoryBtn'>
                  <CategoryButton />
              </li>
              <li className='listItem'>
                <Link to={"/sobreNosotros"} className='navBtn'>Sobre Nosotros</Link> 
              </li>
              <li className='listItem'>
                <Link to={"/contacto"} className='navBtn'>Contacto</Link>
              </li>
            </ul>
            <ul className='navbar__misc' >
              <li className='listItem' id='userWidgetBtn'>
                <UserWidget />
              </li>
              <li className='listItem' >
                <CartWidget />
              </li>
            </ul>
          </nav>
        </div> 
      </header>
    );
  };

  const mobileHeader = () => {
    return (
      <header className='header__mobile'>
        <div className='container'>
          <div className='header__banner'>
            <Brand />
            <HamburgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
          </div>
        </div> 
        <nav>

          
        </nav>
      </header>
    );
  };

  return (
    <>
      {isDesktop? desktopHeader() : mobileHeader()}
    </>
  );
};

export default NavBar;
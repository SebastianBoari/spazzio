import React from 'react';
import { Link } from 'react-router-dom';
import Brand from './Brand';
import CallToAction from './CallToAction';
import CartWidget from './CartWidget';
import CategoryButton from './CategoryButton';
import UserWidget from './UserWidget';


const NavBar = () => {
  return (
    <>
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
                <Link className='navBtn'>Sobre Nosotros</Link> 
              </li>
              <li className='listItem'>
                <Link className='navBtn'>Contacto</Link>
              </li>
            </ul>
            <ul className='navbar__misc'>
              <li className='listItem' id='userWidgetBtn'>
                <UserWidget />
              </li>
              <li className='listItem'>
                <CartWidget />
              </li>
            </ul>
          </nav>
        </div> 
      </header>
    </>
  );
};

export default NavBar;
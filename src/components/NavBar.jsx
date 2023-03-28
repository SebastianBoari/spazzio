import React from 'react';
import { Link } from 'react-router-dom';
import Brand from './Brand';
import CallToAction from './CallToAction';
import CartWidget from './CartWidget';
import CategoryButton from './CategoryButton';
import UserWidget from './UserWidget';


const NavBar = ({ clickToTop }) => {

  return (
    <>
      <header className='header'>
        <div className='container'>
          <Brand clickToTop={clickToTop} />
          <nav className='header__navbar'>
            <ul className='navbar__list'>
              <li className='listItem' id='callToActionBtn' onClick={() => clickToTop()}>
                <CallToAction />
              </li>
              <li className='listItem' id='categoryBtn'>
                  <CategoryButton clickToTop={clickToTop}/>
              </li>
              <li className='listItem' onClick={() => clickToTop()}>
                <Link to={"/sobreNosotros"} className='navBtn'>Sobre Nosotros</Link> 
              </li>
              <li className='listItem' onClick={() => clickToTop()}>
                <Link to={"/contacto"} className='navBtn'>Contacto</Link>
              </li>
            </ul>
            <ul className='navbar__misc' onClick={() => clickToTop()}>
              <li className='listItem' id='userWidgetBtn'>
                <UserWidget />
              </li>
              <li className='listItem' onClick={() => clickToTop()}>
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
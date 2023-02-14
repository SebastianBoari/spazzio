import React from 'react';
import SpazzioLogoV1 from '../assets/icons/spazzio-icon-v1.png';
import CartIcon from '../assets/icons/CartIcon.svg';
import UserIcon from '../assets/icons/UserIcon.svg';



const Header = () => {
  return (
    <>
      <header className='header'>

        <figure className='header__figure'>
            <img id='headerIcon' src={SpazzioLogoV1} alt="Spazzio Icon" />
        </figure>

        <nav className='header__navbar'>
          <ul className='navbar__list'>
            <li className='listItem'>
              <button className='navBtn'>Contacto</button>
            </li>
            
            <li className='listItem'>
              <button className='navBtn'>Sobre Nosotros</button>
            </li>
            
            <li className='listItem'>
              <button className='navBtn'>Catalogo</button>
            </li>
          </ul>

          <div className='navbar__misc'>
            <button id='userBtn'>
              <img id='userBtn__icon' src={UserIcon} alt="User Icon" />
            </button>

            <button id='cartBtn'>
              <img id='cartBtn__icon' src={CartIcon} alt="Cart Icon" />
            </button>
          </div>
        </nav>

      </header>
    </>
  )
};

export default Header;
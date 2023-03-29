import React from 'react';
import { Link } from 'react-router-dom';
import SpazzioLogoV1 from '../assets/icons/spazzio-icon-v1.png';

const Brand = () => {
  return (
    <figure id='brand'>
        <Link to={'/'}><img id='brandIcon' src={SpazzioLogoV1} alt="Spazzio Icon" /></Link>
    </figure>
  )
}

export default Brand
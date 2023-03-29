import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Item = ( { id, category, title, subtitle, price, oldPrice, isPopular, img1 } ) => {
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => {
    setShowModal(true);
  };

  const handleMouseLeave = () => {
    setShowModal(false);
  };

  return (
    <div className='card__container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className='card'>
        <h1 className='card__title'>{title}</h1>
        
        <img className='card__img' src={img1} alt="Imagen de producto" />
        
        <p className='card__subtitle'>{subtitle}</p>

        <div className='card__footer'>
          <p className='price'>${price}</p>
        </div>
      </div>
      {showModal && (
          <div className='viewDetailModal'>
            <Link className='viewDetail' to={`/item/${id}`}>Ver producto</Link>
          </div>
        )}
    </div>
  );
};

export default Item;
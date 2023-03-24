import React from 'react';
import { Link } from 'react-router-dom';

const Item = ( { category, title, subtitle, price, oldPrice, isPopular, img1 } ) => {
  return (
    <Link>
      <div className='card'>
        <h4>{title}</h4>
      </div>
    </Link>
  );
};

export default Item;
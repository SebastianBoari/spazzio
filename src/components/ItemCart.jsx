import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemCart = ({ id, category, title, subtitle, quantity, stock, price, img1  }) => {
    
    const { deleteProductFromCart } = useContext(CartContext);

    const subTotalCost = price * quantity;

    return (
    <div key={id} className='cartCard'>
        <img className='cartCard__img' src={img1} alt="" />
        <div className='cartCard__header'>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
        <div className='cartCard__body'>
            <p className='price'>Precio: ${price}</p>
            <p className='quantity'>Cantidad: {quantity} unidades</p>
            <p className='subtotal'>Subtotal: ${subTotalCost.toFixed(2)}</p>
        </div>
        <div className='cartCard__footer'>
            <button className='quit' onClick={() => deleteProductFromCart(id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.535 3H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.832-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3zM13 10.586l-2.828-2.829l-1.415 1.415L11.586 12l-2.829 2.828l1.415 1.415L13 13.414l2.828 2.829l1.415-1.415L14.414 12l2.829-2.828l-1.415-1.415L13 10.586z"/></svg>
            </button>
        </div>
    </div>
  );
};

export default ItemCart;
import React from 'react';

const ItemCart = ({ id, category, title, subtitle, quantity, stock, price, img1, removeItem, setTotalCost, totalCost }) => {
    const subTotalCost = () => {
        const currentPrice = price * quantity;
        return currentPrice.toFixed(2);
    }
    
    
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
            <p className='subtotal'>Subtotal: ${subTotalCost()}</p>
        </div>
        <div className='cartCard__footer'>
            <button className='quit' onClick={() => removeItem(id)}>x</button>
        </div>
    </div>
  );
};

export default ItemCart;
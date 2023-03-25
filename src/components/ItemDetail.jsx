import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ( { item } ) => {

  const { cart, setCart } = useContext(CartContext);
  const [counter, setCounter] = useState(1);

  // Revisa si ya existe el item dentro del Cart
  const isInCart = (itemId) => {
    return cart.find((item) => item.id === itemId) !== undefined;
  };
  // Elimina duplicados y une cantidades
  const removeDuplicates = (cartItems) => {
    const uniqueItems = [];
    cartItems.forEach((item) => {
      const existingItemIndex = uniqueItems.findIndex((i) => i.id === item.id);
      if (existingItemIndex !== -1) {
        uniqueItems[existingItemIndex].quantity += item.quantity;
      } else {
        uniqueItems.push(item);
      }
    });
    return uniqueItems;
  };

  const addToCart = () => {
    const newCart = [...cart, {...item, quantity: counter}];
    setCart(removeDuplicates(newCart));
  };

  // Logica para mostrar el precio actualizado
  const [price, setPrice] = useState(1)
  const currentPrice = item.price * price;

  return (
    <article id='itemDetail'>
      <div id='iitemDetail__content'>
        <div id='content__text'>
            <h1 id='title'>{item.title}</h1>
            <h2 id='subtitle'>{item.subtitle}</h2>
            <p id='category'>Categoria: {item.categoryId}</p>
            <p id='description'>{item.description}</p>
        </div>
        <div id='container__price'>
          <p id='stock'>Stock: {item.stock} unidades</p>
          <p id='price'>${currentPrice.toFixed(2)}</p>
        </div>
        <div id='content__buttons'>
          <button id='addToCart' onClick={() => addToCart()}><Link to={"/carrito"}>Agregar al carrito</Link></button>
          <ItemCount item={item} setPrice={setPrice} counter={counter} setCounter={setCounter} />
        </div>
      </div>
      <div id='itemDetail__gallery'>
        <img id='img1' src={item.img1} alt="" />
        <img id='img2' src={item.img2} alt="" />
        <img id='img3' src={item.img3} alt="" />
      </div>
    </article>
  );
};

export default ItemDetail;
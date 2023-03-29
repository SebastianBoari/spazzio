import React, { useState , useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';


const ItemDetail = ( { item } ) => {
  const { cart, setCart, isInCart, addProductToCart, deleteProductFromCart } = useContext(CartContext);

  // En este componente solo se guarda informacion en el localStorage que luego en CartCointainer se recupera para actualizar la informacion
  const [counter, setCounter] = useState(1);
  
  // Logica para mostrar el precio actualizado
  const [price, setPrice] = useState(0);
  useEffect(() => {
      setPrice(item.price * counter);
  }, [item, counter]);
  

  const addToCart = () => {
    addProductToCart(item, item.id, counter);
    toast.success('Agregado al carrito', {autoClose: 1000});
  };

  const deleteFromCart = () => {
    deleteProductFromCart(item.id);
    toast.success('Eliminado del carrito', {autoClose: 1000});
  };


 // Renderizado
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
          <p id='price'>${price.toFixed(2)}</p>
        </div>
        <div id='content__buttons'>
          {/* { onCart? <button className='button' id='instantBuy' disabled><p>Comprar</p></button> : <button className='button' id='instantBuy'><p>Comprar</p></button> } */}
          { !isInCart(item.id)? <button className='button' id='addToCart' onClick={() => addToCart()}><p>Agregar al carrito</p></button> : <button className='button' id='deleteFromCart' onClick={() => deleteFromCart()}><p>Quitar del carrito</p></button>} 
          

          <ItemCount item={item} counter={counter} setCounter={setCounter} />
        </div>
      </div>
      <div id='itemDetail__gallery'>
        <img id='img1' src={item.img1} alt={`Foto del producto ${item.title}`} />
        <img id='img2' src={item.img2} alt={`Foto del producto ${item.title}`} />
        <img id='img3' src={item.img3} alt={`Foto del producto ${item.title}`} />
      </div>
    </article>
  );
};

export default ItemDetail;
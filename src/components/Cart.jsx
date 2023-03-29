import React, { useContext, useEffect, useState } from 'react';
import CallToAction from './CallToAction';
import ItemCart from './ItemCart';
import PopularProducts from './PopularProducts';
import { CartContext } from '../context/CartContext';
import CartIcon from '../assets/icons/logo1-black.png';
import { Link } from 'react-router-dom';
import CheckOut from './CheckOut';

const Cart = () => {

  const { cart, clearCart } = useContext(CartContext);


  // Precio total actualizado
  const [ totalCost, setTotalCost ] = useState(0);
  if(cart.length > 0){
    useEffect(() => {
      const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotalCost(totalPrice);
    }, [cart]);
  };

  const [ displayCheckOut, setDisplayCheckOut ] = useState(false);

  // Renderizado
  if(cart.length > 0){
    return (
      <section id='activeCart'>
      <div id='activeCart__container'>
        <article id='cart__sidePanel'>
          <div className='sidePanel__header'>
            <img src={CartIcon} alt="Logo de Spazzio" />
          </div>

          <div className='sidePanel__body'>

            <div className='body__price'>
              <p>Muchas gracias por confiar en nosotros!</p>
                <h2>Total: $ {totalCost.toFixed(2)}</h2>
            </div>

            <div className='body__buttons'>
              <button id='toBuy' onClick={() => setDisplayCheckOut(!displayCheckOut)}>Finalizar Compra</button>
              { displayCheckOut && (
                <CheckOut cart={cart} totalCost={totalCost}/>
              )}
              <Link to={"/catalogo"}><button id='toKeep'>Seguir Comprando</button></Link>
              <button id='toClean' onClick={() => clearCart()}>Limpiar carrito</button>
            </div>

          </div>
        </article>

        <article className='cart__container'>
          {cart.map((item) => {
            return (
              <ItemCart key={item.id} 
              id={item.id}
              category={item.categoryId}
              title={item.title}
              subtitle={item.subtitle}
              quantity={item.quantity}
              stock={item.stock}
              price={item.price}
              img1={item.img1}
              />
            );
          })}
        </article>
      </div>

    </section>
    );

  } else {

    return (
      <>
      <section id='cart'>

        <article id='emptyCart'>
          <figure className='emptyCart__figure'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 13q.425 0 .713-.288T13 12V7.975q0-.425-.288-.7T12 7q-.425 0-.713.288T11 8v4.025q0 .425.288.7T12 13Zm0 4q.425 0 .713-.288T13 16q0-.425-.288-.713T12 15q-.425 0-.713.288T11 16q0 .425.288.713T12 17Zm0 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
          </figure>
          <div className='emptyCart__text'>
            <h2>Aún no tienes productos en el carrito.</h2>
            <p>Mira todos nuestros productos en nuestro <CallToAction/></p>
          </div>
        </article>

      </section>
      <PopularProducts />
      </>
    );
  };
};

export default Cart;
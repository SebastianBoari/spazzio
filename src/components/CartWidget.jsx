import React, {useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cart  } = useContext(CartContext);

  const [ showBadge, setShowBadge ] = useState(false);
  
  useEffect(() => {
    if(cart && cart.length > 0){
      setShowBadge(true);
    } else (
      setShowBadge(false)
    );
  }, [cart]);
  
  return (
    <button id='cartWidget'>
      <Link to={'/carrito'}>

        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V8q0-.825.588-1.412Q5.175 6 6 6h2q0-1.65 1.175-2.825Q10.35 2 12 2q1.65 0 2.825 1.175Q16 4.35 16 6h2q.825 0 1.413.588Q20 7.175 20 8v12q0 .825-.587 1.413Q18.825 22 18 22Zm3-11q.425 0 .713-.288Q10 10.425 10 10V8H8v2q0 .425.288.712Q8.575 11 9 11Zm1-5h4q0-.825-.587-1.412Q12.825 4 12 4q-.825 0-1.412.588Q10 5.175 10 6Zm5 5q.425 0 .713-.288Q16 10.425 16 10V8h-2v2q0 .425.288.712q.287.288.712.288Z"/></svg>

        {showBadge && (
          <span id='cartBadge'>{cart.length}</span>
        )}
        
        </Link>
        
    </button>
  )
}

export default CartWidget
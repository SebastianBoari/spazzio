import React, { useState } from 'react';

const ItemCount = ( { item } ) => {
  const [counter, setCounter] = useState(0);
  
  const add = () => {
    if(counter < item.stock){
      setCounter(counter + 1);
    }
  };

  const sub = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  };


  return (
    <div id='itemCount'>
      <button className='itemCount__btn' onClick={add}>+</button>
      <p className='itemCount__counter'>{counter}</p>
      <button className='itemCount__btn' onClick={sub}>-</button>
    </div>
  );
};

export default ItemCount;
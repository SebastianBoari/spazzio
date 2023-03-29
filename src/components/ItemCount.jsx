import React from 'react';

const ItemCount = ( { item, counter, setCounter } ) => {
  const add = () => {
    if(counter < item.stock){
      setCounter(counter + 1);
    };
  };
  const sub = () => {
    if(counter > 1){
      setCounter(counter - 1);
    };
  };

  return (
    <div id='itemCount'>
      <button className='itemCount__btn' onClick={sub}>-</button>
      <p className='itemCount__counter'>{counter}</p>
      <button className='itemCount__btn' onClick={add}>+</button>
    </div>
  );
};

export default ItemCount;
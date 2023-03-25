import React, { useState, useEffect } from 'react';

const ItemCount = ( { item, setPrice, counter, setCounter } ) => {
  // Logica para contar cantidad de producto
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
  // Logica para mostrar el precio actualizado
  useEffect(()=>{
    setPrice(counter);
  }, [counter]);

  return (
    <div id='itemCount'>
      <button className='itemCount__btn' onClick={add}>+</button>
      <p className='itemCount__counter'>{counter}</p>
      <button className='itemCount__btn' onClick={sub}>-</button>
    </div>
  );
};

export default ItemCount;
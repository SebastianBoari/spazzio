import React from 'react'
import ItemCount from './ItemCount';


const ItemDetail = ( { item } ) => {
  return (
    <article id='itemDetail'>
      <div id='iitemDetail__content'>
        <div id='content__text'>
            <h1 id='title'>{item.title}</h1>
            <h2 id='subtitle'>{item.subtitle}</h2>
            <p id='description'>{item.description}</p>
        </div>
        <div id='container__price'>
          <p id='price'>${item.price}</p>
        </div>
        <div id='content__buttons'>
          <button id='addToCart'>Agregar al carrito</button>
          <ItemCount item={item} />
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
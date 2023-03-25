import React from 'react';
import Item from './Item';

const ItemList = ( { products }) => {
  return (
    <article id='itemList'>
        {products.map((product) => {
          return (
            <Item key={product.id} 
            id={product.id}
            category={product.categoryId}
            title={product.title}
            subtitle={product.subtitle}
            price={product.price}
            oldPrice={product.oldPrice}
            isPopular={product.isPopular}
            img1={product.img1}
            />
          );
        })}
    </article>
  );
};

export default ItemList;
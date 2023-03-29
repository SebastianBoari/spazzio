import React, { useState, createContext } from 'react';

export const  CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  // Esta en el cart? Devuelve true o false
  const isInCart = (itemId) => {
    return cart.some((item) => item.id === itemId);
  }

  const addProductToCart = (item, itemId, quantity) => {
    // Si ya existia el producto en el carrito busca el item.quantity del objeto y le suma la cantidad del producto
    if(isInCart(itemId)){
      setCart(cart => cart.map(item => {
        if(item.id === itemId){
          return {...item, quantity: item.quantity + quantity};
        }
        return item;
      }));
    } else {
      // Si no existe el producto en el carrito agrega el producto al cart
      const itemToAdd = {...item, quantity: quantity};
      setCart(cart => [...cart, itemToAdd]);
    };
  };

  const deleteProductFromCart = (itemId) => {
    // Si existe el producto en el cart lo elimina
    if(isInCart(itemId)){
      setCart(cart => cart.filter(item => item.id !== itemId));
    };
  };

  // Limpia el carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{cart, setCart, isInCart, addProductToCart, deleteProductFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  );
};
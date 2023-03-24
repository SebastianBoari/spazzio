import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';


const ItemListContainer = () => {

  // Logica para traer info de Firebase


  return (

    // Logica para pasar informacion sobre categorias con useParams
    <section id='itemListContainer'>
      <ItemList />
    </section>
  );
};

export default ItemListContainer;
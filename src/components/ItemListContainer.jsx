import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Loader from './Loader';

const ItemListContainer = () => {
  const { category } = useParams();

  // Logica para traer productos de Firebase
  const [products, setProducts] = useState();

  useEffect(() =>{
    const db = getFirestore();

    const itemsCollection = collection(db, "productos");
    getDocs(itemsCollection)
    .then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setProducts(docs);
    })
  }, []);

  // Logica para filtrar productos por categoria
  const [categoryFilter, setCategoryFilter] = useState([]);

  // Si productos y category estan definidos se realizo el filtrado
  useEffect(() => {
    if (products && category) {
      const catFilter = products.filter((item) => item.categoryId === category);
      // Lo guardo en un estado
      setCategoryFilter(catFilter);
    } else if (products) {
      setCategoryFilter(products);
    }
  }, [products, category]);
  

  if(products && products.length > 0){
    if(category && categoryFilter.length > 0){
      return (
        <section id='itemListContainer'>
          <ItemList products={categoryFilter} />
        </section>
      );
    } else {
      return (
        <section id='itemListContainer'>
          <ItemList products={products} />
        </section>
      );
    };
  } else {
    return (
      <section id='itemListContainer'>
        <Loader />
      </section>
    );
  };
};

export default ItemListContainer;
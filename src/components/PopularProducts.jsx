import React, { useState, useEffect} from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemList from './ItemList';

const PopularProducts = () => {

    // Logica para traer productos de Firebase
    const [rawProducts, setRawProducts] = useState();

    useEffect(() =>{
      const db = getFirestore();
  
      const itemsCollection = collection(db, "productos");
      getDocs(itemsCollection)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => doc.data());
        setRawProducts(docs);
      })
    }, []);
  
    // Logica para filtrar productos por categoria
    const [popularFilter, setPopularFilter] = useState([]);
  
    // Si productos y category estan definidos se realizo el filtrado
    useEffect(() => {
      if (rawProducts) {
        const popFilter = rawProducts.filter((item) => item.isPopular === true);
        // Lo guardo en un estado
        setPopularFilter(popFilter);
      } 
    }, [rawProducts]);



  return (
    <article id='popularProducts'>
      <div className='popularProducts__container'>
        <h2 className='popularProdcuts__title'>Productos destacados</h2>
        <ItemList products={popularFilter}/>
      </div>
    </article>
  )
}

export default PopularProducts
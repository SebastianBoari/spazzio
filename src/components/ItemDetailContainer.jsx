import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from './ItemDetail';
import Loader from './Loader';

const ItemDetailContainer = () => {
  const { id } = useParams();
  // Tiempo de espera falso para probar loader xd
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  });
  // Logica para obtener informacion del servidor
  const [item, setItem] = useState([]);
  useEffect(() => {
    const db = getFirestore();

    const oneItem = doc(db, "productos", `${id}`);
    getDoc(oneItem).then((snapshot) => {
      if(snapshot.exists()){
        const docs = snapshot.data();
        setItem(docs);
      }
    });
  }, []);

  if(loading){
    return (
      <section id='itemDetailContainer'>
        <Loader />
      </section>
    );
  } else {
    return (
      <section id='itemDetailContainer'>
        <ItemDetail item={item}/>
      </section>
    );
  };
};

export default ItemDetailContainer;
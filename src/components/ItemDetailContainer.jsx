import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
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
    }, 500);
  });
  // Logica para obtener informacion del servidor
  const [item, setItem] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const oneItem = doc(db, "productos", `${id}`);
    
    try {
      getDoc(oneItem).then((snapshot) => {
        if(snapshot.exists()){
          const docs = snapshot.data();
          setItem(docs);
        };
      });
    } catch(error) {
      console.error(error);
      alert("Ups, error al intentar mostrar información. Por favor, vuelva a interntarlo más tarde.")
    };
  }, []);

    return (
      <section id='itemDetailContainer'>
      {loading? <Loader /> : <ItemDetail item={item}/>}
      <ToastContainer />
      </section>
    );
};

export default ItemDetailContainer;


import React, { useEffect, useState } from 'react';
import checkOutIcon from '../assets/icons/icon-colored-v1.png'
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const CheckOut = ({ cart, totalCost }) => {
    const [ orderId, setOrderId ] = useState(null);
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ number, setNumber ] = useState();

    const order = {
        buyer: {
            name:name,
            email: email,
            number: number
        },
        items: {...cart},
        total: totalCost
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        const db = getFirestore()
        const ordersCollection = collection(db, "orden");
        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    };

    const finished = () => {
        return (
            <div id='orderPanel'>
                {alert("Muchas gracias por su compra!")}
                <h2>Muchas gracias por su compra!</h2>
                <p>Codigo de la orden: {orderId}</p>
            </div>
        );
    };

    
    return (
        <div id='checkOut' onSubmit={(e) => handleSubmit(e)}>
            {}
            <form id='checkOut__form'>
                <div id='form__resume'>
                    <figure className='resuem__figure'>
                        <img src={checkOutIcon} />
                    </figure>
                    <div className='resume__info'>
                        <h1>Finalizar Compra</h1>
                        <p>Total a abonar: ${totalCost.toFixed(2)}</p>
                    </div>
                </div>

                <div className='formField'>
                    <label htmlFor="name">Nombre y apellido:</label>
                    <input type="text" id='name' onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className='formField'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className='formField'>
                    <label htmlFor="number">Numero de telefono:</label>
                    <input type="number" name="number" id="number" onChange={(e) => setNumber(e.target.value)}/>   
                </div>

                <input id='submitButton' type="submit" value="Comprar" />
                { orderId && (
                    finished()
                )}
            </form>
        </div>
    );
};

export default CheckOut;
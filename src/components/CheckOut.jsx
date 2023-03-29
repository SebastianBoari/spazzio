import React from 'react';
import checkOutIcon from '../assets/icons/icon-colored-v1.png'

const CheckOut = ({ cart, totalCost }) => {
    
    const submitOrder = (e) => {
        e.preventDefault()
    };
    
    return (
        <div id='checkOut' onSubmit={(e) => submitOrder(e)}>
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
                    <input type="text" id='name' />
                </div>

                <div className='formField'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" />
                </div>

                <div className='formField'>
                    <label htmlFor="number">Numero de telefono:</label>
                    <input type="number" name="number" id="number" />   
                </div>

                <input id='submitButton' type="submit" value="Comprar" />
            </form>
        </div>
    );
};

export default CheckOut;
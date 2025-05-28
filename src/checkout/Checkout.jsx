import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import FormularioCheckout from './FormularioCheckout';
import db from '../database/database';
import './checkout.css';

const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: '',
        telefono: '',
        email: '',
    })

    const [idOrden, setIdOrden] = useState(null);
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleChangeInput = (event) => { 
        setDatosForm({...datosForm, [event.target.name]: event.target.value})
    };

    const handleSubmitForm = (event) => {
        event.preventDefault();

        const orden = {
            comprador: { ...datosForm },
            productos: [ ...carrito ],
            fecha: Timestamp.fromDate(new Date()),
            total: precioTotal(),
        }

        sendOrder(orden);
    };

    const sendOrder = async (orden) => {
        try {
            const ordenesRef = collection(db, "ordenes");
            const ordenDb = await addDoc(ordenesRef, orden);
            setIdOrden(ordenDb.id);
            vaciarCarrito();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="checkout">
            {idOrden ? (
                <div className="checkout__order-completed">
                    <h2 className="checkout__title">Orden completada</h2>
                    <p className="checkout__order-id">ID de la orden: <span>{idOrden}</span></p>
                </div>
            ) : (
                <FormularioCheckout 
                    datosForm={datosForm} 
                    handleChangeInput={handleChangeInput} 
                    handleSubmitForm={handleSubmitForm} 
                    className="checkout__form"
                />
            )}
        </div>
    )
}

export default Checkout;

import React from "react";
import Icon_success from '../assets/Icon_success.png'
import { Link } from 'react-router-dom';

const SuccessfulOrder = ({orderID}) => {
    return(
        <div className="success-order">
             <div className="success-order-container-icon text-center">
                <img src={Icon_success} alt="Icon success" className="success-order-icon"/>
            </div>

            <div className="success-order-text">
                <h1 className='form-title text-uppercase'>Tu pedido ha sido completado</h1>
                <p className='form-code'>Código de pedido: {orderID}</p>
                <p className='form-text'>Gracias por comprar en CULTURE</p>
            </div>

            <div className='text-center'>
            <Link to='/' className='success-order-button w-100 btn-form text-uppercase btn btn-dark'>
            Seguir comprando</Link>
            </div>
        </div>
    )
}

export default SuccessfulOrder
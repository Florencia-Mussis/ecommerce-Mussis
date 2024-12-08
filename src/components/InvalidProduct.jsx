import React from "react";
import { Link } from 'react-router-dom';

const InvalidProduct = () => {
    return(
        <div className="success-order">
            <div className="success-order-text">
                <h1 className='form-title text-uppercase'>El producto no existe</h1>
            </div>

            <div className='text-center'>
            <Link to='/' className='success-order-button w-100 btn-form text-uppercase btn btn-dark'>
            Seguir comprando</Link>
            </div>
        </div>
    )
}

export default InvalidProduct
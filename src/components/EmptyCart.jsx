import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
    return (
        <div className="empty-cart-container d-flex justify-content-center">
            <div className="empty-cart-info d-flex flex-column">
                <h1 className="text-uppercase text-cart-empty mb-0 text-center">Tu bolsa está vacía</h1>
                <Link to='/' className="btn btn-dark text-uppercase text-cart-empty-button rounded-0">Comprar</Link>
            </div>
        </div>
    )
}

export default EmptyCart

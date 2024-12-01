import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartList = () => {
    const {cart, totalCart, clear, cartUnits} = useCart()

    return (
        <div className="cart-list row">
            <div className="col-md-9">
                <div className="row">
                    {cart.map((product) => (
                        <CartItem key={product.id} product={product} />
                    ))}
                </div> 
            </div> 
            <div className="col-md-3 order-detail d-flex flex-column">
                <div className="order-info d-flex flex-column">  
                    <div className="d-flex justify-content-between">
                        <p>Nº de artículos</p>
                        <p>{cartUnits()}</p>
                    </div>    
                    <div className="d-flex justify-content-between">
                        <p>Subtotal</p>
                        <p>{totalCart()},00 €</p>
                    </div>  
                    <div className="d-flex justify-content-between">
                        <p>Envío</p>
                        <p>0,00 €</p>
                    </div>  
                </div>      
                <div className="d-flex justify-content-between">
                    <div>
                        <p className="total">Total</p>
                        <p className="taxes">Impuestos incluidos</p>
                    </div> 
                    <div> 
                        <p className="total">{totalCart()},00 €</p>
                    </div> 
                </div>  
                <div className="order-buttons d-flex flex-column">
                    <Link to='/checkout' className="order-button btn btn-dark text-uppercase rounded-0 w-100">Completar pedido</Link>
                    <button className="order-button btn btn-dark text-uppercase rounded-0 w-100" onClick={clear}>Eliminar carrito</button>
                </div>
                <div className="extra-info d-flex flex-column">
                    <p>Envío gratis a partir de 10 €</p>
                    <p>Devolución gratuita en 30 días</p>
                </div>
            </div>
        </div>
    )
}

export default CartList

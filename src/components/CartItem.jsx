import React from "react"
import { useCart } from "../context/CartContext"

const CartItem = ({product}) => {
    const {removeItem} = useCart()

    return(
        <div className="col-md-4 border-bottom-0">
            <div className="position-relative align-items-center mb-3 border-bottom-0 pb-3" >
                <img src={product.img} alt={product.name} className="img-fluid"/>
                <div className="cart-item-info d-flex flex-column">
                    <p>{product.name}</p>
                    <p>{product.price},00 €</p>
                    <p>Unidades: {product.units}</p>
                    <div className="d-flex justify-content-between mt-3">
                        <p>Precio final: {product.units * product.price},00 €</p>
                        <button className="position-absolute remove-button border-0" onClick={()=> removeItem(product.id)}>
                            <span>x</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
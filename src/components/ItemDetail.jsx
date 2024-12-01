import React, { useContext } from "react"
import ItemCount from "./ItemCount"
import CollapsibleSection from "./CollapsibleSection"
import ProductCarousel from "./ProductCarousel"
import { useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"


const ItemDetail = ({product}) => {
    const [purchase, setPurchase] = useState(false)
    const {addToCart} = useContext(CartContext)

    const onAdd = (units) => {
        setPurchase(true)
        let cartItem = {
            name: product.name,
            img: product.img,
            price: product.price,
            stock: product.stock,
            id: product.id
        }
        addToCart(cartItem, units)
    }


    return(
        <div className="product-page">
            <div className="row">
                <div className="carousel-container col-12 d-md-none">
                    <ProductCarousel images={[product.img, product.img2, product.img3, product.img4]} />
                </div>

                <div className="col-md-4 text-center d-none d-md-block">
                    <img src={product.img} alt={product.name} className="w-100" loading="lazy"/>
                    <img src={product.img2} alt={product.name} className="w-100" loading="lazy"/>
                </div>
                <div className="col-md-4 text-center d-none d-md-block">    
                    <img src={product.img3} alt={product.name} className="w-100" loading="lazy"/>
                    <img src={product.img4} alt={product.name} className="w-100" loading="lazy"/>
                </div>
                <div className="col-md-4 text-center">
                    <div className="product-info d-flex flex-column align-items-start">
                        <span className="tag text-uppercase">New</span>
                        <div className="name-price d-flex flex-column align-items-start">
                            <h1 className="title text-uppercase">{product.name}</h1>
                            <span className="price">{product.price}.00 €</span>
                        </div>
                        {purchase ?
                            <div className="purchase-options d-flex flex-column w-100">
                                <div>
                                    <p className="art-added text-uppercase">¡Artículo agregado a la bolsa!</p>
                                </div>
                                <button className="text-uppercase rounded-0 add-to-cart">
                                    <Link to='/' className='text-white text-decoration-none'>Seguir comprando </Link> 
                                </button>
                                <button className="text-uppercase rounded-0 add-to-cart">
                                    <Link to='/cart' className='text-white text-decoration-none'>Ir al carrito </Link>
                                </button>    
                            </div>
                         : <ItemCount stock={product.stock} onAdd={onAdd}/>}
                        <CollapsibleSection product={product}/>
                    </div>
                </div>  
            </div>  
        </div>   
    )
}

export default ItemDetail
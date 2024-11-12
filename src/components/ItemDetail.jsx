import React from "react"
import ItemCount from "./ItemCount"
import CollapsibleSection from "./CollapsibleSection"

const ItemDetail = ({product}) => {
    const onAdd = (count) => {
        if (count > 0) {
            alert(`Agregaste al carrito ${count} productos`) 
        }
    }

    return(
        <div className="product-page container">
            <div className="row">
                <div className="col-md-4 text-center">
                    <img src={product.img} alt={product.img} className="w-100"/>
                    <img src={product.img2} alt={product.img} className="w-100"/>
                </div>
                <div className="col-md-4 text-center">    
                    <img src={product.img3} alt={product.img} className="w-100"/>
                    <img src={product.img4} alt={product.img} className="w-100"/>
                </div>
                <div className="col-md-4 text-center">
                    <div className="product-info d-flex flex-column align-items-start">
                        <span className="tag text-uppercase">New</span>
                        <div className="name-price d-flex flex-column align-items-start">
                            <h1 className="title text-uppercase">{product.name}</h1>
                            <span className="price">{product.price} €</span>
                        </div>
                        <ItemCount stock={product.stock} onAdd={onAdd}/>
                        <CollapsibleSection product={product}/>
                
                    </div>
                </div>
            </div>    
        </div>    
    )
}

export default ItemDetail
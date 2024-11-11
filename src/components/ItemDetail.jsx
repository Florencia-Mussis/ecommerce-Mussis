import React from "react"
import ItemCount from "./ItemCount"

const ItemDetail = ({product}) => {
    const onAdd = (count) => {
        if (count > 0) {
            alert(`Agregaste al carrito ${count} productos`) 
        }
    }

    return(
        <div>
            <h1>{product.name}</h1>
            <span>{product.price}</span>
            <p>{product.description}</p>
            <img src={product.img} alt={product.img}/>
            <ItemCount stock={product.stock} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail
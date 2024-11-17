import React from "react"
import Item from "./Item"

const ItemList = ({products}) => {
    return (
        <div className='item-list-container row' id="all-products">
            {products.map((product)=> (
            <div className='col-6 col-md-4 col-lg-3 mb-5' key={product.id}>
                <Item product={product}/>
            </div>
            ))}
        </div>
    )
}

export default ItemList
import React from "react"
import {Link} from 'react-router-dom'

const Item = ({product}) => {
    return(
        <Link to={`/item/${product.id}`} className="item-link">
            <div className="card order border-0 gap-2">
                <img src={product.img} className="card-img-top rounded-0" alt="{product.title}"/>
                <div className="card-body d-flex flex-column p-0 gap-2 text-start">
                    <p className="card-tag text-uppercase m-0">New</p>
                    <h5 className="card-title m-0">{product.name}</h5>
                    <p className="card-text">{product.price}.00 € </p>
                </div>
            </div>
        </Link>
    )
}

export default Item
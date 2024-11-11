import React from "react"

const Item = ({product}) => {
    return(
        <div className="card order border-0 gap-2">
            <img src={product.img} className="card-img-top rounded-0" alt="product.title}"/>
            <div className="card-body d-flex flex-column p-0 gap-2 text-start">
                <p className="card-tag text-uppercase m-0">New</p>
                <h5 className="card-title m-0">{product.name}</h5>
                <p className="card-text">{product.price} € </p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    )
}

export default Item
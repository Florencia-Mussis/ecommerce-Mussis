import React from "react"
import ItemCount from "./ItemCount"
import CollapsibleSection from "./CollapsibleSection"
import ProductCarousel from "./ProductCarousel"

const ItemDetail = ({product}) => {
    const onAdd = (count) => {
        if (count > 0) {
            alert(`Agregaste al carrito ${count} productos`) 
        }
    }

    return(
        <div className="product-page">
            <div className="row">
                <div className="carousel-container col-12 d-md-none">
                    <ProductCarousel images={[product.img, product.img2, product.img3, product.img4]} />
                </div>

                <div className="col-md-4 text-center d-none d-md-block">
                    <img src={product.img} alt={product.name} className="w-100"/>
                    <img src={product.img2} alt={product.name} className="w-100"/>
                </div>
                <div className="col-md-4 text-center d-none d-md-block">    
                    <img src={product.img3} alt={product.name} className="w-100"/>
                    <img src={product.img4} alt={product.name} className="w-100"/>
                </div>
                <div className="col-md-4 text-center">
                    <div className="product-info d-flex flex-column align-items-start">
                        <span className="tag text-uppercase">New</span>
                        <div className="name-price d-flex flex-column align-items-start">
                            <h1 className="title text-uppercase">{product.name}</h1>
                            <span className="price">{product.price}.00 €</span>
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
import React, { useEffect, useState } from "react"
import { getProduct } from "../mock/data"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    useEffect(()=>{
        getProduct('W-6')
        .then((res)=> setProduct(res))
        .catch((error)=> console.log(error))
    }, [])
 
    return(
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer
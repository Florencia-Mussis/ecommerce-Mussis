import React, { useEffect, useState } from "react"
import { getProduct } from "../mock/data"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    useEffect(()=>{
        getProduct('W-6')
        .then((res)=> setProduct(res))
        .catch((error)=> console.log(error))
    }, [])
 
    return(
        <div>
            <ItemDetailContainer product={product}/>
        </div>
    )
}

export default ItemDetailContainer
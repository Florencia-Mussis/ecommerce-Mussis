import React, { useEffect, useState } from "react"
import { getProduct } from "../mock/data"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams() 

    useEffect(()=>{
        getProduct(id)
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
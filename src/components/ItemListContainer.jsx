import React, {useState, useEffect} from "react"
import { getProducts } from "../mock/data"
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        getProducts()
        .then((res)=> setProducts(res))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[])

    return (
        <div>
            {/* <h1 classNameName="text-center text-uppercase fs-1 p-2">{greeting}</h1> */}
            {loading ? <p>Cargando...</p> : <ItemList products={products}/>}
        </div>
    )
}

export default ItemListContainer
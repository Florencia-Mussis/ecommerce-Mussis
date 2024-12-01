import React, { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import Loader from "./Loader"
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from '../services/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const {id} = useParams() 

    useEffect(()=>{
        setLoading(true)
        const productsCollection = collection(db, 'products')
        const docRef = doc(productsCollection, id)
        getDoc(docRef)
        .then((res) => setProduct({id: res.id, ...res.data()}))
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
    }, [])

    // Local
    // useEffect(()=>{
    //     setLoading(true)
    //     getProduct(id)
    //     .then((res)=> setProduct(res))
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setLoading(false))
    // }, [])
 
    return(
        <div>
           {loading ? <Loader/> : <ItemDetail product={product}/>}
        </div>
    )
}

export default ItemDetailContainer
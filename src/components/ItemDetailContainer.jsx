import React, { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import Loader from "./Loader"
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from '../services/firebase'
import InvalidProduct from "./InvalidProduct"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const [invalidProduct, setInvalidProduct] = useState(false)
    const {id} = useParams() 

    useEffect(()=>{
        setLoading(true)
        const productsCollection = collection(db, 'products')
        const docRef = doc(productsCollection, id)
        getDoc(docRef)
        .then((res) => {
            if (res.data()){
                setProduct({id: res.id, ...res.data()})
            } else {
                setInvalidProduct(true)
            }
        })
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

    if(invalidProduct) {
        return(
            <div>
             <InvalidProduct/>
            </div>
        )
    } else {    
        return(
            <div>
            {loading ? <Loader/> : <ItemDetail product={product}/>}
            </div>
        )
    }    
}

export default ItemDetailContainer
import React, {useState, useEffect} from "react"
import { productsDB } from "../mock/data"
import HeroSection from "./HeroSection"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import HeroHome from "../assets/Hero_home.png"
import HeroHomeMobile from "../assets/Hero_home_mobile.png"
import HeroWoman from "../assets/Hero_woman.png"
import HeroWomanMobile from "../assets/Hero_woman_mobile.png"
import HeroMan from "../assets/Hero_man.png"
import HeroManMobile from "../assets/Hero_man_mobile.png"
import HeroGirl from "../assets/Hero_girl.png"
import HeroGirlMobile from "../assets/Hero_girl_mobile.png"
import HeroBoy from "../assets/Hero_boy.png"
import HeroBoyMobile from "../assets/Hero_boy_mobile.png"
import Loader from "./Loader"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../services/firebase"

const categoryImages = {
    woman: {
        desktop: HeroWoman,
        mobile: HeroWomanMobile,
    },
    man: {
        desktop: HeroMan,
        mobile: HeroManMobile,
    },
    girl: {
        desktop: HeroGirl,
        mobile: HeroGirlMobile,
    },
    boy: {
        desktop: HeroBoy,
        mobile: HeroBoyMobile,
    },
    default: {
        desktop: HeroHome, 
        mobile: HeroHomeMobile,
    },
}


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const {category} = useParams()

    // Firebase
    useEffect(()=>{
        setLoading(true)

        const productsCollection = category 
        ? query(collection(db, 'products'), where('category', '==', category)) 
        : collection(db, 'products')
        getDocs(productsCollection)
        .then((res) => {
            const list = res.docs.map((product)=> {
                return{
                    id: product.id,
                    ...product.data()
                }
            })
            const categoryOrder = ['woman', 'man', 'girl', 'boy']
            const sortedList = list.sort((a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category))
            setProducts(sortedList)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[category])

    // Local
    // useEffect(()=>{
    //     setLoading(true)
    //     getProducts()
    //     .then((res)=> {
    //         if(category){
    //             setProducts(res.filter((product)=> product.category === category))
    //         } else {
    //            setProducts(res)
    //         }
    //     })
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setLoading(false))
    // },[category])

    const images = categoryImages[category] || categoryImages["default"]

    // const addData = () => {
    //     const collectionaToAdd = collection(db, 'products')
    //     productsDB.map((product) => addDoc(collectionaToAdd, product)) 
    // }

    return (
        <div id="hero-section">
            <div className="d-flex justify-content-center">
                {<h1 className="text-center text-uppercase fs-1 p-2">{greeting}</h1>}
            </div>
            <HeroSection title="New in" subtitle="Ver todo" images={images}/>
            {/* <button onClick={addData}>agregar firebase</button> */}
            {loading ? <Loader/> : <ItemList products={products}/>}
        </div>
    )
}

export default ItemListContainer
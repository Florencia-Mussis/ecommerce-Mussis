import React, {useState, useEffect} from "react"
import { getProducts } from "../mock/data"
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


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const {category} = useParams()

    useEffect(()=>{
        setLoading(true)
        getProducts()
        .then((res)=> {
            if(category){
                setProducts(res.filter((product)=> product.category === category))
            } else {
               setProducts(res)
            }
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[category])

    const images = categoryImages[category] || categoryImages["default"]

    return (
        <div id="hero-section">
            {/* <h1 classNameName="text-center text-uppercase fs-1 p-2">{greeting}</h1> */}
            <HeroSection title="New in" subtitle="Ver todo" images={images}/>
            {loading ? <p>Cargando...</p> : <ItemList products={products}/>}
        </div>
    )
}

export default ItemListContainer
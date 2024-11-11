import w1 from '../assets/w-1.png'
import w2 from '../assets/w-2.png'
import w3 from '../assets/w-3.png'
import w4 from '../assets/w-4.png'
import w5 from '../assets/w-5.png'
import w6 from '../assets/w-6.png'
import w7 from '../assets/w-7.png'
import w8 from '../assets/w-8.png'


const products = [
    {
        id: 'W-1',
        name: 'Jersey punto',
        stock: '10',
        price: '29,90',
        description: '',
        img: w1,
        category: 'women'
    },
    {
        id: 'W-2',
        name: 'Abrigo piel oversize',
        stock: '10',
        price: '169,90',
        description: '',
        img: w2,
        category: 'women'
    },
    {
        id: 'W-3',
        name: 'Bolso hombro corto',
        stock: '10',
        price: '35,90',
        description: '',
        img: w3,
        category: 'women'
    },
    {
        id: 'W-4',
        name: 'Pantalón traje pinzas',
        stock: '10',
        price: '45,90',
        description: '',
        img: w4,
        category: 'women'
    },
    {
        id: 'W-5',
        name: 'Falda larga punto',
        stock: '10',
        price: '36,90',
        description: '',
        img: w5,
        category: 'women'
    },
    {
        id: 'W-6',
        name: 'Mono largo lazo',
        stock: '10',
        price: '49,90',
        description: '',
        img: w6,
        category: 'women'
    },
    {
        id: 'W-7',
        name: 'Camiseta cuello alto',
        stock: '10',
        price: '19,90',
        description: '',
        img: w7,
        category: 'women'
    },
    {
        id: 'W-8',
        name: 'Blusa asimétrica',
        stock: '10',
        price: '29,90',
        description: '',
        img: w8,
        category: 'women'
    }
]

export const getProducts = () => {
    let error = false
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (error) {
                reject('Hubo un error al cargar los productos, intente mas tarde')
            } else {
                resolve(products)
            }
        },3000)
    })
}

export const getProduct = (id) => {
    let error = false
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject('Hubo un error al cargar el producto solicitado, intente mas tarde')
            } else {
                let product = products.find((product) => product.id === id)
                resolve (product)
            }

        },3000)
    })
}


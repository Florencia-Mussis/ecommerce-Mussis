const products = [
    {
        id: 'W-1',
        name: 'Jersey punto',
        stock: '10',
        price: '29,90',
        description: '',
        img: 'https://i.postimg.cc/Vs4D3ZP7/77017706-92-99999999-01.avif', 
        img2: 'https://i.postimg.cc/15tJP09y/77017706-92.avif',
        img3: 'https://i.postimg.cc/X7zxvZJd/77017706-92-R.avif',
        img4: 'https://i.postimg.cc/VNjF4DFW/77017706-92-D1.avif',
        category: 'woman'
    },
    {
        id: 'W-2',
        name: 'Abrigo piel oversize',
        stock: '10',
        price: '169,90',
        description: '',
        img: 'https://i.postimg.cc/wM8fbXQz/mujer2.jpg',
        img2: 'https://i.postimg.cc/PrXwHLxQ/mujer-PDP2-6.jpg', 
        img3: 'https://i.postimg.cc/RhRJfmPt/mujer-PDP2-4.jpg',
        img4: 'https://i.postimg.cc/FH1kf20f/mujer-PDP2-7.jpg',
        category: 'woman'
    },
    {
        id: 'W-3',
        name: 'Bolso hombro corto',
        stock: '10',
        price: '35,90',
        description: '',
        img: 'https://i.postimg.cc/ry703h4x/mujer4.jpg',
        img2: 'https://i.postimg.cc/3rBktKB4/mujer-PDP3-4.jpg', 
        img3: 'https://i.postimg.cc/RFxWDhyf/mujer-PDP3-2.jpg',
        img4: 'https://i.postimg.cc/CxZdMbVk/mujer-PDP3-3.jpg',
        category: 'woman'
    },
    {
        id: 'W-4',
        name: 'Pantalón traje pinzas',
        stock: '10',
        price: '45,90',
        description: '',
        img: 'https://i.postimg.cc/nL9NRhfv/mujer1.jpg',
        img2: 'https://i.postimg.cc/G3qpkXLv/mujer-PDP4-6.jpg', 
        img3: 'https://i.postimg.cc/L566c1Tq/mujer-PDP4-4.jpg',
        img4: 'https://i.postimg.cc/hPYPYh7j/mujer-PDP4-7.jpg',
        category: 'woman'
    },
    {
        id: 'W-5',
        name: 'Falda larga punto',
        stock: '10',
        price: '36,90',
        description: '',
        img: 'https://i.postimg.cc/CM8khTSm/mujer5.jpg',
        img2: 'https://i.postimg.cc/3NRYSH8m/mujer-PDP5-6.jpg', 
        img3: 'https://i.postimg.cc/PxdtDw06/mujer-PDP5-2.jpg',
        img4: 'https://i.postimg.cc/kM1nVDsc/mujer-PDP5-7.jpg',
        category: 'woman'
    },
    {
        id: 'W-6',
        name: 'Mono largo lazo',
        stock: '10',
        price: '49,90',
        description: 'Tejido fluido. Diseño largo. Diseño recto. Escote de pico. Sin mangas. Tirantes anchos. Cierre de cremallera invisible en la parte posterior. Detalle cruzado. Forro interior. Disponible Plus.',
        materials: 'Composición: 100% poliéster. Forro: 100% poliéster.',
        shipping: 'Envío gratis a tienda.Dispones de 30 días para realizar tu devolución.',
        img: 'https://i.postimg.cc/g2LP5DvX/mujer6.jpg',
        img2: 'https://i.postimg.cc/QtN3CrWw/mujer-PDP6-6.jpg', 
        img3: 'https://i.postimg.cc/9QTVNbh8/mujer-PDP6-4.jpg',
        img4: 'https://i.postimg.cc/63HNG1r3/mujer-PDP6-7.jpg',
        category: 'woman'
    },
    {
        id: 'W-7',
        name: 'Camiseta cuello alto',
        stock: '10',
        price: '19,90',
        description: '',
        img: 'https://i.postimg.cc/rpWR85Lz/mujer7.jpg',
        img2: 'https://i.postimg.cc/P5msMqW0/mujer-PDP7-5.jpg', 
        img3: 'https://i.postimg.cc/YqLwhRhr/mujer-PDP7-2.jpg',
        img4: 'https://i.postimg.cc/s2ckt00c/mujer-PDP7-6.jpg',
        category: 'woman'
    },
    {
        id: 'W-8',
        name: 'Blusa asimétrica',
        stock: '10',
        price: '29,90',
        description: '',
        img: 'https://i.postimg.cc/xd0VCSwH/mujer8.jpg',
        img2: 'https://i.postimg.cc/HWKqDM3f/mujer-PDP8-6.jpg', 
        img3: 'https://i.postimg.cc/rmZvpRTR/mujer-PDP8-5.jpg',
        img4: 'https://i.postimg.cc/MpJgX8C5/mujer-PDP8-7.jpg',
        category: 'woman'
    },
    {
        id: 'M-1',
        name: 'Camisa algodón rayas',
        stock: '10',
        price: '39,90',
        description: '',
        img: 'https://i.postimg.cc/6qdgfjRn/hombre-PDP1-1.png',
        img2: 'https://i.postimg.cc/FHPqpJfW/hombre-PDP1-6.png', 
        img3: 'https://i.postimg.cc/020h649q/hombre-PDP1-3.png',
        img4: 'https://i.postimg.cc/Y9FstndZ/hombre-PDP1-7.png',
        category: 'man'
    },
    {
        id: 'M-2',
        name: 'Jeans regular fit',
        stock: '10',
        price: '49,90',
        description: '',
        img: 'https://i.postimg.cc/Wb8fpJ7N/hombre-PDP2-2.png',
        img2: 'https://i.postimg.cc/Y038SJYn/hombre-PDP2-6.png', 
        img3: 'https://i.postimg.cc/TwnCzywX/hombre-PDP2-4.png',
        img4: 'https://i.postimg.cc/85yjP4sd/hombre-PDP2-7.png',
        category: 'man'
    },
    {
        id: 'M-3',
        name: 'Americana franela',
        stock: '10',
        price: '59,90',
        description: '',
        img: 'https://i.postimg.cc/6qty9QrZ/hombre-PDP3-1.png',
        img2: 'https://i.postimg.cc/PxtjJv7d/hombre-PDP3-6.png',
        img3: 'https://i.postimg.cc/mgJkPj3B/hombre-PDP3-4.png',
        img4: 'https://i.postimg.cc/BQdfDVzY/hombre-PDP3-7.png',
        category: 'man'
    },
    {
        id: 'M-4',
        name: 'Jersey punto',
        stock: '10',
        price: '49,90',
        description: '',
        img: 'https://i.postimg.cc/FHN5DL93/hombre-PDP4-1.png',
        img2: 'https://i.postimg.cc/26Pgvqcq/hombre-PDP4-6.png',
        img3: 'https://i.postimg.cc/N0C3sCRk/hombre-PDP4-2.png',
        img4: 'https://i.postimg.cc/4Nvj7xzd/hombre-PDP4-5.png',
        category: 'man'
    },
    {
        id: 'M-5',
        name: 'Sobrecamisa lana',
        stock: '10',
        price: '69,90',
        description: '',
        shipping: 'Envío gratis a tienda.Dispones de 30 días para realizar tu devolución.',
        img: 'https://i.postimg.cc/J0s47ByG/hombre-PDP5-1.png',
        img2: 'https://i.postimg.cc/5tttKGxB/hombre-PDP5-6.png',
        img3: 'https://i.postimg.cc/KcW8qQVL/hombre-PDP5-3.png',
        img4: 'https://i.postimg.cc/Fsgsrmzb/hombre-PDP5-7.png',
        category: 'man'
    },
    {
        id: 'M-6',
        name: 'Jeans regular fit lavado',
        stock: '10',
        price: '39,90',
        description: '',
        img: 'https://i.postimg.cc/JhBwpVyH/hombre-PDP6-2.png',
        img2: 'https://i.postimg.cc/tThKH3NX/hombre-PDP6-6.png',
        img3: 'https://i.postimg.cc/nz8y5R7R/hombre-PDP6-5.png',
        img4: 'https://i.postimg.cc/QCmvFjzw/hombre-PDP6-7.png',
        category: 'man'
    },
    {
        id: 'M-7',
        name: 'Jersey punto estructura',
        stock: '10',
        price: '49,90',
        description: '',
        img: 'https://i.postimg.cc/j5PYMQJ6/hombre-PDP7-1.png',
        img2: 'https://i.postimg.cc/K8x7jZNm/hombre-PDP7-6.png',
        img3: 'https://i.postimg.cc/T2tCZ5qn/hombre-PDP7-2.png',
        img4: 'https://i.postimg.cc/Wbbb1CkQ/hombre-PDP7-5.png',
        category: 'man'
    },  
    {
        id: 'M-8',
        name: 'Abrigo lana',
        stock: '10',
        price: '129,90',
        description: '',
        img: 'https://i.postimg.cc/gjGRJsVN/hombre-PDP8-1.png',
        img2: 'https://i.postimg.cc/bvHwJhmf/hombre-PDP8-6.png',
        img3: 'https://i.postimg.cc/FzPfK4sH/hombre-PDP8-3.png',
        img4: 'https://i.postimg.cc/bwRvYPCc/hombre-PDP8-7.png',
        category: 'man'
    },  
    {
        id: 'G-1',
        name: 'Anorak metálico',
        stock: '10',
        price: '39,90',
        description: '',
        img: 'https://i.postimg.cc/cLWQ5sgV/nina-pdp1-1.jpg',
        img2: 'https://i.postimg.cc/q7LQGN1b/nina-pdp1-3.jpg',
        img3: 'https://i.postimg.cc/sX5j8RZN/nina-pdp1-2.jpg',
        img4: 'https://i.postimg.cc/DZw6p7D2/nina-pdp1-4.jpg',
        category: 'girl'
    },
    {
        id: 'G-2',
        name: 'Pantalón flare',
        stock: '10',
        price: '19,90',
        description: '',
        img: 'https://i.postimg.cc/nz92f3H5/nina-pdp2-1.jpg',
        img2: 'https://i.postimg.cc/XqQpH0R0/nina-pdp2-3.jpg',
        img3: 'https://i.postimg.cc/k4NVSSwG/nina-pdp2-2.jpg',
        img4: 'https://i.postimg.cc/zXGLLVhD/nina-pdp2-4.jpg',
        category: 'girl'
    },
    {
        id: 'G-3',
        name: 'Vestido volantes',
        stock: '10',
        price: '22,90',
        description: '',
        img: 'https://i.postimg.cc/QdBHbwSR/nina-pdp3.jpg',
        img2: 'https://i.postimg.cc/85GcT5DS/nina-pdp3-3.jpg',
        img3: 'https://i.postimg.cc/P5BNFyRN/nina-pdp3-2.jpg',
        img4: 'https://i.postimg.cc/wMTBsG74/nina-pdp3-4.jpg',
        category: 'girl'
    },
    {
        id: 'G-4',
        name: 'Jersey lana',
        stock: '10',
        price: '29,90',
        description: '',
        img: 'https://i.postimg.cc/Y0JJw4KN/nina-pdp4-1.jpg',
        img2: 'https://i.postimg.cc/4dG6jsSK/nina-pdp4-3.jpg',
        img3: 'https://i.postimg.cc/7LfdbMH1/nina-pdp4-2.jpg',
        img4: 'https://i.postimg.cc/SN9KYCsh/nina-pdp4-4.jpg',
        category: 'girl'
    },
    {
        id: 'G-5',
        name: 'Chaleco punto',
        stock: '10',
        price: '18,90',
        description: '',
        img: 'https://i.postimg.cc/WpW9qqyX/nina-pdp5-2.jpg',
        img2: 'https://i.postimg.cc/d1XywFWm/nina-pdp5-3.jpg',
        img3: 'https://i.postimg.cc/65FYYJtZ/nina-pdp5-1.jpg',
        img4: 'https://i.postimg.cc/6qvGQPgs/nina-pdp5-4.jpg',
        category: 'girl'
    },
    {
        id: 'G-6',
        name: 'Blusa calados',
        stock: '10',
        price: '17,90',
        description: '',
        img: 'https://i.postimg.cc/HWVRpCWJ/nina-pdp6-1.jpg',
        img2: 'https://i.postimg.cc/C1dPLj0y/nina-pdp6-3.jpg',
        img3: 'https://i.postimg.cc/YSrDZ5yC/nina-pdp6-2.jpg',
        img4: 'https://i.postimg.cc/T1DtnfhC/nina-pdp6-4.jpg',
        category: 'girl'
    },
    {
        id: 'G-7',
        name: 'Jersey cuello alto',
        stock: '10',
        price: '29,90',
        description: '',
        img: 'https://i.postimg.cc/NjhWJPcK/nina-pdp7-1.jpg',
        img2: 'https://i.postimg.cc/0QbvRMHj/nina-pdp7-3.jpg',
        img3: 'https://i.postimg.cc/wjQghdmq/nina-pdp7-2.jpg',
        img4: 'https://i.postimg.cc/m230ny2V/nina-pdp7-4.jpg',
        category: 'girl'
    },
    {
        id: 'G-8',
        name: 'Anorak estampado',
        stock: '10',
        price: '34,90',
        description: '',
        img: 'https://i.postimg.cc/NjpZsGXH/nina-pdp8-2.jpg',
        img2: 'https://i.postimg.cc/8CY3vytk/nina-pdp8-3.jpg',
        img3: 'https://i.postimg.cc/cJC2rq75/nina-pdp8-1.jpg',
        img4: 'https://i.postimg.cc/Hx7N9Qhw/nina-pdp8-4.jpg',
        category: 'girl'
    },    
    {
        id: 'B-1',
        name: 'Anorak impermeable',
        stock: '10',
        price: '39,90',
        description: '',
        img: 'https://i.postimg.cc/2yQXPCm3/nino-pdp1-1.png',
        img2: 'https://i.postimg.cc/3Jhq20CG/nino-pdp1-3.png',
        img3: 'https://i.postimg.cc/G3GNBxYr/nino-pdp1-2.png',
        img4: 'https://i.postimg.cc/9FBnbXJn/nino-pdp1-4.png',
        category: 'boy'
    },
    {
        id: 'B-2',
        name: 'Jersey punto',
        stock: '10',
        price: '22,90',
        description: '',
        img: 'https://i.postimg.cc/43Y2X6ZD/nino-pdp2-1.png',
        img2: 'https://i.postimg.cc/yN2QxD8k/nino-pdp2-3.png',
        img3: 'https://i.postimg.cc/43Y2X6ZD/nino-pdp2-1.png',
        img4: 'https://i.postimg.cc/xCHsz9Xg/nino-pdp2-4.png',
        category: 'boy'
    },
    {
        id: 'B-3',
        name: 'Camiseta algodón',
        stock: '10',
        price: '9,90',
        description: '',
        img: 'https://i.postimg.cc/jqHgqd0S/nino-pdp3-1.png',
        img2: 'https://i.postimg.cc/Prd6CsTz/nino-pdp3-3.png',
        img3: 'https://i.postimg.cc/3xRnZXyk/nino-pdp3-2.png',
        img4: 'https://i.postimg.cc/L6vxfCsd/nino-pdp3-4.png',
        category: 'boy'
    },
    {
        id: 'B-4',
        name: 'Camisa leñador',
        stock: '10',
        price: '15,90',
        description: '',
        img: 'https://i.postimg.cc/P5RKVCZ2/nino-pdp4-1.png',
        img2: 'https://i.postimg.cc/d1M6vg5C/nino-pdp4-3.png',
        img3: 'https://i.postimg.cc/s2Gmk34y/nino-pdp4-2.png',
        img4: 'https://i.postimg.cc/NM140bnz/nino-pdp4-4.png',
        category: 'boy'
    },
    {
        id: 'B-5',
        name: 'Jersey lana',
        stock: '10',
        price: '22,90',
        description: '',
        img: 'https://i.postimg.cc/nrp19Bbc/nino-pdp5-1.png',
        img2: 'https://i.postimg.cc/NGkDqJmy/nino-pdp5-3.png',
        img3: 'https://i.postimg.cc/D06Pr0nQ/nino-pdp5-2.png',
        img4: 'https://i.postimg.cc/g2nHhG5R/nino-pdp5-4.png',
        category: 'boy'
    },
    {
        id: 'B-6',
        name: 'Jeans lavado oscuro',
        stock: '10',
        price: '15,90',
        description: '',
        img: 'https://i.postimg.cc/zGgR5v6d/nino-pdp6-1.png',
        img2: 'https://i.postimg.cc/TwRyr9wS/nino-pdp6-3.png',
        img3: 'https://i.postimg.cc/tgdZZfXW/nino-pdp6-2.png',
        img4: 'https://i.postimg.cc/7PtC2Sys/nino-pdp6-4.png',
        category: 'boy'
    },
    {
        id: 'B-7',
        name: 'Camisa cuadros',
        stock: '10',
        price: '17,90',
        description: '',
        img: 'https://i.postimg.cc/6578LTW9/nino-pdp7-1.png',
        img2: 'https://i.postimg.cc/L8Lhw7gw/nino-pdp7-3.png',
        img3: 'https://i.postimg.cc/TYZpkG1n/nino-pdp7-2.png',
        img4: 'https://i.postimg.cc/wvTvtj4Y/nino-pdp7-4.png',
        category: 'boy'
    },
    {
        id: 'B-8',
        name: 'Jeans cordón',
        stock: '10',
        price: '19,90',
        description: '',
        img: 'https://i.postimg.cc/Gpz311L7/nino-pdp8-1.png',
        img2: 'https://i.postimg.cc/vBNQcL65/nino-pdp8-3.png',
        img3: 'https://i.postimg.cc/d11ssSDq/nino-pdp8-2.png',
        img4: 'https://i.postimg.cc/SRYm82W3/nino-pdp8-4.png',
        category: 'boy'
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

// img3: '',
// img3: '',
// img4: '',
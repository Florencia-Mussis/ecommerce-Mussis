import './App.css'
import './assets/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer'
import NavbarReactBootstrap from './components/NavbarReactBootstrap'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './components/Error'
import { CartProvider } from './context/CartContext'
import CartView from './components/CartView'
import Checkout from './components/Checkout'


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavbarReactBootstrap/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/products/:category' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartView/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App

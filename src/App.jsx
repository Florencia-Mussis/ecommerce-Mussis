import './App.css'
import './assets/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer'
import NavbarReactBootstrap from './components/NavbarReactBootstrap'
import HeroSection from './components/HeroSection'
import Hero_homePage from './assets/Hero_homePage.png'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <NavbarReactBootstrap/>
      <HeroSection title="New in" subtitle="Ver todo"/>
      <ItemListContainer greeting ='Welcome to my e-commerce'/>
      <ItemDetailContainer/>
      <Footer/>
    </div>
  )
}

export default App

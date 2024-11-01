import './App.css'
import './assets/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer'
import NavbarReactBootstrap from './components/NavbarReactBootstrap'
import HeroSection from './components/HeroSection'
import Hero_homePage from './assets/Hero_homePage.png'


function App() {
  return (
    <div>
      <NavbarReactBootstrap/>
      <ItemListContainer greeting ='Welcome to my e-commerce'/>
      <HeroSection 
      backgroundImage={Hero_homePage} 
      // title="New in" 
      // subtitle="Ver todo"
      />
    </div>
  )
}

export default App

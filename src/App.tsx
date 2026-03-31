import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import SupplyChain from './components/SupplyChain'
import News from './components/News'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <SupplyChain />
      <News />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

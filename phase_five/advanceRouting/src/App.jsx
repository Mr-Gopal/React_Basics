import './App.css'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import { Routes, Route } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound.jsx'
import Laptops from './pages/Laptops.jsx'
import Mobiles from './pages/Mobiles.jsx'


function App() {

  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Routes className="flex justify-center">
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/product' element={<Product />}>
          <Route path='laptops' element={<Laptops />}/>
          <Route path='mobiles' element={<Mobiles />}/>
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import { useState } from 'react'
import './App.css'
import { Card } from './components/Card.jsx'
import Navbar from './components/NavBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1>Hello, Gopal!</h1>
      <div className="parent">
        <Card url="https://cdn131.picsart.com/330047101056201.jpg" user="Raman"/>
        <Card url="https://img.freepik.com/premium-photo/digital-cute-anime-chibi-girl-fashion-enchanting-characters-captivating-designs-come-life_655090-1619.jpg?w=2000" user="Shyam"/>
        <Card url="https://cdn131.picsart.com/330047101056201.jpg" user="Raman"/>
      </div>
      

    </>
  )
}

export default App

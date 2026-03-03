import './App.css'
import Section1 from "./components/Section1/Section1.jsx"

function App() {
  const imgs = [
    {
      img: "https://i.pinimg.com/736x/aa/7d/4f/aa7d4f51e1842411b5c1c8c18de66db5.jpg", 
      intro: "Massive treehouse village in jungle canopy", 
      tag: "Top"
    }, 
    {
      img: "https://i.pinimg.com/736x/e5/e3/90/e5e3906c9279732e4668fba1bf4e39d5.jpg", 
      intro: "Cozy house beside peaceful lake", 
      tag: "Latest"
    }, 
    {
      img: "https://i.pinimg.com/1200x/63/41/09/634109e69889a49d7f2cbb973432cc62.jpg", 
      intro: "Flying gigantic house with complex design", 
      tag: "Top"
    }, 
    {
      img: "https://i.pinimg.com/1200x/2d/0b/e6/2d0be6436cbc3785c4a973bd65d8b1d2.jpg", 
      intro: "Royal building structure in white theme", 
      tag: "Famous"
    }, 
    {
      img: "https://i.pinimg.com/736x/09/5c/5f/095c5f77c158a65d872681ebe6e0fa7d.jpg", 
      intro: "Venice city in minecraft world", 
      tag: "Famous"
    }, 
    {
      img: "https://i.pinimg.com/1200x/34/b4/ae/34b4ae92e341c24bde576540a2b08536.jpg", 
      intro: "Antique forbidden rock and wooden hill house", 
      tag: "Common"
    }, 

  ]
  return (
    <div>
      <Section1 />
    </div>
  )
}

export default App

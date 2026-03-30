import './App.css'
import axios from 'axios'
import IdentityCard from './IdentityCard.jsx'
import { useState } from 'react'

function App() {
  // local storage
  const book = {
    title: "The elegant universe",
    author: "Brian Green",
    pages: 500
  }
  localStorage.setItem("book", JSON.stringify(book))
  let bookData = JSON.parse(localStorage.getItem("book"))
  console.log(bookData);
  
  // Basic api handling
  const [data, setData] = useState({})

  const getData = async () => {
    let id = prompt("Enter id: ")
    const info = await axios.get(`https://dummyjson.com/users/${id}`)
    console.log(info);
    setData(info.data)
    console.log(data)
  }

  return (
    <>
      <button onClick={getData}>Data</button>
      <IdentityCard user={data}/>
    </>
  )
}

export default App

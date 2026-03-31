import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(10)
  const [data, setData] = useState("")

  useEffect(function() {
    console.log("Did you tweak first")
  }, [num])

  useEffect(function() {
    console.log("Did you tweak second")
  }, [num2])


  useEffect(function(){
    console.log("Changing input data...")
  }, [data])



  return (
    <>
      <h1>first: {num}</h1>
      <h1>second: {num2}</h1>
      <button onClick={()=>{setNum(num+1)}}>first</button>
      <button onClick={()=>{setNum2(num2+10)}}>second</button>

      <br />
      <br />
      <input type="text" placeholder='username' value={data} onChange={(e)=>setData(e.target.value)}/>
    </>
  )
}

export default App

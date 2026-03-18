import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState("")

  function submitHandler() {
    console.log("Form submitted!", formData)
    setFormData("")
  }

  

  return (
    <div>
      <form onSubmit={
        (formObj) => {
          formObj.preventDefault() // Prevents the autorefresh behaviour of a form while submitting
          submitHandler()
        }
      }>
        <input type="text" placeholder='Enter your name' value={formData} onChange={(e)=>{setFormData(e.target.value)}}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

import './App.css'

function App() {

  const singleClicked = () => {
    console.log("Single Clicked!");
  }
  const doubleClicked = () => {
    console.log("Double Clicked!");  
  }

  const hover = () => {
    console.log("Mouse Hovered!")
  }

  // Input box
  const clickInput = () => {console.log("Input targeted!")}
  const write = () => {console.log("Typing!")}
  const fetch = (value) => {console.log("Input: ", value)}

  return (
    <>
      <h1>Login Page</h1>
      <input type="text" placeholder='email' onClick={clickInput} onChange={write}/>
      <button onClick={singleClicked} onDoubleClick={doubleClicked}>Login</button>
      <button onMouseEnter={hover}>Come Here!</button>
      <input type="text" placeholder='password' onChange={function(elem) {
        fetch(elem.target.value)
      }}/>
    </>
  )
}

export default App

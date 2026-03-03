import Navbar from "./Navbar.jsx"
import Page1Content from "./Page1Content.jsx"

function Section1(props) {
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <Page1Content crafts={props.crafts}/>
    </div>
  )
}

export default Section1
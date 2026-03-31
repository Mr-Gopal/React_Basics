import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=35`)
    setUserData(response.data)
    console.log(userData)
  }

  useEffect(function() {
    getData()
  }, [index])

  let displayUserData = <h3 className='text-gray-500 text-s'>User doesn't exists</h3>

  if (userData.length>0) {
    displayUserData = userData.map(function(elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url}>
            <div className='h-42 w-46 overflow-hidden bg-white rounded-xl'>
              <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
            </div>
            <h2 className='font-bold text-lg'>{elem.author}</h2>
          </a>
        </div>
      )
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      {/* <button
        onClick={getData}
        className='bg-rose-500 font-bold active:scale-95 mb-3 text-white px-5 py-2 rounded'>Get data
      </button> */}
      <div className='flex flex-wrap gap-4 p-4'>
        {displayUserData}
      </div>

      <div className='flex justify-center items-center p-4 gap-5'>
        <button
          onClick={()=>setIndex(index-1)}
          className='bg-green-500 text-white rounded cursor-pointer active:scale-95 px-4 py-2 font-semibold'>
          Prev  
        </button>
        <button 
          onClick={()=>setIndex(index+1)}
          className='bg-green-500 text-white rounded cursor-pointer active:scale-95 px-4 py-2 font-semibold'>
          Next  
        </button>
      </div>
    </div>
  )
}

export default App

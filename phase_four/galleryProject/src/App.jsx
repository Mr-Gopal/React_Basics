import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Card from './Card.jsx'

function App() {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=35`)
    setUserData(response.data)
    console.log(userData)
  }

  useEffect(function () {
    getData()
  }, [index])

  let displayUserData = <h3 className='text-gray-300 text-2xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if (userData.length > 0) {
    displayUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem}/>
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
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setUserData([])
            }
          }}
          className='bg-green-500 text-white rounded cursor-pointer active:scale-95 px-4 py-2 font-semibold'>
          Prev
        </button>
        <h3>Page {index}</h3>
        <button
          onClick={() => {
            setIndex(index + 1)
            setUserData([])
          }}
          className='bg-green-500 text-white rounded cursor-pointer active:scale-95 px-4 py-2 font-semibold'>
          Next
        </button>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react';
import { X } from 'lucide-react';
import './App.css'

function App() {
  const [title, setTitle] = useState("")
  const [data, setData] = useState("")
  const [task, setTask] = useState([])

  const titleHandler = (e) => {
    e.preventDefault();
    
    let allTask = [...task]
    allTask.push({title, data})
    setTask(allTask)
    
    setTitle("")
    setData("")
  }

  const deleteNote = (i) => {
    console.log("Note deleted")
    let modifiedTask = [...task]
    modifiedTask.splice(i,1)
    setTask(modifiedTask)
  }

  return (
    <div className='h-screen lg:flex'>
      <form onSubmit={(e) => titleHandler(e)} className='flex items-start flex-col gap-5 p-10 lg:w-1/2'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Heading' className='px-5 py-2 border-2 rounded w-full outline-none font-medium' />
        <textarea type="text" value={data}
          onChange={(e) => setData(e.target.value)} className='px-5 py-6 flex items-start flex-row border-2 rounded w-full outline-none font-medium' placeholder='Enter Details' />
        <button className='bg-white text-black active:bg-blue-950 active:text-white px-5 py-2 rounded w-full outline-none font-medium'>Add Notes</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-3 gap-5 bg-gray-900 p-10'>
        <h1 className='text-3xl font-bold'>My Notes</h1>
        <div className='h-full overflow-auto flex flex-wrap items-start justify-start gap-5 mt-5'>
          {task.map(function(elem, i){
            return <div key={i} className="relative h-55 w-45 rounded-xl text-black p-4 bg-cover bg-[url('https://static.vecteezy.com/system/resources/thumbnails/043/117/815/small_2x/a-yellow-sticky-note-on-a-transparent-background-free-png.png')]">
              <h2 onClick={()=>deleteNote(i)} className='mt-2 absolute top-5 right-5 bg-red-500 p-1 text-xs rounded-full' ><X size={16} color='white' strokeWidth={2.75}/></h2>
              <h3 className='mt-8 flex justify-center leading-tight text-xl font-bold'>{elem.title.toUpperCase()}</h3>
              <p className='mt-2 ml-4 leading-tight font-medium text-gray-600'>{elem.data}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App

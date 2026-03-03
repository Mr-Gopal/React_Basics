import { ArrowRight } from 'lucide-react';

function RightCardContent(props) {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
        <h2 className='bg-white text-xl font-semibold rounded-full h-9 w-9 flex justify-center items-center'>{props.content.id+1}</h2>
        <div>
            <p className='text-lg text-white leading-relaxed mb-10'>{props.content.intro}</p>
            <div className='flex justify-between'>
                <button className="bg-blue-600 text-white font-med px-7 py-2 rounded-full">{props.content.tag}</button>
                <button className="bg-blue-600 px-2 py-2 rounded-full">
                    <ArrowRight color='white'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent;
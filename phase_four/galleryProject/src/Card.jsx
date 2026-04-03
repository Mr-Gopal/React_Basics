
export default function Card(props) {
    console.log(props)
    return (
        <div>
            <a href={props.elem.url}>
                <div className='h-42 w-46 overflow-hidden bg-white rounded-xl'>
                    <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" />
                </div>
                <h2 className='font-bold text-lg'>{props.elem.author}</h2>
            </a>
        </div>
    )
}
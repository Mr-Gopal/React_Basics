import RightCard from "./RightCard.jsx"



function RightContent(props) {
    return (
        <div id="right" className="h-full p-4 w-2/3 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl">
            {
                props.crafts.map(
                    function(elem, idx) {
                        return <RightCard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag}/>
                    }
                )
            }
        </div>
    )
}

export default RightContent
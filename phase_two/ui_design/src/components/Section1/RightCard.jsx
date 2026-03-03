import RightCardContent from './RightCardContent.jsx'

function RightCard(props) {
  return (
    <div className="h-full overflow-hidden shrink-0 relative w-65 bg-orange-500 rounded-4xl">
        <img className="h-full w-full object-cover" src={props.img} alt="" />
        <RightCardContent content={props}/>
    </div>
  );
}

export default RightCard;
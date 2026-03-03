import RightCardContent from './RightCardContent.jsx'

function RightCard() {
  return (
    <div className="h-full overflow-hidden relative w-65 bg-orange-500 rounded-4xl">
        <img className="h-full w-full object-cover" src="https://i.pinimg.com/736x/aa/7d/4f/aa7d4f51e1842411b5c1c8c18de66db5.jpg" alt="" />
        <RightCardContent />
    </div>
  );
}

export default RightCard;
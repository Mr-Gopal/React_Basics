import HeroText from "./HeroText.jsx"
import Arrow from "./Arrow.jsx"



function LeftContent() {
    return (
        <div className="h-full flex flex-col justify-between w-4/10">
            <HeroText />
            <Arrow />
        </div>
    )
}

export default LeftContent
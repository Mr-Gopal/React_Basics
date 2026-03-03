import LeftContent from "./LeftContent.jsx"
import RightContent from "./RightContent.jsx"


function Page1Content(props) {
    return (
        <div className="pb-20 pt-6 flex items-center gap-5  h-[90vh] px-18">
            <LeftContent />
            <RightContent crafts={props.crafts}/>
        </div>
    )
}

export default Page1Content
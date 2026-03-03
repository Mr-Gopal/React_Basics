import LeftContent from "./LeftContent.jsx"
import RightContent from "./RightContent.jsx"


function Page1Content() {
    return (
        <div className="py-10 flex items-center gap-5  h-[90vh] px-18">
            <LeftContent />
            <RightContent />
        </div>
    )
}

export default Page1Content
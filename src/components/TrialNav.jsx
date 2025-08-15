import { Edit, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function TrialNav(props) {

    // regarding redirection
    let navigate = useNavigate();

    // destructuring the props
    const { userMode } = props;

    return (
        <div className="bg-white px-3 py-2 md:px-5 md:py-3 lg:px-6 lg:py-5 xl:px-10 xl:py-6 flex flex-col md:flex-row item-center justify-between gap-4">

            {/* Icon and Signature */}
            <div className="flex flex-row items-center gap-2 lg:gap-3 cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
                <Edit className="w-6 h-6 lg:w-8 lg:h-8 text-shade1" />
                <div className="flex flex-col items-start gap-0">
                    <h3 className="text-lg font-poppins font-semibold lg:font-bold lg:text-xl text-secondary/80"> TextUtils </h3>
                    <p className="text-[12px] lg:text-sm font-gg font-semibold text-shade2"> Free Version </p>
                </div>
            </div>

            {/* working & details */}
            <div className="flex flex-row items-center gap-3 lg:gap-5">
                <div className="flex flex-row items-center gap-2 text-sm lg:text-base font-poppins text-shade1 font-semibold"> <div className={`p-1 lg:p-[6px] bg-shade1 rounded-full h-fit w-fit ${userMode === 'read' ? '' : 'animate-pulse'}`}></div> {userMode == 'read' ? 'Read Mode' : 'Write Mode'} </div>
                <button className="px-2 py-1 md:px-3 md:py-2 lg:px-4 text-white bg-shade1 rounded-md lg:rounded-lg text-sm flex flex-row items-center gap-2 font-poppins font-semibold lg:text-base active:scale-90 ease-in duration-75 cursor-pointer shadow-md lg:shadow-lg" onClick={(e) => { e.preventDefault(); navigate("/"); }}> <Star className="w-5 h-5 lg:w-6 lg:h-6" /> Upgrade Pro Version </button>
            </div>

        </div>
    )
}

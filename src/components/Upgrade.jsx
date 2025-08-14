import { Info } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Upgrade() {
    
    // redirection using useNavigate
    let navigate = useNavigate();

    return (
        <div className="px-3 py-2 sm:py-4 bg-linear-120 from-shade1 to-shade2 md:px-4 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-3">

            {/* Informational Banner */}
            <div className="flex flex-row items-center gap-2">
                <Info className="text-white w-5 h-5 lg:w-7 lg:h-7" />
                <p className="text-[12px] sm:text-sm lg:text-base font-gg font-medium lg:font-semibold text-white">
                    You're using NotePad Pro Trial - Experience the full editor for free!
                </p>
            </div>

            {/* Upgrade Redireciton Button */}
            <button className="px-2 py-1 md:px-3 md:py-2 lg:px-4 text-shade1 bg-white rounded-md lg:rounded-lg shadow-md lg:shadow-lg text-sm font-poppins font-semibold lg:text-base active:scale-90 ease-in duration-75 cursor-pointer"  onClick={(e) => { e.preventDefault(); navigate("/"); }}> Upgrade Now </button>

        </div>
    )
}

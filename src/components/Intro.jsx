import { Link } from 'react-router-dom'

export default function Intro() {
    return (
        <div className="bg-linear-120 from-shade1 to-shade2 py-12 md:py-16 lg:py-24 flex flex-col items-center gap-3 lg:gap-5 px-5">

            {/* Heading and Description */}
            <div className="flex flex-col items-center gap-3 md:gap-5 xl:gap-6 sm:w-2/3 md:w-3/5 lg:w-3/6 xl:w-5/12">
                <h3 className="font-poppins text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-white font-semibold"> Write. Save. <span className="bg-yellow-400 bg-clip-text text-transparent"> Anywhere. </span> </h3>
                <p className="text-center text-sm lg:text-base xl:text-lg font-gg text-white font-medium lg:font-semibold">
                    The most powerful online notepad that syncs across all your devices. Write with confidence, save instantly, and access your notes from anywhere in the world.
                </p>
            </div>

            {/* button and navigation */}
            <div className="flex flex-col gap-3 lg:gap-4 sm:flex-row items-center">
                <Link to="/" className="bg-white border border-transparent text-shade1 font-gg font-medium lg:font-semibold text-sm lg:text-base px-3 py-1 lg:px-4 lg:py-2 rounded-md lg:rounded-lg shadow-md lg:shadow-lg active:scale-90 ease-in duration-150 cursor-pointer"> Start Writing </Link>
                <a onClick={(e) => { e.preventDefault(); document.querySelector("#demo").scrollIntoView({ behavior: 'smooth' }) }} className="bg-transparent border border-white text-white font-gg font-medium lg:font-semibold text-sm lg:text-base px-3 py-1 lg:px-4 lg:py-2 rounded-md lg:rounded-lg shadow-md lg:shadow-lg active:scale-90 ease-in duration-150 cursor-pointer"> Watch Demo </a>
            </div>

        </div>
    )
}

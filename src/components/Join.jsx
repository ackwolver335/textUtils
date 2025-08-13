import { Link, useNavigate } from 'react-router-dom'

export default function Join() {

    // regarding page navigation
    let navigate = useNavigate();

    return (
        <div className="flex flex-col gap-3 sm:gap-5 lg:gap-8 items-center py-10 sm:py-12 lg:py-14 xl:py-22 bg-linear-120 from-shade1 to-shade2" id="join">

            {/* Heading and Description */}
            <div className="flex flex-col items-center gap-3 md:gap-5 xl:gap-6 sm:w-2/3 md:w-3/5 lg:w-3/6 xl:w-5/12">
                <h3 className="font-poppins text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-white font-semibold"> Join Our Story </h3>
                <p className="text-center text-sm lg:text-base xl:text-lg font-gg text-white font-medium lg:font-semibold">
                   Be part of the next chapter. Start writing with NotePad Pro today and experience the difference that thoughtful design makes.
                </p>
            </div>

            {/* button and navigation */}
            <div className="flex flex-col gap-3 lg:gap-4 sm:flex-row items-center">
                <Link to="/trials" className="bg-white border border-transparent text-shade1 font-gg font-medium lg:font-semibold text-sm lg:text-base px-3 py-1 lg:px-4 lg:py-2 rounded-md lg:rounded-lg shadow-md lg:shadow-lg active:scale-90 ease-in duration-150 cursor-pointer"> Start Writing Free </Link>
                <a onClick={(e) => { e.preventDefault(); navigate('/'); document.querySelector('#contact').scrollIntoView({ behavior: "smooth" }); }} className="bg-transparent border border-white text-white font-gg font-medium lg:font-semibold text-sm lg:text-base px-3 py-1 lg:px-4 lg:py-2 rounded-md lg:rounded-lg shadow-md lg:shadow-lg active:scale-90 ease-in duration-150 cursor-pointer"> Contact Our Team </a>
            </div>

        </div>
    )
}

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export default function NotFound() {

    // regarding navigation
    let navigate = useNavigate();

    // redirection to Home Page
    const goToHome = () => {
        navigate("/");
    }

    // under 5-10 seconds the user will automatically redirected to the home page
    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        },6500);
    },[]);

    return (
        <div className="w-screen h-screen flex items-center justify-center">

            {/* button for redirection to Home */}
            <button className="absolute top-5 left-5 px-3 py-2 lg:px-4 text-white bg-linear-120 from-shade1 to-shade2 rounded-md lg:rounded-lg shadow-md lg:shadow-xl active:scale-90 ease-in duration-75 text-sm lg:text-base font-poppins cursor-pointer font-semibold" onClick={(e) => { e.preventDefault(); navigate("/") }}> Back to Home </button>

            {/* main div block */}
            <div className="flex flex-col items-start md:items-center gap-2 md:gap-4 lg:gap-5 xl:gap-4 bg-red-400 rounded-md lg:rounded-lg xl:rounded-xl shadow-md lg:shadow-lg xl:shadow-xl px-4 py-3 md:px-6 md:py-4 xl:py-5 w-4/5 sm:w-3/5 md:w-3/6 lg:w-2/5 xl:w-2/6">

                <div className="flex flex-row justify-between items-center gap-3 w-full">

                    {/* main Heading */}
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold font-poppins lg:font-bold text-white"> Page Not Found </h3>

                    {/* Icon regarding home page redirection */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x-circle w-5 lg:w-6 xl:w-8 active:scale-90 ease-in duration-50 hidden md:block text-white cursor-pointer" viewBox="0 0 16 16" onClick={goToHome}>
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>

                </div>

                <p className="text-sm font-gg lg:text-base text-white font-medium lg:font-semibold">
                    Oops! The page you're looking for is missing. Sending you back...
                </p>

            </div>

        </div>
    )
}

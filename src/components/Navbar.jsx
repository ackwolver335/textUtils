import React from 'react'
import { Link } from 'react-router-dom'

// importing the required image
import Icon from '../assets/icons/android-chrome-192x192.png'

export default function Navbar() {

    // toggling the menu
    const toggleMenu = () => {
        document.querySelector(".menuList").classList.remove('-translate-y-80');
        document.querySelector('.bi-x-square').classList.remove('hidden');
    }

    // closing Menu List
    const closeMenu = () => {
        document.querySelector(".menuList").classList.add('-translate-y-80');
        document.querySelector('.bi-x-square').classList.add('hidden');

    }

    return (
        <div className="z-20 fixed top-0 right-0 left-0 w-full flex flex-row items-center justify-between px-4 sm:px-5 lg:px-8 lg:py-4 py-2 sm:py-3 shadow-md lg:shadow-lg bg-white/60 backdrop-blur-xl">

            {/* Icon and Site Name */}
            <Link to="/" className="flex flex-row gap-2 xl:gap-3 items-center">
                <img src={Icon} alt="Icon regarding Main Site" className="w-5 md:w-6 lg:w-7" />
                <h4 className="font-poppins text-secondary/80 font-semibold text-base md:text-lg xl:text-xl"> TextUtils </h4>
            </Link>

            <div className="flex flex-row items-center justify-between gap-5 lg:gap-7 xl:gap-9">

                {/* Initial List containing Navigations */}
                <ul className="menuList absolute top-12 sm:top-16 pt-10 left-5 right-5 bg-secondary/80 -translate-y-80 py-4 rounded-md text-white md:relative list-none flex flex-col md:flex-row md:top-0 md:left-0 md:right-0 md:bg-transparent items-center gap-2 md:gap-3 xl:gap-4 md:p-0 md:text-secondary/80 font-gg text-sm xl:text-base font-semibold md:translate-0 ease-in duration-250">
                    <a href="#" className="md:hover:underline md:hover:underline-offset-8"> Home </a>
                    <Link to="/" className="md:hover:underline md:hover:underline-offset-8"> About </Link>
                    <a href="#features" className="md:hover:underline md:hover:underline-offset-8"> Features </a>
                    <a href="#pricing" className="md:hover:underline md:hover:underline-offset-8"> Pricing </a>
                    <Link to="/" className="md:hover:underline md:hover:underline-offset-8"> Contact </Link>
                    <Link to="/" className="md:hover:underline md:hover:underline-offset-8"> Trial </Link>
                    <Link to="/" className="md:hover:underline md:hover:underline-offset-8 md:hidden"> Get Started </Link>
                </ul>

                {/* Get Started button */}
                <Link to="/" className="font-poppins font-medium lg:font-semibold cursor-pointer text-sm lg:text-base text-white bg-shade1 px-3 py-1 lg:py-2 rounded-md lg:rounded-lg shadow-md ease-in duration-150 active:scale-90 hidden md:block"> Get Started </Link>

            </div>

            {/* Icon regarding Menu Up and Down */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list w-5 sm:w-6 md:hidden text-shade1" viewBox="0 0 16 16" onClick={toggleMenu}>
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>

            {/* Closing button for Menu List */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x-square w-5 sm:w-6 hidden absolute top-14 sm:top-18 right-8 text-white" viewBox="0 0 16 16" onClick={closeMenu}>
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>

        </div>
    )
}

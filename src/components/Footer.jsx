import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// image for footer Icon
import Icon from '../assets/icons/android-chrome-192x192.png'

export default function Footer() {

    // regarding page navigation
    let navigate = useNavigate();

    // current year storing state
    const [currentYear,setCurrentYear] = useState('');

    useEffect(() => {
        let recentYear = new Date().getFullYear();
        setCurrentYear(recentYear);
    },[currentYear]);

    return (
        <div className="flex flex-col items-center p-5 py-6 md:px-7 lg:p-10 xl:px-14 bg-darkBG gap-4 lg:gap-5 xl:gap-6">

            <div className="flex flex-col md:flex-row justify-between items-start gap-5 w-full">
                {/* Intro & Heading Block */}
                <div className="flex flex-col items-start gap-2 lg:gap-3">
                    <div className="flex flex-row items-center gap-3">
                        <img src={Icon} alt="" className="w-6 lg:w-7" />
                        <h3 className="font-poppins font-medium sm:font-semibold lg:font-bold text-lg lg:text-xl text-white"> TextUtils </h3>
                    </div>
                    <p className="font-gg font-medium lg:font-semibold text-sm lg:text-base text-white">
                        The most powerful online notepad for all your writing needs.
                    </p>
                </div>

                {/* Redirection Links */}
                <div className="links flex flex-col md:flex-row items-start md:items-center gap-7 md:gap-30">
                    <div className="flex flex-col items-start gap-2">
                        <h2 className="text-base lg:text-lg font-poppins text-white font-medium lg:font-semibold"> Product </h2>
                        <ul className="text-white/60 font-gg font-medium lg:font-semibold text-sm lg:text-base flex flex-col list-none gap-2">
                            <a onClick={(e) => { e.preventDefault(); navigate('/'); document.querySelector('#features').scrollIntoView({ behavior: "smooth" }); }}> Features </a>
                            <a onClick={(e) => { e.preventDefault(); navigate('/'); document.querySelector('#pricing').scrollIntoView({ behavior: "smooth" }); }}> Pricing </a>
                            <a onClick={(e) => { e.preventDefault(); navigate('/about'); document.querySelector('#story').scrollIntoView({ behavior: "smooth" }); }}> Story </a>
                            <a onClick={(e) => { e.preventDefault(); navigate('/about'); document.querySelector('#values').scrollIntoView({ behavior: "smooth" }); }}> Values </a>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <h2 className="text-base lg:text-lg font-poppins text-white font-medium lg:font-semibold"> Company </h2>
                        <ul className="text-white/60 font-gg font-medium lg:font-semibold text-sm lg:text-base flex flex-col list-none gap-2">
                            <Link to="/about"> About </Link>
                            <Link to="/"> Blog </Link>
                            <Link to="/"> Career </Link>
                            <a onClick={(e) => { e.preventDefault(); navigate('/'); document.querySelector('#contact').scrollIntoView({ behavior: "smooth" }); }}> Contact </a>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Horizontal Rule */}
            <div className="h-[1px] w-full bg-white/70 rounded-full"></div>

            {/* Copyright Heading & all */}
            <p className="text-sm lg:text-base text-white font-medium lg:font-semibold font-gg">
                © {currentYear} TextUtils. All rights reserved.
            </p>

        </div>
    )
}

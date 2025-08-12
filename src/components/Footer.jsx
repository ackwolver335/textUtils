import React, { useEffect, useState } from 'react'

// image for footer Icon
import Icon from '../assets/icons/android-chrome-192x192.png'

export default function Footer() {

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
                            <a href="#features"> Features </a>
                            <a href="#pricing"> Pricing </a>
                            <a href="#"> Security </a>
                            <a href="#"> Updates </a>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <h2 className="text-base lg:text-lg font-poppins text-white font-medium lg:font-semibold"> Company </h2>
                        <ul className="text-white/60 font-gg font-medium lg:font-semibold text-sm lg:text-base flex flex-col list-none gap-2">
                            <a href="#"> About </a>
                            <a href="#"> Blog </a>
                            <a href="#"> Career </a>
                            <a href="#contact"> Contact </a>
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

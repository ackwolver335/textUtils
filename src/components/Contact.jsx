import {  LocationEditIcon, Mail, Phone } from 'lucide-react'
import React, { useState } from 'react'

export default function Contact() {

    // state for using all the required elements of Form
    const [userDetails,setUserDetails] = useState({
        userName: '',
        userEmail: '',
        userSubject: '',
        userMessage: ''
    })

    return (
        <div className="bg-white py-10 sm:py-12 lg:py-14 xl:py-22 flex flex-col items-center gap-5 lg:gap-8" id="contact">

            {/* Heading and Intro */}
            <div className="flex flex-col items-center gap-2 md:gap-3 xl:gap-4 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold text-secondary/90"> Get in Touch </h1>
                <p className="font-gg font-medium lg:font-semibold text-sm lg:text-base xl:text-lg text-secondary/90">
                    Have questions? We'd love to hear from you.
                </p>
            </div>

            {/* Main Contact Page & Information */}
            <div className="flex flex-col md:flex-row items-center justify-center md:items-start gap-5 md:gap-8 lg:gap-10 xl:gap-20 2xl:gap-24">

                {/* Contact Information Block */}
                <div className="flex flex-col items-start gap-3 lg:gap-5">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-poppins font-semibold lg:font-bold text-secondary/80"> Contact Information </h3>
                    <div className="flex flex-col gap-4 items-start">
                        
                        {/* Mail Contact Information */}
                        <div className="flex flex-row items-center gap-3 lg:gap-4">
                            <div className="bg-shade1/20 rounded-full p-2 lg:p-3"> <Mail className="w-5 h-5 text-shade1 lg:w-6 lg:h-6" /> </div>
                            <p className="text-sm lg:text-base font-gg font-semibold text-secondary/80">
                                abhaych335@gmail.com
                            </p>
                        </div>

                        {/* Phone Contact Information */}
                        <div className="flex flex-row items-center gap-3 lg:gap-4">
                            <div className="bg-shade1/20 rounded-full p-2 lg:p-3"> <Phone className="w-5 h-5 text-shade1 lg:w-6 lg:h-6" /> </div>
                            <p className="text-sm lg:text-base font-gg font-semibold text-secondary/80">
                                +91-8130621593
                            </p>
                        </div>

                        {/* Location */}
                        <div className="flex flex-row items-center gap-3 lg:gap-4">
                            <div className="bg-shade1/20 rounded-full p-2 lg:p-3"> <LocationEditIcon className="w-5 h-5 text-shade1 lg:w-6 lg:h-6" /> </div>
                            <p className="text-sm lg:text-base font-gg font-semibold text-secondary/80">
                                New Delhi, India
                            </p>
                        </div>

                    </div>
                </div>

                {/* Contact Form regarding Doubts */}
                <div className="detailedForm flex flex-col justify-start bg-white rounded-lg shadow-lg md:rounded-md lg:rounded-xl lg:shadow-lg md:shadow-md px-4 py-2 md:px-5 gap-3 md:pb-3 lg:px-8 lg:pb-5 sm:w-100 md:gap-4">

                    <h3 className="text-lg sm:text-xl lg:text-2xl font-poppins font-bold text-secondary/80 sm:font-semibold "> Send Me a Message </h3>

                    {/* form regarding information retrival */}
                    <form className="flex flex-col gap-3 md:gap-y-3 lg:gap-y-5 justify-start">

                        {/* userName */}
                        <div className="flex flex-col justify-star gap-3 md:gap-y-2">
                            <label htmlFor="userName" className="font-gg font-semibold text-secondary/80 text-sm lg:text-base"> Name </label>
                            <input type="text" placeholder="Your Name" id="userName" value={userDetails.userName} className="font-gg text-[12px] sm:text-sm border-2 md:opacity-80 border-secondary/20 focus:border-secondary/80 focus:border-2 focus:border-site focus:outline-none rounded-sm focus:rounded-md px-2 py-1 sm:px-3 md:px-3 sm:py-2 md:rounded-md md:focus:rounded-lg lg:focus:rounded-xl ease-in duration-100" required onChange={(e) => { setUserDetails(prev => ({...prev, userName: e.target.value})) }} />
                        </div>

                        {/* user's Mail */}
                        <div className="flex flex-col justify-start gap-3 md:gap-y-2">
                            <label htmlFor="userMail" className="font-gg font-semibold text-secondary/80 text-sm lg:text-base"> Email </label>
                            <input type="email" placeholder="your.name@gmail.com" id="userMail" value={userDetails.userEmail} className="font-gg text-[12px] sm:text-sm border-2 md:opacity-80 border-secondary/20 focus:border-secondary/80 focus:border-2 focus:border-site focus:outline-none rounded-sm focus:rounded-md px-2 py-1 sm:px-3 md:px-3 sm:py-2 md:rounded-md md:focus:rounded-lg lg:focus:rounded-xl ease-in duration-100" required onChange={(e) => { setUserDetails(prev => ({...prev, userEmail: e.target.value})) }} />
                        </div>

                        {/* user's Subject or Purpose */}
                        <div className="flex flex-col justify-start gap-3 md:gap-y-2">
                            <label htmlFor="userSubject" className="font-gg font-semibold text-secondary/80 text-sm lg:text-base"> Subject </label>
                            <input type="text" placeholder="Subject/Purpose" id="userSubject" value={userDetails.userSubject} className="font-gg text-[12px] sm:text-sm border-2 md:opacity-80 border-secondary/20 focus:border-secondary/80 focus:border-2 focus:border-site focus:outline-none rounded-sm focus:rounded-md md:px-3 px-2 py-1 sm:px-3 sm:py-2 md:rounded-md md:focus:rounded-lg lg:focus:rounded-xl ease-in duration-100" required onChange={(e) => { setUserDetails(prev => ({...prev, userSubject: e.target.value})) }} />
                        </div>

                        <div className="flex flex-col justify-start gap-3 md:gap-y-2">
                            <label htmlFor="userMessage" className="font-gg font-semibold text-secondary/80 text-sm lg:text-base"> Message </label>
                            <textarea type="text" rows="4" placeholder="Your Message here..." id="userMessage" value={userDetails.userMessage} className="resize-none font-gg text-[12px] sm:text-sm border-2 md:opacity-80 border-secondary/20 focus:border-secondary/80 focus:border-2 focus:border-site focus:outline-none rounded-sm focus:rounded-md px-2 py-1 sm:px-3 md:px-3 sm:py-2 md:rounded-md md:focus:rounded-lg lg:focus:rounded-xl ease-in duration-100" required onChange={(e) => { setUserDetails(prev => ({...prev, userMessage: e.target.value})) }}> </textarea>
                        </div>

                        <button type="button" className="font-gg font-medium bg-shade1/70 py-1 rounded-sm sm:rounded-md shadow-lg active:scale-95 md:py-2 md:rounded-md lg:rounded-lg hover:rounded-xl hover:bg-site/90 cursor-pointer md:shadow-md hover:shadow-lg ease-in duration-150 text-white text-sm lg:text-base"> Send Message </button>

                    </form>

                </div>

            </div>

        </div>
    )
}

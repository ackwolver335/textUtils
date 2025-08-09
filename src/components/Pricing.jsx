import React from 'react'

export default function Pricing() {
    return (
        <div className="py-10 sm:py-12 lg:py-14 xl:py-22 bg-gray-50 flex flex-col items-center gap-5 lg:gap-8" id="pricing">

            {/* Heading and Intro */}
            <div className="flex flex-col items-center gap-2 md:gap-3 xl:gap-4 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold text-secondary/90"> Simple Pricing </h1>
                <p className="font-gg font-medium lg:font-semibold text-sm lg:text-base xl:text-lg text-secondary/90">
                    Choose the plan that works best for you!
                </p>
            </div>

            {/* Pricing details block */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 sm:gap-7 lg:gap-10 px-5 sm:px-8 w-full">

                {/* Price Block for users using it freely */}
                <div className="flex flex-col items-start gap-3 px-4 py-3 lg:p-5 bg-white rounded-md lg:rounded-lg lg:hover:shaow-lg lg:hover:scale-105 ease-in duration-150 border-2 border-secondary/20 w-2/3 md:w-80 lg:w-100">
                    <h3 className="font-poppins font-semibold lg:font-bold text-lg lg:text-xl text-secondary/80"> Free </h3>
                    <h3 className="font-poppins font-semibold lg:font-bold text-sm text-secondary/90"> <span className="text-2xl"> $0</span>/month </h3>
                    <ul className="list-none flex flex-col items-start gap-2">
                        <li className="flex flex-row items-center gap-2 lg:gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check-lg w-5 lg:w-6 text-green-500" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                            </svg>
                            <p className="text-sm font-gg font-semibold text-secondary/80"> 5 Documents </p>
                        </li>
                        <li className="flex flex-row items-center gap-2 lg:gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check-lg w-5 lg:w-6 text-green-500" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                            </svg>
                            <p className="text-sm font-gg font-semibold text-secondary/80"> Basic Formatting </p>
                        </li>
                        <li className="flex flex-row items-center gap-2 lg:gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check-lg w-5 lg:w-6 text-green-500" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                            </svg>
                            <p className="text-sm font-gg font-semibold text-secondary/80"> Auto-Save </p>
                        </li>
                    </ul>
                    <button className="font-poppins font-semibold lg:font-bold text-sm lg:text-base text-secondary cursor-pointer bg-gray-200 px-2 py-1 lg:px-3 lg:py-2 rounded-md lg:rounded-lg w-full active:scale-90 ease-in duration-100"> Get Started </button>
                </div>

                {/* Paid Plans are shown below */}
                <div className="flex flex-col items-start gap-3 px-4 py-3 lg:p-5 bg-shade1 rounded-md lg:rounded-lg lg:hover:shaow-lg lg:hover:scale-105 ease-in duration-150 border-2 border-shade1 w-2/3 md:w-80 lg:w-100">
                    <h3 className="font-poppins font-semibold lg:font-bold text-lg lg:text-xl text-white"> Pro </h3>
                    <h3 className="font-poppins font-semibold lg:font-bold text-sm text-white"> <span className="text-2xl"> $9</span>/month </h3>
                    <ul className="list-none flex flex-col items-start gap-2">
                        <li className="flex flex-row items-center gap-2 lg:gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check-lg w-5 lg:w-6 text-green-500" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                            </svg>
                            <p className="text-sm font-gg font-semibold text-white"> Unlimited Documents </p>
                        </li>
                        <li className="flex flex-row items-center gap-2 lg:gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check-lg w-5 lg:w-6 text-green-500" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                            </svg>
                            <p className="text-sm font-gg font-semibold text-white"> Advance Formatting </p>
                        </li>
                        <li className="flex flex-row items-center gap-2 lg:gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check-lg w-5 lg:w-6 text-green-500" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                            </svg>
                            <p className="text-sm font-gg font-semibold text-white"> Cloud Sync </p>
                        </li>
                        <li className="flex flex-row items-center gap-2 lg:gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check-lg w-5 lg:w-6 text-green-500" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                            </svg>
                            <p className="text-sm font-gg font-semibold text-white"> Collaboration </p>
                        </li>
                    </ul>
                    <button className="font-poppins font-semibold lg:font-bold text-sm lg:text-base bg-white text-shade1 cursor-pointer px-2 py-1 lg:px-3 lg:py-2 rounded-md lg:rounded-lg w-full active:scale-90 ease-in duration-100"> Start Free Trial </button>
                </div>

                <div className="flex flex-col items-start gap-3 px-4 py-3 lg:p-5 bg-white rounded-md lg:rounded-lg lg:hover:shaow-lg lg:hover:scale-105 ease-in duration-150 border-2 border-secondary/20 w-2/3 md:w-80 lg:w-100">
                    <h3 className="font-poppins font-semibold lg:font-bold text-lg lg:text-xl text-secondary/80"> Enterprise </h3>
                    <h3 className="font-poppins font-semibold lg:font-bold text-sm text-secondary/90"> <span className="text-2xl"> $29</span>/month </h3>
                    <ul className="list-none flex flex-col items-start gap-2">
                        <li className="flex flex-row items-center gap-2 lg:gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check-lg w-5 lg:w-6 text-green-500" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                            </svg>
                            <p className="text-sm font-gg font-semibold text-secondary/80"> Everthing in Pro </p>
                        </li>
                        <li className="flex flex-row items-center gap-2 lg:gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check-lg w-5 lg:w-6 text-green-500" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                            </svg>
                            <p className="text-sm font-gg font-semibold text-secondary/80"> Team Management </p>
                        </li>
                        <li className="flex flex-row items-center gap-2 lg:gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check-lg w-5 lg:w-6 text-green-500" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                            </svg>
                            <p className="text-sm font-gg font-semibold text-secondary/80"> Priority Support </p>
                        </li>
                        <li className="flex flex-row items-center gap-2 lg:gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check-lg w-5 lg:w-6 text-green-500" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                            </svg>
                            <p className="text-sm font-gg font-semibold text-secondary/80"> Custom Integrations </p>
                        </li>
                    </ul>
                    <button className="font-poppins font-semibold lg:font-bold text-sm lg:text-base text-secondary cursor-pointer bg-gray-200 px-2 py-1 lg:px-3 lg:py-2 rounded-md lg:rounded-lg w-full active:scale-90 ease-in duration-100"> Contact Sales </button>
                </div>

            </div>

        </div>
    )
}

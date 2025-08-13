import { CheckSquare, Globe, Heart, Lightbulb, Users, Zap } from 'lucide-react'

export default function Values() {
    return (
        <div className="flex flex-col gap-3 sm:gap-5 lg:gap-8 xl:gap-10 items-center py-10 sm:py-12 lg:py-14 xl:py-22 bg-white" id="values">

            {/* Heading and Intro */}
            <div className="flex flex-col items-center gap-2 md:gap-3 xl:gap-4 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold text-secondary/90"> Our Values </h1>
                <p className="font-gg font-medium lg:font-semibold text-sm lg:text-base xl:text-lg text-secondary/90">
                    The principles that guide everything we do
                </p>
            </div>

            {/* points of our Values */}
            <div className="flex flex-col lg:grid lg:grid-cols-3 items-center justify-center gap-5 md:gap-7 lg:gap-x-8 lg:gap-y-10 px-5 lg:px-16">

                {/* simplicity */}
                <div className="flex flex-col px-3 py-2 lg:px-4 lg:py-3 items-center gap-2 md:gap-3 lg:gap-5 hover:scale-105 ease-in duration-150 text-center cursor-pointer">
                    <div className="bg-shade1/20 p-2 xl:p-3 rounded-full"> <Zap className="text-shade1 w-5 lg:w-6" /> </div>
                    <h3 className="font-poppins font-semibold lg:font-bold text-secondary/80 text-lg lg:text-xl xl:text-2xl"> Simplicity </h3>
                    <p className="font-gg font-medium text-sm lg:text-base text-secondary/80">
                        We believe powerful tools should be simple to use. Complexity should never get in the way of creativity.
                    </p>
                </div>

                {/* reliability */}
                <div className="flex flex-col px-3 py-2 lg:px-4 lg:py-3 items-center gap-2 md:gap-3 lg:gap-5 hover:scale-105 ease-in duration-150 text-center cursor-pointer">
                    <div className="bg-green-500/20 p-2 xl:p-3 rounded-full"> <CheckSquare className="text-green-500 w-5 lg:w-6" /> </div>
                    <h3 className="font-poppins font-semibold lg:font-bold text-secondary/80 text-lg lg:text-xl xl:text-2xl"> Reliability </h3>
                    <p className="font-gg font-medium text-sm lg:text-base text-secondary/80">
                        Your ideas are precious. We're committed to keeping them safe with enterprise-grade security and 99.9% uptime.
                    </p>
                </div>

                {/* collaboration */}
                <div className="flex flex-col px-3 py-2 lg:px-4 lg:py-3 items-center gap-2 md:gap-3 lg:gap-5 hover:scale-105 ease-in duration-150 text-center cursor-pointer">
                    <div className="bg-violet-500/20 p-2 xl:p-3 rounded-full"> <Users className="text-violet-500 w-5 lg:w-6" /> </div>
                    <h3 className="font-poppins font-semibold lg:font-bold text-secondary/80 text-lg lg:text-xl xl:text-2xl"> Collaboration </h3>
                    <p className="font-gg font-medium text-sm lg:text-base text-secondary/80">
                        Great ideas come from working together. We build tools that bring people closer, not further apart.
                    </p>
                </div>

                {/* innovation */}
                <div className="flex flex-col px-3 py-2 lg:px-4 lg:py-3 items-center gap-2 md:gap-3 lg:gap-5 hover:scale-105 ease-in duration-150 text-center cursor-pointer">
                    <div className="bg-yellow-500/20 p-2 xl:p-3 rounded-full"> <Lightbulb className="text-yellow-600 w-5 lg:w-6" /> </div>
                    <h3 className="font-poppins font-semibold lg:font-bold text-secondary/80 text-lg lg:text-xl xl:text-2xl"> Innovation </h3>
                    <p className="font-gg font-medium text-sm lg:text-base text-secondary/80">
                        We're constantly pushing boundaries, exploring new technologies to make writing more enjoyable and productive.
                    </p>
                </div>

                {/* user-centric */}
                <div className="flex flex-col px-3 py-2 lg:px-4 lg:py-3 items-center gap-2 md:gap-3 lg:gap-5 hover:scale-105 ease-in duration-150 text-center cursor-pointer">
                    <div className="bg-red-500/20 p-2 xl:p-3 rounded-full"> <Heart className="text-red-600 w-5 lg:w-6" /> </div>
                    <h3 className="font-poppins font-semibold lg:font-bold text-secondary/80 text-lg lg:text-xl xl:text-2xl"> User-Centric </h3>
                    <p className="font-gg font-medium text-sm lg:text-base text-secondary/80">
                        Every feature we build starts with understanding our users' needs. Your feedback shapes our roadmap.
                    </p>
                </div>

                {/* accessibility */}
                <div className="flex flex-col px-3 py-2 lg:px-4 lg:py-3 items-center gap-2 md:gap-3 lg:gap-5 hover:scale-105 ease-in duration-150 text-center cursor-pointer">
                    <div className="bg-blue-500/20 p-2 xl:p-3 rounded-full"> <Globe className="text-blue-600 w-5 lg:w-6" /> </div>
                    <h3 className="font-poppins font-semibold lg:font-bold text-secondary/80 text-lg lg:text-xl xl:text-2xl"> Accessibility </h3>
                    <p className="font-gg font-medium text-sm lg:text-base text-secondary/80">
                        Writing is a universal human need. We're committed to making our tools accessible to everyone, everywhere.
                    </p>
                </div>

            </div>

        </div>
    )
}

import React from 'react'
import { FileText, Cloud, Users, Lightbulb, Lock, FileDown } from 'lucide-react'

export default function Features() {
    return (
        <div className="flex flex-col gap-3 sm:gap-5 lg:gap-8 items-center py-10 sm:py-12 lg:py-14 xl:py-22 bg-white" id="features">

            {/* Heading and Intro */}
            <div className="flex flex-col items-center gap-2 md:gap-3 xl:gap-4 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold text-secondary/90"> Powerful Features </h1>
                <p className="font-gg font-medium lg:font-semibold text-sm lg:text-base xl:text-lg text-secondary/90">
                    Everything you need for productive writing.
                </p>
            </div>

            {/* features's block */}
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5 md:gap-x-7 md:gap-y-6 px-5 xl:gap-x-10 lg:px-8 xl:px-10">

                {/* card Blocks */}
                <div className="flex flex-col border-2 border-secondary/10 items-start gap-2 lg:gap-3 p-4 sm:w-2/3 md:w-fit lg:px-3 xl:p-5 rounded-md lg:rounded-lg hover:scale-105 lg:hover:shadow-lg ease-in duration-150 cursor-pointer">
                    <div className="bg-shade1/30 rounded-md lg:rounded-lg p-2"> <FileText className="w-7 lg:w-8 text-shade1" /> </div>
                    <h3 className="text-lg xl:text-xl font-poppins font-semibold lg:font-bold text-secondary/80"> Auto-Save </h3>
                    <p className="text-sm font-gg font-medium lg:font-semibold text-secondary/80 lg:text-base">
                        Your work is automatically saved every few seconds. Never worry about losing your progress again.
                    </p>
                </div>

                <div className="flex flex-col border-2 border-secondary/10 items-start gap-2 lg:gap-3 p-4 sm:w-2/3 md:w-fit lg:px-3 xl:p-5 rounded-md lg:rounded-lg hover:scale-105 lg:hover:shadow-lg ease-in duration-150 cursor-pointer">
                    <div className="bg-green-500/20 rounded-md lg:rounded-lg p-2"> <Cloud className="w-7 lg:w-8 text-green-500" /> </div>
                    <h3 className="text-lg xl:text-xl font-poppins font-semibold lg:font-bold text-secondary/80"> Cloud-Sync </h3>
                    <p className="text-sm font-gg font-medium lg:font-semibold text-secondary/80 lg:text-base">
                        Access your notes from any device, anywhere. Your content syncs seamlessly across all platforms.
                    </p>
                </div>      
                
                <div className="flex flex-col border-2 border-secondary/10 items-start gap-2 lg:gap-3 p-4 sm:w-2/3 md:w-fit lg:px-3 xl:p-5 rounded-md lg:rounded-lg hover:scale-105 lg:hover:shadow-lg ease-in duration-150 cursor-pointer">
                    <div className="bg-violet-500/20 rounded-md lg:rounded-lg p-2"> <Users className="w-7 lg:w-8 text-violet-500" /> </div>
                    <h3 className="text-lg xl:text-xl font-poppins font-semibold lg:font-bold text-secondary/80"> Colloboration </h3>
                    <p className="text-sm font-gg font-medium lg:font-semibold text-secondary/80 lg:text-base">
                        Share your documents and collaborate in real-time with team members or friends.
                    </p>
                </div>

                <div className="flex flex-col border-2 border-secondary/10 items-start gap-2 lg:gap-3 p-4 sm:w-2/3 md:w-fit lg:px-3 xl:p-5 rounded-md lg:rounded-lg hover:scale-105 lg:hover:shadow-lg ease-in duration-150 cursor-pointer">
                    <div className="bg-yellow-500/20 rounded-md lg:rounded-lg p-2"> <Lightbulb className="w-7 lg:w-8 text-yellow-500" /> </div>
                    <h3 className="text-lg xl:text-xl font-poppins font-semibold lg:font-bold text-secondary/80"> Smart Features </h3>
                    <p className="text-sm font-gg font-medium lg:font-semibold text-secondary/80 lg:text-base">
                        Intelligent suggestions, spell check, and formatting assistance to enhance your writing.
                    </p>
                </div>

                <div className="flex flex-col border-2 border-secondary/10 items-start gap-2 lg:gap-3 p-4 sm:w-2/3 md:w-fit lg:px-3 xl:p-5 rounded-md lg:rounded-lg hover:scale-105 lg:hover:shadow-lg ease-in duration-150 cursor-pointer">
                    <div className="bg-red-500/20 rounded-md lg:rounded-lg p-2"> <Lock className="w-7 lg:w-8 text-red-500" /> </div>
                    <h3 className="text-lg xl:text-xl font-poppins font-semibold lg:font-bold text-secondary/80"> Secure & Private </h3>
                    <p className="text-sm font-gg font-medium lg:font-semibold text-secondary/80 lg:text-base">
                        Your data is encrypted and secure. We respect your privacy and never share your content.
                    </p>
                </div>

                <div className="flex flex-col border-2 border-secondary/10 items-start gap-2 lg:gap-3 p-4 sm:w-2/3 md:w-fit lg:px-3 xl:p-5 rounded-md lg:rounded-lg hover:scale-105 lg:hover:shadow-lg ease-in duration-150 cursor-pointer">
                    <div className="bg-blue-500/20 rounded-md lg:rounded-lg p-2"> <FileDown className="w-7 lg:w-8 text-blue-500" /> </div>
                    <h3 className="text-lg xl:text-xl font-poppins font-semibold lg:font-bold text-secondary/80"> Export Option </h3>
                    <p className="text-sm font-gg font-medium lg:font-semibold text-secondary/80 lg:text-base">
                       Export your notes in multiple formats including PDF, Word, HTML, and plain text.
                    </p>
                </div>

            </div>

        </div>
    )
}

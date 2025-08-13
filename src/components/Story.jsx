import { Lightbulb } from "lucide-react";

export default function Story() {
    return (
        <div className="bg-gray-100 py-12 lg:py-16 xl:py-22 px-5 md:px-8 flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 xl:gap-16 w-full" id="intro">

            {/* first Part with para */}
            <div className="flex flex-col items-start gap-3 lg:gap-5 w-fit md:w-2/3 lg:w-2/4">
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-secondary/80 font-semibold lg:font-bold font-poppins"> Our Story </h3>
                <p className="text-sm lg:text-base font-gg font-medium text-secondary/80">
                    TextUtils was born out of frustration. Our founders, Ack and Abhay, were tired of losing important notes, struggling with clunky interfaces, and dealing with software that didn't sync properly across devices.
                    <br /> <br />
                    In 2024, they decided to build the notepad they wished existed. Starting in a small coffee shop in San Francisco, they spent countless hours crafting an experience that would be both powerful for professionals and simple enough for anyone to use.
                    <br /> <br />
                    Today, TextUtils serves millions of users worldwide, from students taking lecture notes to bestselling authors writing their next novel. But our core mission remains the same: to create the most intuitive, reliable, and beautiful writing experience possible.
                </p>
            </div>

            {/* side Image block */}
            <div className="bg-linear-120 from-shade1/30 to-shade2/50 px-5 py-8 rounded-md lg:rounded-lg shadow-md lg:shadow-lg w-full sm:w-3/4 md:w-3/5 h-40 md:h-60 lg:h-70 lg:w-2/6 flex flex-col items-center justify-center gap-1">
                <Lightbulb className="text-shade1 w-10 h-10 lg:w-14 lg:h-14" />
                <h3 className="text-lg font-poppins text-shade1 font-semibold lg:font-bold"> From Idea to Reality </h3>
                <p className="text-sm xl:text-base font-gg font-medium lg:text-shade2 lg:font-semibold">
                    The Journey of Building TextUtils.
                </p>
            </div>

        </div>
    )
}

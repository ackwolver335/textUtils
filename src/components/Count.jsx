import { IndentDecrease } from "lucide-react";
import { useEffect, useState } from "react"

export default function Count() {
    
    // creating a method for counter
    function Counter({targetNum,duration}) {
        const [counter,setCounter] = useState(0);

        useEffect(() => {
            let start = 0;
            const increment = targetNum / (duration/16);

            const timer = setInterval(() => {
                start += increment;
                if(start >= targetNum){
                    setCounter(targetNum);
                    clearInterval(timer);
                } else setCounter(Math.floor(start))
            },16);
            
            // stopping the interval right here
            return () => clearInterval(timer);

        },[]);

        return <>{counter}</>
    }

    return (
        <div className="py-10 bg-white px-4 grid grid-cols-2 items-center justify-evenly md:flex md:flex-row gap-x-2 gap-y-3 md:gap-8">

            {/* for active Users */}
            <div className="flex flex-col items-center gap-1 lg:gap-2">
                <h3 className="font-poppins font-semibold text-lg md:text-2xl xl:text-4xl lg:font-bold text-shade2"> <Counter targetNum={20} duration={2000}/>+ </h3>
                <p className="text-sm lg:text-base font-gg font-semibold text-secondary/80"> Active Users </p>
            </div>

            {/* documents Created */}
            <div className="flex flex-col items-center gap-1 lg:gap-2">
                <h3 className="font-poppins font-semibold text-lg md:text-2xl xl:text-4xl lg:font-bold text-shade2"> <Counter targetNum={5000} duration={2000}/>+ </h3>
                <p className="text-sm lg:text-base font-gg font-semibold text-secondary/80"> Documents Created </p>
            </div>

            {/* Included Countries */}
            <div className="flex flex-col items-center gap-1 lg:gap-2">
                <h3 className="font-poppins font-semibold text-lg md:text-2xl xl:text-4xl lg:font-bold text-shade2"> <Counter targetNum={150} duration={2000}/>+ </h3>
                <p className="text-sm lg:text-base font-gg font-semibold text-secondary/80"> Countries </p>
            </div>

            {/* Uptime working time */}
            <div className="flex flex-col items-center gap-1 lg:gap-2">
                <h3 className="font-poppins font-semibold text-lg md:text-2xl xl:text-4xl lg:font-bold text-shade2"> <Counter targetNum={999} duration={2000}/>% </h3>
                <p className="text-sm lg:text-base font-gg font-semibold text-secondary/80"> Uptime </p>
            </div>

        </div>
    )
}

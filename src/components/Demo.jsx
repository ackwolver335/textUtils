import React, { useEffect, useState } from 'react'

export default function Demo() {

    // defining the functionalities common object
    const [functions, setFunctions] = useState({
        textBold: false,
        textItalic: false,
        textUnderlined: false,
        fontFamily: 'gg',
        fontSize: 14,
    })

    // onClick Method for setting bold text
    const boldText = () => {
        if (functions.textBold) setFunctions(prev => ({ ...prev, textBold: false }))
        else setFunctions(prev => ({ ...prev, textBold: true }))
    }

    // onClick Method for setting italic text
    const italicText = () => {
        if (functions.textItalic) setFunctions(prev => ({ ...prev, textItalic: false }))
        else setFunctions(prev => ({ ...prev, textItalic: true }))
    }

    // onClick Method for setting bold text
    const underlineText = () => {
        if (functions.textUnderlined) setFunctions(prev => ({ ...prev, textUnderlined: false }))
        else setFunctions(prev => ({ ...prev, textUnderlined: true }))
    }

    // onClick Method for setting bold text
    const setFontFamily = () => {
        const editorFont = document.querySelector("#editorFont").value;
        setFunctions(prev => ({ ...prev, fontFamily: editorFont }));
    }

    useEffect(() => {
        if(functions.fontSize > 20 || functions.fontSize < 10) setFunctions(prev => ({...prev, fontSize: 12}))
    },[functions.fontSize])

    return (
        <div className="py-10 sm:py-12 lg:py-14 xl:py-22 px-5 bg-gray-50 flex flex-col items-center gap-5 lg:gap-8" id="demo">

            {/* Heading and Intro */}
            <div className="flex flex-col items-center gap-2 md:gap-3 xl:gap-4 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold text-secondary/90"> Experience the Interface </h1>
                <p className="font-gg font-medium lg:font-semibold text-sm lg:text-base xl:text-lg text-secondary/90">
                    Clean, intuitive, and powerful - just like your favorite desktop editor
                </p>
            </div>

            {/* UI Interface of Text Editor */}
            <div className="flex flex-col items-start gap-0 w-full h-fit md:h-70 sm:w-2/3 shadow-md lg:shadow-lg rounded-md lg:rounded-lg">

                {/* Initial Heading Div/Block */}
                <div className="flex flex-row items-center w-full gap-5 justify-between bg-gray-100 px-3 py-1 lg:py-2 lg:px-4 rounded-t-md lg:rounde-t-lg">
                    <div className="flex flex-row gap-2 lg:gap-5 items-center w-fit">
                        <div className="flex flex-row gap-1 lg:gap-2 items-center">
                            <span className="bg-red-500 p-1 lg:p-2 rounded-full"></span>
                            <span className="bg-yellow-500 p-1 lg:p-2 rounded-full"></span>
                            <span className="bg-green-500 p-1 lg:p-2 rounded-full"></span>
                        </div>
                        <p className="text-[10px] font-poppins font-semibold text-secondary/80 lg:text-sm"> My Notes - Untitled Document </p>
                    </div>

                    {/* Icon regarding Upload at the other end */}
                    <div className="p-1 lg:p-2 hover:bg-gray-200 rounded-md lg:rounded-lg ease-in duration-100 cursor-pointer active:scale-90">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cloud-arrow-up-fill w-5 lg:w-6 text-secondary/80 hover:text-secondary ease-in duration-100" viewBox="0 0 16 16">
                            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </div>
                </div>

                {/* functional Workflow Block */}
                <div className="flex flex-row flex-wrap  items-center justify-start gap-2 bg-white px-2 py-2 lg:px-3 lg:py-2 xl:px-4 xl:py-3 border-t-2 border-b-2 border-secondary/20 w-full">

                    {/* bold Text Functionality */}
                    <button className={`text-secondary font-semibold lg:font-bold font-poppins text-sm lg:text-base px-2 py-2 lg:px-3 lg:py-2 cursor-pointer rounded-md lg:rounded-lg ${functions.textBold ? 'bg-secondary/10' : 'bg-transparent'}`} onClick={boldText}> B </button>

                    {/* italic Text Functionality */}
                    <button className={`text-secondary font-semibold lg:font-bold font-poppins text-sm lg:text-base px-2 py-2 lg:px-3 lg:py-2 cursor-pointer rounded-md lg:rounded-lg ${functions.textItalic ? 'bg-secondary/10' : 'bg-transparent'}`} onClick={italicText}> I </button>

                    {/* italic Text Functionality */}
                    <button className={`text-secondary font-semibold lg:font-bold font-poppins text-sm lg:text-base px-2 py-2 lg:px-3 lg:py-2 cursor-pointer rounded-md lg:rounded-lg underline ${functions.textUnderlined ? 'bg-secondary/10' : 'bg-transparent'}`} onClick={underlineText}> U </button>

                    {/* font Family Functionality */}
                    <select id="editorFont" className="px-2 py-1 outline-none lg:px-3 lg:py-2 cursor-pointer font-gg text-sm lg:text-base text-secondary/80 font-semibold lg:font-bold" onClick={setFontFamily}>
                        <option value="gg" className="focus:outline-none font-gg text-sm font-semibold"> gg </option>
                        <option value="poppins" className="focus:outline-none font-gg text-sm font-semibold"> poppins </option>
                        <option value="sans" className="focus:outline-none font-gg text-sm font-semibold"> sans </option>
                    </select>

                    {/* font siz functionality */}
                    <input type="number" className="text-sm lg:text-base px-2 py-1 lg:px-3 lg:py-2 font-poppins outline-none" value={functions.fontSize} onChange={(e) => setFunctions(prev => ({...prev, fontSize: e.target.value}))} />

                </div>

                {/* main Text Block */}
                <p className={`px-3 py-2 xl:px-5 xl:py-4 leading-5 text-secondary/80 font-${functions.fontFamily} ${functions.textBold ? 'font-semibold' : ''} ${functions.textItalic ? 'italic' : ''} ${functions.textUnderlined ? 'underline' : ''}`} style={{
                    fontSize: `${functions.fontSize}px`
                }}>
                    This is where your ideas come to life. Start typing and watch as your thoughts transform into beautifully formatted text. Our advanced editor supports: <br /> <br />
                    • Rich text formatting - Bold, italic, underline, and more <br />
                    • Auto-save - Never lose your work again
                    • Cloud sync - Access from any device
                    • Collaboration - Share and edit with others
                    Start writing your next masterpiece...
                </p>

            </div>

        </div>
    )
}

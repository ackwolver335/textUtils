import React, { useEffect, useState } from 'react'

export default function NoteEdit(props) {

    // getting the props
    const { setUserMode } = props;

    // state for different changes in the text
    const [userText, setUserText] = useState({
        boldText: false,
        italicText: false,
        underlineText: false,
        fontFamily: 'gg',
        clearAll: false,
        textAlign: 'left',
        textContent: '',
        textDelete: false,
        textCopied: false
    })

    // method in order to set font family
    const setFontFamily = () => {
        const editorFont = document.querySelector("#editorFont").value;
        setUserText(prev => ({ ...prev, fontFamily: editorFont }));
    }

    // timer for setting delete and copies after 3 seconds
    const deleteContent = () => {
        setUserText(prev => ({ ...prev, textDelete: true }));
        setTimeout(() => {
            setUserText(prev => ({ ...prev, textDelete: false }))
        }, 3000);
    }

    const copyContent = () => {
        if (!(userText.textDelete)) {
            setUserText(prev => ({ ...prev, textCopied: true }));
            setTimeout(() => {
                setUserText(prev => ({ ...prev, textCopied: false }))
            }, 3000);
        }
    }

    return (
        <div className="w-full px-5 py-4 md:py-5 md:px-8 flex items-center justify-center bg-white">

            {/* main Text Editor Div */}
            <div className="w-2/3 px-3 py-2 md:py-4 rounded-md lg:rounded-lg shadow-md lg:shadow-lg bg-white">

                {/* initial block regarding text editing */}
                <div className="flex flex-row flex-wrap py-2 px-3 items-center gap-2 lg:gap-4 xl:gap-5 justify-start border-b-2 border-secondary/40">

                    {/* general functionality regarding text - Bold, Italic and Underlined */}
                    <div className="flex flex-row items-center gap-2 lg:gap-3">

                        {/* button regarding bold text functionality */}
                        <button title='Bold Text' className={`text-secondary font-semibold lg:font-bold font-poppins text-sm lg:text-base px-2 py-2 lg:px-3 lg:py-2 cursor-pointer rounded-md lg:rounded-lg ${userText.boldText ? 'bg-secondary/10' : 'bg-transparent'}`} onClick={() => { userText.boldText ? setUserText(prev => ({ ...prev, boldText: false })) : setUserText(prev => ({ ...prev, boldText: true })) }}> B </button>

                        {/* button regarding italic text functionality */}
                        <button title='Italic Text' className={`text-secondary font-semibold lg:font-bold font-poppins text-sm lg:text-base px-2 py-2 lg:px-3 lg:py-2 cursor-pointer rounded-md lg:rounded-lg ${userText.italicText ? 'bg-secondary/10' : 'bg-transparent'}`} onClick={() => { userText.italicText ? setUserText(prev => ({ ...prev, italicText: false })) : setUserText(prev => ({ ...prev, italicText: true })) }}> I </button>

                        {/* button regarding underlined text functionality */}
                        <button title='Underlined Text' className={`text-secondary font-semibold lg:font-bold font-poppins text-sm lg:text-base px-2 py-2 lg:px-3 lg:py-2 cursor-pointer rounded-md lg:rounded-lg ${userText.underlineText ? 'bg-secondary/10' : 'bg-transparent'}`} onClick={() => { userText.underlineText ? setUserText(prev => ({ ...prev, underlineText: false })) : setUserText(prev => ({ ...prev, underlineText: true })) }}> U </button>

                    </div>

                    {/* delimeter block regarding different options seperations */}
                    <div className="w-[2px] md:w-[3px] rounded-full h-5 md:h-6 bg-secondary/60 lg:bg-secondary/40 lg:rounded-none"></div>

                    {/* code in order to set font family */}
                    <select title='Font Family' id="editorFont" className="px-2 py-1 outline-none lg:px-3 lg:py-2 cursor-pointer font-gg text-sm lg:text-base text-secondary/80 font-semibold lg:font-bold" onClick={setFontFamily}>
                        <option value="gg" className="focus:outline-none font-gg text-sm font-semibold"> gg </option>
                        <option value="poppins" className="focus:outline-none font-gg text-sm font-semibold"> poppins </option>
                        <option value="sans" className="focus:outline-none font-gg text-sm font-semibold"> sans </option>
                    </select>

                    {/* delimeter block regarding different options seperations */}
                    <div className="w-[2px] md:w-[3px] rounded-full h-5 md:h-6 bg-secondary/60 lg:bg-secondary/40 lg:rounded-none"></div>

                    {/* block in order to set text alignment */}
                    <div className="flex flex-row items-center gap-2 lg:gap-3">

                        {/* justify-text content */}
                        <div title='Justify Text' className={`p-1 lg:p-[6px] cursor-pointer ${userText.textAlign === 'justify' ? 'bg-secondary/10' : 'bg-transparent'} rounded-md lg:rounded-lg`} onClick={() => { if (userText.textAlign !== 'justify') setUserText(prev => ({ ...prev, textAlign: 'justify' })) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-justify text-secondary/80 w-5" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </div>

                        {/* center-text content */}
                        <div title='Center Text' className={`p-1 lg:p-[6px] cursor-pointer ${userText.textAlign === 'center' ? 'bg-secondary/10' : 'bg-transparent'} rounded-md lg:rounded-lg`} onClick={() => { if (userText.textAlign !== 'center') setUserText(prev => ({ ...prev, textAlign: 'center' })) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-text-center text-secondary/80 w-5" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </div>

                        {/* left-text content */}
                        <div title='Left Alignment' className={`p-1 lg:p-[6px] cursor-pointer ${userText.textAlign === 'left' ? 'bg-secondary/10' : 'bg-transparent'} rounded-md lg:rounded-lg`} onClick={() => { if (userText.textAlign !== 'left') setUserText(prev => ({ ...prev, textAlign: 'left' })) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-text-left text-secondary/80 w-5" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </div>

                        {/* right-text content */}
                        <div title='Right Alignment' className={`p-1 lg:p-[6px] cursor-pointer ${userText.textAlign === 'right' ? 'bg-secondary/10' : 'bg-transparent'} rounded-md lg:rounded-lg`} onClick={() => { if (userText.textAlign !== 'right') setUserText(prev => ({ ...prev, textAlign: 'right' })) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-text-right text-secondary/80 w-5" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </div>

                    </div>

                    {/* delimeter block regarding different options seperations */}
                    <div className="w-[2px] md:w-[3px] rounded-full h-5 md:h-6 bg-secondary/60 lg:bg-secondary/40 lg:rounded-none"></div>

                    {/* other different options */}
                    <div className="flex flex-row items-center gap-2 lg:gap-4">

                        {
                            userText.textDelete ?

                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-trash-fill w-5 text-red-500 cursor-pointer" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                </svg>

                                :

                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-trash w-5 text-secondary/80 cursor-pointer" viewBox="0 0 16 16" onClick={deleteContent}>
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                </svg>
                        }

                        {

                            userText.textCopied ?

                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-clipboard-check w-5 cursor-pointer text-green-500" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                                </svg>

                                :

                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-clipboard w-5 text-secondary/80 cursor-pointer" viewBox="0 0 16 16" onClick={copyContent}>
                                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                                </svg>

                        }

                    </div>

                </div>

            </div>

        </div>
    )
}

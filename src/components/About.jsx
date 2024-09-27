import React from 'react'

export default function About(props) {

    return (
        <div className = "container p-3 rounded-2">
            <h3 className = {`text-${props.mode === 'light' ? 'dark' : 'light'}`}> About Us </h3>
        <div className="accordion" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className={`accordion-button collapsed text-${props.mode === 'light' ? 'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style = {{
                    backgroundColor : props.mode === 'light' ? 'white' : '#2b3035'
                }}>
                    <strong> TextUtils </strong>
                </button>
                </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className={`accordion-body text-${props.mode === 'light' ? 'dark' : 'light'}`} style = {{
                    backgroundColor : props.mode === 'light' ? 'white' : '#2b3035'}}>
                {/* Text Content is been Served Below */}
                TextUtils can convert your text to any case in just one simple click of a button. It can extract links and numbers safely from a labyrinth of random text or sophisticated documentation. It has an improved property of base64 encoding, reversal of your inputted text.</div>
            </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className={`accordion-button collapsed text-${props.mode === 'light' ? 'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style = {{
                    backgroundColor : props.mode === 'light' ? 'white' : '#2b3035'
                }}>
                    <strong> Free to Use </strong>
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className={`accordion-body text-${props.mode === 'light' ? 'dark' : 'light'}`} style = {{
                    backgroundColor : props.mode === 'light' ? 'white' : '#2b3035'
                }}>
                    textUtils is a lightweight web application built with React.js, designed to help users manipulate text quickly and efficiently. Whether you need to convert text to uppercase, lowercase, or other cases, textUtils offers a simple, intuitive interface to get the job done. Additionally, you can easily copy the transformed text for further use.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className={`accordion-button collapsed text-${props.mode === 'light' ? 'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style = {{
                    backgroundColor : props.mode === 'light' ? 'white' : '#2b3035'
                }}>
                    <strong> Browser Compatibility </strong>
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className={`accordion-body text-${props.mode === 'light' ? 'dark' : 'light'} rounded`} style = {{
                    backgroundColor : props.mode === 'light' ? 'white' : '#2b3035'
                }}>
                    The app is compatible with all modern browsers, including Chrome, Firefox, Edge, and Safari, ensuring a smooth experience across devices. Whether you're a professional working on documents or a student preparing assignments, textUtils streamlines the process of text manipulation.
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

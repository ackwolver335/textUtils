import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {

    // Adding useState here for Getting the data over to the Page
    const [text,setText] = useState("Sample text here..");

    // wrong way to update the state
    // text = "value";

    // Right way to set the text here
    // setText("value here");

    // Creating the main working method for changing the state of the Textbar
    const handleState = (event) => {
        setText(event.target.value);
    }

    // Creating a method for converting the data to lowecase
    const Convert2lower = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.giveAlert("Converted to Lower Case","success");
    }

    // Creating a method for converting the date to UpperCase
    const Convert2Upper = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.giveAlert("Converted to Upper Case","success");
    }

    // Creating a method for removing all the content of Textbar
    const clearAllData = () => {
        let newText = "";
        setText(newText);
        props.giveAlert("All Content Cleared Successfully","success");
    }

    // Creating a method in order to copy content from the TextBox
    const copyContent = () => {
        navigator.clipboard.writeText(text);
    }

    // Creating a method in order to remove spaces from the text of TextBox
    const removeSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.giveAlert("Extra Space Removed","success");
    }

    // Main Code for returning the JSX to the page or App.js
    return (
        <>
        <div className = {`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <h3> {props.heading} </h3>
            <div className="mb-3">
                <textarea className={`form-control mt-3 border border-${props.mode === 'light' ? 'primary' : 'white'} text-${props.mode === 'light' ? 'dark' : 'light'}`} value = {text} id="exampleFormControlTextarea1" rows="5" onChange = {handleState} style =  {{
                    backgroundColor : props.mode === 'light' ? 'white' : '#2b30357a'
                }}></textarea>
                <div className = "mt-2 d-flex justify-content-center flex-wrap gap-2">
                <button disabled = {text.length === 0}className = {`btn btn-${props.mode === 'light' ? 'primary' : 'secondary'} rounded-3 mx-1 my-1`} onClick = {Convert2lower}> LowerCase </button>
                <button disabled = {text.length === 0}className = {`btn btn-${props.mode === 'light' ? 'primary' : 'secondary'} rounded-3 mx-1 my-1`} onClick = {Convert2Upper}> UpperCase </button>
                <button disabled = {text.length === 0}className = {`btn btn-${props.mode === 'light' ? 'primary' : 'secondary'} rounded-3 mx-1 my-1`} onClick = {clearAllData}> Clear All </button>

                {/* Adding more button for enhancing its features in the TextUtils */}
                <button disabled = {text.length === 0}className = {`btn btn-${props.mode === 'light' ? 'primary' : 'secondary'} rounded-3 mx-1 my-1`} onClick = {copyContent}> Copy Text </button>
                <button disabled = {text.length === 0}className = {`btn btn-${props.mode === 'light' ? 'primary' : 'secondary'} rounded-3 mx-1 my-1`} onClick = {removeSpaces}> Remove Extra Spaces </button>
                </div>
            </div>
        </div>

        {/* #8 */}
        {/* Adding More logic to the TextUtils in order to make it more recognible */}
        <div className={`container my-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>

            {/* Getting the summary of the textual data that is provided by the user */}

            <h3> Your Text Summary </h3>
            <p>
                {/* Fixing the Issues regarding the Text Extra Spaces */}
                {text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters. <br/>
                {text.split(' ').length * 0.008} Minutes to read this Content.
            </p>

            {/* Getting the preview of the textual data here in order to get all data Overview */}
            <h3> Your Text Preview </h3>
            <p> {text} </p>
        </div>
        </>
    )
}

// defining the props datatype here
Textform.proptype = {
    heading : PropTypes.string.isRequired,
}

// setting the default proptype here
Textform.defaultProps = {
    heading : "Text Analyser",
}
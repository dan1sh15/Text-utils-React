import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }
 
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleClear = () => {
        setText("");
        props.showAlert("Cleared!", "success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const [text, setText] = useState("");
    // text = "Danish" // wrong way
    // setText("Danish"); // right way
  return (
    <>
        <div className="mb-3" style={{color: props.mode === 'dark' ? 'white': 'black'}}>
            <h1>{props.heading}</h1>
            <textarea className="form-control" style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'dark' ? 'white' : 'black'}} onChange={handleOnChange} placeholder='Enter your text here...' value={text} id="myBox" rows="9"></textarea >
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClear} >Clear Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy} >Copy Text</button>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white': 'black'}}>
            <h1>Your text Summary</h1>
            <p>{text.split(" ")[text.split(" ").length - 1] === "" ? (text.split(" ").length - 1) :  text.split(" ").length} words and {text.length} characters</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : "Enter something in the textbox to preview it here..."}</p>
        </div>
    </>
  );
}

import React, {useState} from 'react'

export default function TextArea(props) {
    const [text,setText]=useState("");
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const handleUpClick =()=>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.toggleAlert("Converted to UpperCase!!","success");
    }
    const handleDownClick =()=>{
        console.log("Lowercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.toggleAlert("Converted to LowerCase!!","success")
    }
    const handleTitleClick =()=>{
        console.log("Titlecase was clicked");
        let myText=text.toLowerCase();
        let myArrayText=myText.split(" ");
        let newArrayText=[];
        for(let i=0;i<myArrayText.length;i++){
            let newText=myArrayText[i][0].toUpperCase()+myArrayText[i].slice(1);
            newArrayText.push(newText);
        }
        setText(newArrayText.join(" "));
        props.toggleAlert("Converted to TitleCase!!","success")
    }
    const handleClearClick =()=>{
        console.log("Clear text was clicked");
        setText("");
        props.toggleAlert("Clearing the text!!","danger")
    }
    const handleCopyClick =()=>{
        console.log("Copy text was clicked");
        navigator.clipboard.writeText(text); 
        props.toggleAlert("Copied to Clipboard!!","info")
    }
    const handleXtraClick =()=>{
        console.log("Remove extra space was clicked");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        // setText(text.replace(/\s+/g, ' ').trim());
        props.toggleAlert("Extra Spaces Removed","success")
    }
    return (
        <>
        <div className="container" style={{color: props.mode==="dark"?"white":"#042743"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3 my-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==="dark"?"#13466e":"white",color: props.mode==="dark"?"white":"#042743"}}value={text} onChange={handleOnChange} id="myBoxArea" rows="8"></textarea>
            </div>
            <button type="button" className={`btn btn-${props.btnColor} mx-2 my-2`} onClick={handleUpClick}>Convert to UpperCase</button>
            <button type="button" className={`btn btn-${props.btnColor} mx-2 my-2`} onClick={handleDownClick}>Convert to LowerCase</button>
            <button type="button" className={`btn btn-${props.btnColor} mx-2 my-2`} onClick={handleTitleClick}>Convert to TitleCase</button>
            <button type="button" className={`btn btn-${props.btnColor} mx-2 my-2`} onClick={handleClearClick}>Clear Text</button>
            <button type="button" className={`btn btn-${props.btnColor} mx-2 my-2`} onClick={handleCopyClick}>Copy Text</button>
            <button type="button" className={`btn btn-${props.btnColor} mx-2 my-2`} onClick={handleXtraClick}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==="dark"?"white":"#042743"}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}

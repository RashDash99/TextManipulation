import React, {useState} from "react";
import './text.css';     


export default function TextUtils(props) {

  const handleUpClick = ()=>{
    
    let newText = text.toUpperCase();
    setText(newText)
  }
  
  const handlePuClick= ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleNoClick= ()=>{
    const str = text;
    const newText = str.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
   setText(newText)
    
  }

  const handleExtraSpaces= ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const handleCopy= ()=>{
    var text=document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);

  }
  
  const handleOnChange = (event) =>
  {
    setText(event.target.value)
  }
  
  const [text, setText] = useState("Enter text Here");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-lg btn-primary mx-2 my-2" onClick={handleNoClick} > Change In Propercase</button>
      <button className="btn btn-lg btn-primary mx-2 my-2" onClick={handlePuClick} > Change In Lowercase</button>
      <button className="btn btn-lg btn-primary mx-2 my-2" onClick={handleUpClick} > Change In Uppercase </button>
      <button className="btn btn-lg btn-primary mx-2 my-2" onClick={handleExtraSpaces} > Remove Extra Spaces </button>
      <button className="btn btn-lg btn-primary mx-2 my-2" onClick={handleCopy} > Copy to Clipboard </button>

    </div>
    <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
          <h2  className="fw-bold font-monospace ">Your Text Summary</h2>
          <p className="fw-bold font-monospace " >{text.split(" ").filter((element)=> {return element.length!==0}).length} words and {text.length} letters</p>
          <p>Avg time to read {0.008*text.length} minutes</p>
          <h3>Preview</h3>
          <p>{text}</p>
    </div>
    </>
  );
}

import React,{useState} from 'react';
import PropTypes from 'prop-types'

export default function Textform(props) {

    const [text,settext] = useState("Enter text here");

    const handleupclick = ()=>{
        console.log("Button was clicked");
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showalert("Converted to uppercase","success");
    }

    const cleartext = () =>{
        let newtext ='';
        settext(newtext);
        props.showalert("text is clear","success");
    }

    const handleloclick = ()=>{
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showalert("Converted to lovercase","success");
    }

    const handleonchange = (event)=>{
        console.log("On Change");
        settext(event.target.value);
    }
  return <>
  <div className="container mt-4">
    <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1" style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</label>
    <textarea value={text} className="form-control" id="exampleFormControlTextarea1" rows="5" onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode=='dark'?'white':'black'}}></textarea>

    <button className="btn btn-primary mt-2 mx-2" onClick={handleupclick} style={{color:props.mode==='dark'?'white':'black'}}>
      {props.button}
  </button>

  <button className="btn btn-primary mt-2 mx-2" onClick={handleloclick} style={{color:props.mode==='dark'?'white':'black'}}>
      Change to Uppercase
  </button>

  <button className="btn btn-primary mt-2" onClick={cleartext} style={{color:props.mode==='dark'?'white':'black'}}>
      Clear
  </button>
  </div>

  </div>

  <div className="container mt-4" style={{color:props.mode==='dark'?'white':'black'}}>
      <p>Number of word is {text.split(" ").length} number of characters is {text.length}</p>

      <p>time {0.008*text.split(" ").length}to read</p>

      <h3>Preview</h3>
      <p>{text}</p>
  </div>
  </>;
}

Textform.protoType={
    heading: PropTypes.string,
    button: PropTypes.string
}

Textform.defaultProps = {
    heading: "Set heading here",
    button:  "Set button text here"
}
import React, {useState}from 'react'

// eslint-disable-next-line react-hooks/rules-of-hooks

export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was Clicked!");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
      console.log("Lowercase was Clicked!");
      let newText = text.toLowerCase();
      setText(newText);
  }
    const handleOnChange = (event)=>{

        setText(event.target.value);
    }
    const [text, setText] = useState('Enter the text here');
  return (
    <>
    <div>
<div className="my-box">
  <label for="my-box" className="form-label"><h1>{props.heading}</h1></label>
  <textarea className="form-control" value = {text} onChange={handleOnChange} id="my-box" rows="8" placeholder={text}></textarea>
</div>
{/* <button className='btn btn.primary'onClick={handleUpClick}>UpperCase</button> */}
<button type="button" className="btn btn-outline-info my-3" onClick={handleUpClick}>Uppercase</button>
{/* <button className='btn btn.primary'onClick={handleLoClick}>LowerCase</button> */}
<button type="button" className="btn btn-outline-info my-3 mx-2" onClick={handleLoClick}>LowerCasecase</button>
</div>
<div className='container my-2'>
  <h1>Your Text Summary</h1>
  <p>{text.split(" ").length}Words {text.length} Characters</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</>
  )
}

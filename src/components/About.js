import React, { useState } from 'react'

export default function About(props) {

    //  
    
    let myStyle={
        color:props.mode=== 'dark'? 'white': '#042743',
        backgroundColor: props.mode=== 'dark'? 'rgb(36 74 104)': 'white',
       
    }

    // const [btnText, setBtnText] = useState("Enable Dark Mode")

//    const toggleStyle= ()=>{
//         if(myStyle.color ==='Black')
//         {
//             setmyStyle({
//                 color:'White',
//                 backgroundColor:'Black'
//             })
//             setBtnText("Enable Light Mode")
//         }
//         else{
//             setmyStyle({
//                 color:'Black',
//                 backgroundColor:'White'
//             })
//             setBtnText("Enable Dark Mode")
//         }
//     }

  return (
    <div className='container'>
        <h1 className="my-3" style={{ color:props.mode=== 'dark'? 'white': '#042743'}}>About Us</h1>
        <div className="accordion " style={myStyle} id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Convert To UpperCase Function
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                <pre>
                    <code>
                    {`
                    const handleUpClick=()=>{
                    let newText=text.toUpperCase();
                    setText(newText)
                    props.showAlert("Converted to uppercase","success");
                    }
                    `}
                    </code>
                    </pre>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   Convert To LowerCase Function
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                <pre>
                <code>
                {`
                const handleDownClick=()=>{
                let newText=text.toLowerCase();
                setText(newText)
                props.showAlert("Converted to Lowercase","success");
                }
                `}
                </code>
                </pre>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                   Copy To ClipBoard Function
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                <pre>
                <code>
                {`
                const handleCopy=()=>{
                navigator.clipboard.writeText(text);
                props.showAlert("copied to Clipboard","success");
                }    
                `}
                </code>
                </pre>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Remove Extra Spaces Function
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                <pre>
                <code>
                {`
                const handleExtraSpaces=()=>
                {
                let newText=text.split(/[ ]+/)
                setText(newText.join(" "));
                props.showAlert("Extra Spaces Removed!","success");
                }
                `}
                </code>
                </pre>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                   Clear Text Function
                </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>   
                <pre>
                <code>
                {`
                const handleClear=()=>{
                let newText="";
                setText(newText);
                props.showAlert("Text Cleared!","success");  
                }
                `}
                </code>
                </pre>
                </div>
                </div>
            </div>
</div>
    {/* <div className="container my-3">
        <button type='button' onClick={toggleStyle}  className="btn btn-primary">{btnText}</button>
        </div> */}
    </div>
  )
}

import React from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })
    // const [mybtn,setMyBtn] = useState("Enable Dark Mode");
    // const toggleStyle = ()=>{
    //     if(myStyle.color === "white"){
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         setMyBtn("Enable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black",
    //             border:"1px solid white"
    //         })
    //         setMyBtn("Enable Light Mode")
    //     }
    // }
    let myStyle={
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    }
    return (
        <>
        <div className="accordion" id="accordionPanelsStayOpenExample" style={myStyle}>
            <h1 className='my-3' style={{color: props.mode ==='dark'?'white':'#042743'}}>{props.heading}</h1>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <strong>Accordion Item #1</strong>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                <strong>Accordion Item #2</strong>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                <strong>Accordion Item #3</strong>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            {/* <div className='container my-3'>
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{mybtn}</button>
            </div> */}
        </div>
        </>
    )
}

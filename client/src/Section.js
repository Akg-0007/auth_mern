import React from "react";
import Upload from "./Pages/Upload";
// import video from "../src/remastered.mp4";
import video from "../src/biker.mp4";
const Section = ()=>{
    return(
        <div id="page1">
        <h1>Change</h1>
        <h1>the game</h1>
        <div id="video-container">
            <div id="play">PLAY</div>
            <video autoPlay loop muted src={video}></video>
        </div>
        {/* <Upload/> */}
    </div>
    )
}
export default Section;
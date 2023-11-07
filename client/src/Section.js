import React from "react";
import video from "../src/remastered.mp4";
const Section = ()=>{
    return(
        <div id="page1">
        <h1>Change</h1>
        <h1>the game</h1>
        <div id="video-container">
            <div id="play">PLAY</div>
            <video autoPlay loop muted src={video}></video>
        </div>
    </div>
    )
}
export default Section;
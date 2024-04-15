import React, { useEffect } from "react";
import slide1 from "./gallery/pictures/HOSPL PANORAMIC IMG JPG.jpg"
import "./slides.css";

const Slide = ()=>{
    var width = 90;
    var height = 90;
    var intervalId =0;
    useEffect(()=>{
        intervalId = setInterval(zoom,13);
        
    },[]);

    const zoom =()=>{
        if(width <100 && height <100){
            width+=0.09;
            height +=0.09;
            document.querySelector(".innerSlide").style.width = `${width}%`;
            document.querySelector(".innerSlide").style.height = `${height}%`;
            console.log(width);
        }
        else{
            clearInterval(intervalId);
        }
    }
    return(
        <div className="slides">
            <div className="slide" > <div className="innerSlide"> <img src ={slide1} alt ="img not found" /> </div> </div>
        </div>
    )
}
export default Slide;
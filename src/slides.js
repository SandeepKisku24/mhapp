import React, { useEffect, useState } from "react";
import slide1 from "./gallery/pictures/HOSPL PANORAMIC IMG JPG.jpg";
import slide2 from "./gallery/pictures/slide2.jpg";
import slide3 from "./gallery/pictures/slide3.png";
import slide4 from "./gallery/pictures/slide4.jpg";
import "./slides.css";

const Slide = ()=>{

    var[slideNo, setSlide] = useState(0);
    // for the zoom part 
    var width = 90;
    var height = 90;
    var intervalId =0;
    useEffect(()=>{
        width =90;
        height = 90;
        intervalId =0;
        intervalId = setInterval(zoom,13);
        
    },[]);

    const zoom =()=>{
        // console.log(width);
        if(width <100 && height <100){
            width+=0.09;
            height +=0.09;
            document.querySelector(".innerSlide").style.width = `${width}%`;
            document.querySelector(".innerSlide").style.height = `${height}%`;
            // console.log(width);
        }
        else{
            clearInterval(intervalId);
        }
    }

    // for the sliding part

   
    
    useEffect(()=>{
        if(slideNo>=0 && slideNo<=3){
            var slideClass = ".slide" + slideNo;
            // document.querySelector(slideClass).style.transitionDelay = "3s";
            document.querySelector(slideClass).style.display = "block";
        
        if(slideNo!==0){

            document.querySelector(".slide0").style.display = "none";
        }
        if(slideNo!==1){
            document.querySelector(".slide1").style.display = "none";
        }
        if(slideNo!==2){
            document.querySelector(".slide2").style.display = "none";
        }
        if(slideNo!==3){
            document.querySelector(".slide3").style.display = "none";
        }
        console.log(slideNo);
        }
        
    },[slideNo])


    const handleLeftClick= ()=>{
        
    }

    return(
        <div className="slides">
            <div className="slide slide0" > <div className="innerSlide"> <img src ={slide1} alt ="img not found" /> </div> </div>
            <div className="slide1" > <img src ={slide2} alt ="img not found" />  </div>
            <div className=" slide2" >  <img src ={slide3} alt ="img not found" />  </div>
            <div className="  slide3" >  <img src ={slide4} alt ="img not found" />  </div>
            <div className="left arrow" onClick={()=>{
                const temp = slideNo-1;
                if(temp>=0){
                    setSlide(temp);
                    console.log(slideNo);
                }
                else{
                    setSlide(3);
                }
            }}> <i class="fa fa-arrow-left" aria-hidden="true"></i> </div>
            <div className="right arrow" onClick={()=>{
                const temp = slideNo+1;
                if(temp<=3){
                    
                    setSlide(temp);
                    console.log(slideNo);
                }
                else{
                    setSlide(0);
                }
            }}> <i class="fa fa-arrow-right" aria-hidden="true"></i> </div>
            <div className="number"> {slideNo+1}/4 </div>
        </div>
    )
}
export default Slide;
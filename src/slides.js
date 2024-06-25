import React, { useEffect, useState } from "react";
// import slide1 from "./gallery/pictures/HOSPL PANORAMIC IMG JPG.jpg";
import slide1 from "./gallery/pictures/home1.jpg";
import slide2 from "./gallery/pictures/Dental.jpg";
import slide3 from "./gallery/pictures/Xray1.jpg";
import slide4 from "./gallery/pictures/Dental flex.jpg";
import "./slides.css";
import { Card, Image, Stack, Text } from "@mantine/core";
import { mobile } from './screenSizes';
import { useMediaQuery } from "@mantine/hooks";

const Slide = ()=>{

    const isMobile = useMediaQuery(mobile);

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
        if( width <100 && height <100){
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
    var[slideNo, setSlide] = useState(0);

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            if(slideNo<3)
            setSlide(slideNo + 1);
            else
            setSlide(0);
        }, 5000);
 
        //Clearing the interval
        return () => clearInterval(interval);
    }, [slideNo]);

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

        }
    })
    
   
    return(
        <div className="slides" style={{height:isMobile?"300px":"500px", width: isMobile?"100%":"90%", marginLeft:"auto",marginRight:"auto", backgroundColor:"#EFF0FF"}}>
            <div className="slide slide0" style={{height:isMobile?"300px":"500px"}}> <div className="innerSlide"> <img src ={slide1} alt ="img not found" /> </div> </div>
            <div className="slide1" style={{ height: isMobile ? "300px" : "500px", position: "relative" }}> 
    <Card shadow="sm" padding="xl" style={{ height: "100%" }} bg="#EFF0FF">
        <Image
            fit="cover"
            src={slide2}
            alt="No way!"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
        <Stack 
            gap={0} 
            pb={5}  
            style={{
                backgroundColor: "#7C469B",
                position: "absolute",
                bottom: 0,
                width: "90%",
                height: isMobile?"60px":"80px",
                left: "5%",
                borderRadius: "5px",
                padding: "1px"
            }}
        >
            
            <Text mt="xs" c="#fff" size={isMobile ? "8px" : "16px"} my="auto" ta="center" mx="auto" style={{textTransform:"uppercase",lineHeight:"1.5", wordSpacing:"0.2em"}}>
            <span style={{fontSize: isMobile?"12px":"22px"}}>o</span>ur <span style={{fontSize: isMobile?"12px":"22px"}}>c</span>ommitment is to <span style={{fontSize: isMobile?"12px":"22px"}}>p</span>rovide <span style={{fontSize: isMobile?"12px":"22px"}}>e</span>xceptional <span style={{fontSize: isMobile?"12px":"22px"}}>h</span>ealthcare to all, <span style={{fontSize: isMobile?"12px":"22px"}}>e</span>nsuring <span style={{fontSize: isMobile?"12px":"22px"}}>q</span>uality and <span style={{fontSize: isMobile?"12px":"22px"}}>c</span>onvenience <span style={{fontSize: isMobile?"12px":"22px"}}>f</span>or our <span style={{fontSize: isMobile?"12px":"22px"}}>c</span>ommunity.
            </Text>
        </Stack>
    </Card>
</div>

<div className="slide2" style={{ height: isMobile ? "300px" : "500px", position: "relative", width: "95%", margin: "0 auto", }}> 
    <Card shadow="sm" padding="xl" style={{ height: "97%" }} my={10} >
        <Card.Section style={{ height: "100%" }}>
            <Image
                src={slide3}
                alt="No way!"
                style={{ height: "100%", width: "100%", objectFit: "cover", objectPosition: "top center" }}
            />
        </Card.Section>

        <Stack 
            gap={0} 
            pb={5}  
            mx="auto"
            style={{
                backgroundColor: "#7C469B",
                position: "absolute",
                bottom: 0,
                width: isMobile?"100%":"90%",
                height: isMobile?"60px":"80px",
                left: isMobile?"0%":"5%",
                borderRadius: "5px",
                padding: "1px"
            }}
        >
            <Text fw={500} size={isMobile ? "8px" : "16px"} ta="center" my="auto" mx="auto" c="#fff" style={{textTransform:"uppercase",lineHeight:"1.5", wordSpacing:"0.2em"}}>
                <span style={{fontSize: isMobile?"12px":"22px"}}>W</span>e <span style={{fontSize: isMobile?"12px":"22px"}}>p</span>rioritize the <span style={{fontSize: isMobile?"12px":"22px"}}>h</span>ealth and <span style={{fontSize: isMobile?"12px":"22px"}}>W</span>ell-<span style={{fontSize: isMobile?"12px":"22px"}}>b</span>eing of <span style={{fontSize: isMobile?"12px":"22px"}}>e</span>very <span style={{fontSize: isMobile?"12px":"22px"}}>i</span>ndividual by <span style={{fontSize: isMobile?"12px":"22px"}}>o</span>ffering a <span style={{fontSize: isMobile?"12px":"22px"}}>c</span>omprehensive <span style={{fontSize: isMobile?"12px":"22px"}}>r</span>ange of <span style={{fontSize: isMobile?"12px":"22px"}}>s</span>ervices, <span style={{fontSize: isMobile?"12px":"22px"}}>i</span>ncluding <span style={{fontSize: isMobile?"12px":"22px"}}>e</span>xcellent <span style={{fontSize: isMobile?"12px":"22px"}}>i</span>maging <span style={{fontSize: isMobile?"12px":"22px"}}>s</span>ervices.
            </Text>
            {/* <Text mt="xs" c="#fff" size={isMobile ? "12px" : "18px"} mx="auto">
                Our commitment is to provide exceptional healthcare to all, ensuring quality and convenience for our community.
            </Text> */}
        </Stack>
    </Card>
</div>



<div className="slide3" style={{ height: isMobile ? "300px" : "500px", width: "100%", margin: "0 auto", position: "relative" }}>
    <Card shadow="sm" padding="xl" style={{ height: "100%", width: "100%" }} bg="#EFF0FF">
        <Card.Section style={{ height: "100%", width: "100%", margin: "auto" }}>
            <Image
                src={slide4}
                alt="img not found"
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
            />
        </Card.Section>
    </Card>
</div>



            

            <div className="left arrow" onClick={()=>{
                const temp = slideNo-1;
                if(temp>=0){
                    setSlide(temp);

                }
                else{
                    setSlide(3);
                }
            }}> <i class="fa fa-arrow-left" aria-hidden="true"></i> </div>
            <div className="right arrow" onClick={()=>{
                const temp = slideNo+1;
                if(temp<=3){
                    
                    setSlide(temp);
                    // console.log(slideNo);
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
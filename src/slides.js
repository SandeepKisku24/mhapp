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
        <div className="slides">
            <div className="slide slide0" > <div className="innerSlide"> <img src ={slide1} alt ="img not found" /> </div> </div>
            <div className="slide1" > 
                {/* <img src={slide2}/> */}
                <Card
                shadow="sm"
                padding="xl"
                
                >
                <Card.Section>
                    <Image
                    src={slide2}
                    h={500}
                    alt="No way!"
                    />
                </Card.Section>

                <Stack gap={0} pb={5}  style={{
                    backgroundColor:"#34A853",
                    position:"absolute",
                    top:"410px",
                    width:"90%",
                    height:"80px",
                    left:"5%",
                    borderRadius:"5px",
                    // zIndex:,
                    padding:"1px"}} >
                    <Text fw={500} size={isMobile?"12px":"18px"} mt="5" mx="auto" c="#fff" >
                    We prioritize the health and well-being of every individual by offering a comprehensive range of services, including dental care. 
                    </Text>

                    <Text mt="xs" c="#fff" size={isMobile?"12px":"18px"} mx="auto" >
                    Our commitment is to provide exceptional healthcare to all, ensuring quality and convenience for our community.
                    </Text>
                </Stack>
                </Card>
            </div>
            <div className="slide2" > 
            <Card
                shadow="sm"
                padding="xl"
                
                >
                <Card.Section>
                    <Image
                    src={slide3}
                    h={550}
                    alt="No way!"
                    />
                </Card.Section>

                <Stack gap={0} pb={5}  style={{
                    backgroundColor:"#34A853",
                    position:"absolute",
                    top:"410px",
                    width:"90%",
                    left:"5%",
                    height:"80px",
                    borderRadius:"5px",
                    // zIndex:"10",
                    padding:"1px"}} >
                    <Text fw={500} size={isMobile?"12px":"18px"} mt="5" mx="auto" c="#fff" >
                    We prioritize the health and well-being of every individual by offering a comprehensive range of services, including excellent imaging services. 
                    </Text>

                    <Text mt="xs" c="#fff" size={isMobile?"12px":"18px"} mx="auto" >
                    Our commitment is to provide exceptional healthcare to all, ensuring quality and convenience for our community.
                    </Text>
                </Stack>
                </Card>
            {/* <div className="slide1Content">
            
            <div className="slide2WrittenPart">
                <div className="biggerSlide2">
                Medical <span style={{}}>Health</span> Camps 
                </div>
                <div className="smallerSlide2">
                    
                Our hospital conducts monthly free health camps, extending essential medical services to underserved communities, promoting wellness, and fostering community health empowerment through accessibility and compassion.
                </div>
                
            </div>
            <div className="slide2Image">
            <img src ={slide3} alt ="img not found" />  
            </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,192L80,176C160,160,320,128,480,149.3C640,171,800,245,960,261.3C1120,277,1280,235,1360,213.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
            </div>
            <div className="slide3" >

            <Card
                shadow="sm"
                padding="xl"
                
                >
                <Card.Section>
                    <Image
                    src={slide4}
                    h={500}
                    alt="img not found"
                    />
                </Card.Section>

                
                </Card>
            {/* <div className="slide1Content">
            
            <div className="slide2WrittenPart">
                <div className="biggerSlide3">
                Mercy hospital Poreyahat 
                </div>
                <div className="smallerSlide3">
                    
                Our hospital excels with top-tier medical expertise, advanced facilities, and compassionate care, earning recognition as a leading healthcare provider in the region.
                </div>
                
            </div>
            <div className="slide2Image">
            <img src ={slide4} alt ="img not found" />  
            </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d0bb68" fill-opacity="1" d="M0,160L480,224L960,256L1440,160L1440,320L960,320L480,320L0,320Z"></path></svg> */}
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
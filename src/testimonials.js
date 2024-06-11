import React, { useState,useEffect } from "react";
import { Group, Image, Stack, Text, Title, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import "./testimonials.css";
import classes from './testimonials.css';

import { events } from "./testdata";
import { mobile } from "./screenSizes";
import { useMediaQuery } from "@mantine/hooks";

const Testimonials = ()=>{
    const [review,setReview] = useState(0);
    const [move,setMove] = useState(0);

    const isMobile = useMediaQuery(mobile);

    return(

        <Group maw={isMobile?"95%":"100%"} justify="center" mx="auto" bg="#F7FEE2" style={{borderRadius:"0px"}}>
            <Title pt={10} ta="center" >"Discover heartfelt stories from our patients and their families."</Title>
            <Carousel withIndicators height={isMobile?"450":"400"} classNames={classes} w="100%">
            {
            events.map((event, index) => (
                <Carousel.Slide key={index}>
                 <Stack my={isMobile ? "20px" : "40px"} gap={5}>
                      <Image src={event.src} alt="image" h={120} w={120} radius="50%" mx="auto" style={{ zIndex: "3", border: "2px      solid #4285F4" }} />
                      <Stack bg="#fff" maw={isMobile ? "90%" : "60%"} mx="auto" style={{ borderRadius: "10px",      marginTop: "-40px",  display: "flex", flexDirection: "column", alignItems: "stretch" }}>
                     <Text w={isMobile ? "90%" : "80%"} mx="auto" ta="justify" pt={40} fw={550} style={{        fontFamily: "garamond" }}>
                          <span style={{ fontSize: "20px" }}>"</span> {event.event} <span style={{ fontSize: "20px" }}      >"</span>
                        </Text>
                        <Text mx="auto" fw="bold" my={5} size="19px" style={{ fontFamily: "garamond" }}>- {event.name}      </Text>
                      </Stack>
                    </Stack>
                </Carousel.Slide>
                ))
            }
            
      
    </Carousel>
        </Group>
    
    )
}

export default Testimonials;


    // useEffect(() => {
    //     //Implementing the setInterval method
    //     if(move!==1){
    //         const interval = setInterval(() => {
    //             var temp = review;
    //             if(temp <= -400){
    //             temp = 0;
    //             }
    //             else
    //             temp  = review-100;
    //             setReview(temp);
        
    //             document.querySelector(".testimonialInner").style.marginLeft = `${temp}%`;
    
    //         }, 3000);
     
    //         //Clearing the interval
    //         return () => clearInterval(interval);
    //     }
    // }, [review,move]);

    // const handleLeftClick = ()=>{
    //     var temp = review;
    //     if(temp === 0){
    //         temp = -400;
    //     }
    //     else
    //     temp  = review+100;
    //     setReview(temp);
    //     document.querySelector(".testimonialInner").style.marginLeft = `${temp}%`;
    // }
    // const handleRightClick = ()=>{
    //     var temp = review;
    //     if(temp === -400){
    //         temp = 0;
    //     }
    //     else
    //     temp  = review-100;
    //     setReview(temp);
    
    //     document.querySelector(".testimonialInner").style.marginLeft = `${temp}%`;
    // }

        // <div className="testimonial">
        //     <div className="headingTest">Testimonials</div>
        //     <div className="testimonialInner" >
        //         {events.map(({event,name,id})=>{
        //             return(
        //                 <div className="review"  onMouseOver={()=>{
        //                     setMove(1);
        //                     console.log(move);
        //                 }} onMouseOut={()=>{
        //                     setMove(0);
        //                     console.log(move +" ok ");
        //                 }}>
        //                     <div className="reviewContent" >
        //                     <p> {event}
        //                     </p>
        //                     <b>
        //                         - {name}
        //                     </b>
        //                     </div>
        //                 </div>
        //             )
        //         })}
    
        //     </div>
        //     <ReadMore linkTo={"/service/xray"} />
        //     <div className="leftReview" onClick={handleLeftClick}><i class="fa fa-arrow-left" aria-hidden="true"></i></div>
        //     <div className="rightReview" onClick={handleRightClick}><i class="fa fa-arrow-right" aria-hidden="true"></i></div>
        // </div>
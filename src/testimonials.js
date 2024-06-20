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

        <Group maw={isMobile?"95%":"100%"} justify="center" mx="auto" bg="#EFF0FF" style={{borderRadius:"0px"}}>
            <Title pt={10} ta="center" size={isMobile?"18px":"35px"} >"Discover heartfelt stories from our patients and their families."</Title>
            <Carousel 
                withIndicators
                height={isMobile?"600":"550"} classNames={classes} w={isMobile?"100%":"80%"}
                slideSize={isMobile?{ base: '100%', sm: '90%', md: '100%' }:{ base: '100%', sm: '80%', md: '33.3%' }}
                slideGap={{ base: 0, sm: '' }}
                loop
                align={isMobile?"center":"start"}
                style={{width:"100%",margin:"auto"}}
            >
            {
            events.map((event, index) => (
                <Carousel.Slide key={index}>
                 <Stack my={isMobile ? "20px" : "40px"} gap={5}>
                      <Image src={event.src} alt="image" h={isMobile?"120px":"100px"} w={isMobile?"120px":"100px"} radius="50%" mx={isMobile?"auto":"auto"} style={{ zIndex: "3", border: "2px      solid #4285F4" }} />
                      <Stack bg="#fff" maw={isMobile ? "85%" : "90%"} mx="auto" style={{ borderRadius: "10px",      marginTop: "-40px",  display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent:"space-between" }} h={isMobile?"450":"420"}>
                        
                        <Text w={isMobile ? "95%" : "90%"} my="auto" mx="auto" ta="justify" pt={40} fw={400} style={{        fontFamily: "garamond" }}>
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
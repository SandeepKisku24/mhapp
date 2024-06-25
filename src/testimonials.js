import React, { useState,useEffect } from "react";
import { Group, Image, Stack, Text, Title, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import "./testimonials.css";
import classes from './testimonials.css';
import quote from "./gallery/pictures/quote.svg"

import { events } from "./testdata";
import { mobile } from "./screenSizes";
import { useMediaQuery } from "@mantine/hooks";

const Testimonials = ()=>{
    const [review,setReview] = useState(0);
    const [move,setMove] = useState(0);

    const [see, setSee] = useState(-1);

    const isMobile = useMediaQuery(mobile);

    return(

        <Group maw={isMobile?"95%":"100%"} justify="center" mx="auto" bg="#EFF0FF" style={{borderRadius:"0px"}}>
            <Text pt={10} ta="center" size={isMobile?"18px":"35px"} className="headingsall" >"Discover heartfelt stories from our patients and their families."</Text>
            <Carousel 
                withIndicators
                height={isMobile?(see===-1 ? 400 : 550):"550"} classNames={classes} w={isMobile?"100%":"80%"}
                slideSize={isMobile?{ base: '100%', sm: '90%', md: '100%' }:{ base: '100%', sm: '80%', md: '33.3%' }}
                slideGap={{ base: 0, sm: '' }}
                loop
                align={isMobile?"center":"start"}
                style={{width:"100%",margin:"auto"}}
            >
            {
            events.map((event, index) => (
                <Carousel.Slide key={index}>
                 <Stack my={isMobile ? "10px" : "10px"} gap={0} style={{fontFamily:"garamond"}} onMouseLeave={()=>{
                    setSee(-1);
                 }}>

                        

                      <Stack bg="#fff" maw={isMobile ? "85%" : "90%"} mx="auto" style={{ borderRadius: "10px",      marginTop: "20px",  display: "flex", flexDirection: "column", alignItems: "", justifyContent:"" }} h ={isMobile ? (index === see ? 450 : 350) : (index === see ? 400 : 350) }gap={0}>
                        <Image src={quote} h={30} w={30} ml={isMobile?"20":"10"} mt={isMobile?"30":"10"}/>
                        <Text w={isMobile ? "95%" : "90%"} my="20" mx="auto"  ta="justify" pt={isMobile?"":"0"} fw={400} style={{ fontSize: isMobile?"16px":"16px" }} lineClamp={see!==index?6:30}>
                           <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span> {event.event} <span style={{ fontSize: "20px" }}      >"</span>
                        </Text>
                        {see!==index?
                            <Group pb={10} gap={2} >
                            <Image
                               src={event.src}
                               alt="image"
                               h={isMobile ? "60px" : "80px"}
                               w={isMobile ? "60px" : "80px"}
                               radius="50%"
                               mx={isMobile ? "auto" : "10px"}  
                               style={{ zIndex: "3" }}
                            />
                            <Text
                             mx={isMobile ? "auto" : "10px"}  
                             fw="500"
                             my={0}  
                             size="19px"
                             style={{ fontFamily: "garamond" }}
                            >
                             {event.name}
                            </Text>
                        </Group>
                        :<></>}

                        <Text onClick={()=>{
                            if(see===-1){
                                setSee(index);
                            }
                            else{
                                setSee(-1);
                            }
                        }}  ta="right" ml="40%" c="#4285F4" pr={10} style={{cursor:"pointer",width:"50%", float:"right"}}> Read {see===index?<span>Less</span>:<span>More</span>} &gt; &gt; &gt;  </Text>
                        
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
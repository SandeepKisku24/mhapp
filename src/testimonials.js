import React, { useState,useEffect } from "react";
import { Group, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import "./testimonials.css";
import { events } from "./eventsdata";
import ReadMore from "./readMore";
import { mobile } from "./screenSizes";
import { useMediaQuery } from "@mantine/hooks";

const Testimonials = ()=>{
    const [review,setReview] = useState(0);
    const [move,setMove] = useState(0);

    const isMobile = useMediaQuery(mobile);


    
    
    return(

        <Group className="testimonial" maw={isMobile?"95%":"50%"} >
            <div className="headingTest" justify="center">Testimonials</div>
            <Carousel
                nextControlIcon={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
                previousControlIcon={<IconArrowLeft style={{ width: rem(16), height: rem(16) }} />}
                >
                 

                    {
                    events.map(({event,name,id})=>{
                        return(
                                <Carousel.Slide>
                                    <div className="reviewContent" >
                                        <p> {event}
                                        </p>
                                        <b>
                                            - {name}
                                        </b>
                                        </div>
                                </Carousel.Slide>
                        )
                    })}

                
            {/* <ReadMore linkTo={"/service/xray"} /> */}
                
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
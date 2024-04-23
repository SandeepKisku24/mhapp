import React, { useState,useEffect } from "react";
import "./testimonials.css"
const Testimonials = ()=>{
    const [review,setReview] = useState(0);
    const [move,setMove] = useState(0);

    useEffect(() => {
        //Implementing the setInterval method
        if(move!==1){
            const interval = setInterval(() => {
                var temp = review;
                if(temp <= -400){
                temp = 0;
                }
                else
                temp  = review-100;
                setReview(temp);
        
                document.querySelector(".testimonialInner").style.marginLeft = `${temp}%`;
    
            }, 3000);
     
            //Clearing the interval
            return () => clearInterval(interval);
        }
    }, [review,move]);

    const handleLeftClick = ()=>{
        var temp = review;
        if(temp === 0){
            temp = -400;
        }
        else
        temp  = review+100;
        setReview(temp);
        document.querySelector(".testimonialInner").style.marginLeft = `${temp}%`;
    }
    const handleRightClick = ()=>{
        var temp = review;
        if(temp === -400){
            temp = 0;
        }
        else
        temp  = review-100;
        setReview(temp);
    
        document.querySelector(".testimonialInner").style.marginLeft = `${temp}%`;
    }

    const events = [{event:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati asperiores natus dolor minima earum nihil necessitatibus maiores animi, ipsam illo error eius consequatur laudantium vero debitis nisi ratione ut omnis?",name: "Don Marris",id: "01"},
    {event:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati asperiores natus dolor minima earum nihil necessitatibus maiores animi, ipsam illo error eius consequatur laudantium vero debitis nisi ratione ut omnis?", name:"Robert",id:"02"},
    {event:"ores natus dolor minima earum nihil necessitatibus maiores animi, ipsam illo error eius consequatur laudantium vero debitis nisi ratione ut omnis?", name:"Bob",id:"03"},
    {event:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati asperiores natus dolor minima earum nihil n debitis nisi ratione ut omnis?", name:"Alice",id:"04"},
    {event:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcas?", name:"John",id:"05"},
];
    
    return(
        <div className="testimonial">
            <div className="headingTest">Testimonials</div>
            <div className="testimonialInner" >
                {events.map(({event,name,id})=>{
                    return(
                        <div className="review"  onMouseOver={()=>{
                            setMove(1);
                            console.log(move);
                        }} onMouseOut={()=>{
                            setMove(0);
                            console.log(move +" ok ");
                        }}>
                            <div className="reviewContent" >
                            <p> {event}
                            </p>
                            <b>
                                {name}
                            </b>
                            </div>
                        </div>
                    )
                })}
    
            </div>
            <div className="leftReview" onClick={handleLeftClick}><i class="fa fa-arrow-left" aria-hidden="true"></i></div>
            <div className="rightReview" onClick={handleRightClick}><i class="fa fa-arrow-right" aria-hidden="true"></i></div>
        </div>
    )
}

export default Testimonials;
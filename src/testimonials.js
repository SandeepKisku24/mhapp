import React, { useState,useEffect } from "react";
import "./testimonials.css";
import ReadMore from "./readMore";
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

    const events = [{event:"I  was in a very debilitated condition and  had fever for 5 consecutive days. I was diagnosed with typhoid after a blood check up at the hospital. Here in mercy hospital all Staff took good care of me all  these days and gave me  all good food and medicines. With all these , I regained my  health. My father was very happy and took me  to home.All thanks to mercy hospital family.",name: "Anshi Hansda",id: "01"},
    {event:"I endured a challenging ordeal upon my  return. I  spent a total of five days in the Intensive care unit (ICU). My  condition was exceedingly critical. However, with the aid of continued medical care, I eventually made a remarkable recovery. Naturally, my parents were overjoyed to be reunited with me", name:"Veronica Soren ",id:"02"},
    {event:"My one year old  child  named Parameshwar Marandi was admitted to Mercy Hospital . He was in critical condition due to malaria, typhoid and pneumonia. Then he got good care & treatment in this  hospital and came back to life. And we were very thankful to all Mercy Hospital staff for their dedicated support.", name:"Manuel Marandi ",id:"03"},
    {event:"My father Uday Narayan Sinha a 73 years old man, was admitted to the hospital in a critical condition due to one-sided weakness. After undergoing 9 days of treatment, he regained his ability to speak and move his arms. All our family member possessed deep care and affection for our father, as I witnessed their continuous presence and support through out his hospitalization. Upon his discharge, I along with my entire family expressed gratitude to the medical staff for their unfailing consistent support.", name:"Rajesh Ranjan",id:"04"},
    {event:" I came here in Mercy Hospital  on June 1st for the treatment. Doctors are really humble and ready to resolve all doubts. All staff are very polite and cooperative. The Hospital atmosphere is very fresh,clean and positive. Hospital is very well organized all the patient are being treated with utmost love ,care, dignity and respect. I wish my love and prayer for Mercy Hospital Prosperity on the road to be a  blessing for multitude.", name:"FR. VARGHESE ",id:"05"},
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
                                - {name}
                            </b>
                            </div>
                        </div>
                    )
                })}
    
            </div>
            <ReadMore linkTo={"/service/xray"} />
            <div className="leftReview" onClick={handleLeftClick}><i class="fa fa-arrow-left" aria-hidden="true"></i></div>
            <div className="rightReview" onClick={handleRightClick}><i class="fa fa-arrow-right" aria-hidden="true"></i></div>
        </div>
    )
}

export default Testimonials;
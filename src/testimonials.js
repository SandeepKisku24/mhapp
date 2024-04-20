import React, { useState } from "react";
import "./testimonials.css"
const Testimonials = ()=>{
    const [review,setReview] = useState(0);

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
    return(
        <div className="testimonial">
            <div className="headingTest">Testimonials</div>
            <div className="testimonialInner">
                <div className="review">
                    <div className="reviewContent">
                    <p>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati asperiores natus dolor minima earum nihil necessitatibus maiores animi, ipsam illo error eius consequatur laudantium vero debitis nisi ratione ut omnis?
                    </p>
                    <b>
                        Don Marris
                    </b>
                    </div>
                </div>
                <div className="review">
                <div className="reviewContent">
                    <p>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati asperiores natus dolor minima earum nihil necessitatibus maiores animi, ipsam illo error eius consequatur laudantium vero debitis nisi ratione ut omnis?
                    </p>
                    <b>
                        Robert
                    </b>
                    </div>
                </div>
                <div className="review">
                <div className="reviewContent">
                    <p> ores natus dolor minima earum nihil necessitatibus maiores animi, ipsam illo error eius consequatur laudantium vero debitis nisi ratione ut omnis?
                    </p>
                    <b>
                        Bob
                    </b>
                    </div>
                </div>
                <div className="review">
                <div className="reviewContent">
                    <p>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati asperiores natus dolor minima earum nihil n debitis nisi ratione ut omnis?
                    </p>
                    <b>
                        Alice
                    </b>
                    </div>
                </div>
                <div className="review">
                <div className="reviewContent">
                    <p>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcas?
                    </p>
                    <b>
                        John 
                    </b>
                    </div>
                </div>
            </div>
            <div className="leftReview" onClick={handleLeftClick}><i class="fa fa-arrow-left" aria-hidden="true"></i></div>
            <div className="rightReview" onClick={handleRightClick}><i class="fa fa-arrow-right" aria-hidden="true"></i></div>
        </div>
    )
}

export default Testimonials;
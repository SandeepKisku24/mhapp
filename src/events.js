import React, { useState } from "react";
import "./events.css"
import event1 from "./gallery/Newsletters/24 - 01 January News.jpg";
import event2 from "./gallery/Newsletters/23 - 09 December News.jpg";
import event3 from "./gallery/Newsletters/23 - 08 November News.jpg";
import event4 from "./gallery/Newsletters/23 - 07 October News.jpg";
import event5 from "./gallery/Newsletters/23 - 06 September News.jpg";
import event6 from "./gallery/Newsletters/23 - 05 August News.jpg";
const Event = ()=>{

    const[point,setPoint] =  useState(1);
    const handleTwoClick =()=>{
        document.querySelector(".newsletters").style.marginLeft = "-50%";
        document.querySelector(".one").style.backgroundColor = "#fff";
        document.querySelector(".two").style.backgroundColor = "#d0bb68";
        document.querySelector(".one").style.height = "15px";
        document.querySelector(".one").style.width = "15px";
        document.querySelector(".two").style.height = "10px";
        document.querySelector(".two").style.width = "10px";
    }
    const handleOneClick =()=>{
        document.querySelector(".newsletters").style.marginLeft = "0%";
        document.querySelector(".two").style.backgroundColor = "#fff";
        document.querySelector(".one").style.backgroundColor = "#d0bb68";
        document.querySelector(".two").style.height = "15px";
        document.querySelector(".two").style.width = "15px";
        document.querySelector(".one").style.height = "10px";
        document.querySelector(".one").style.width = "10px";
    }


    return(
        <div className="events"> 
            <div className="headingEvents">
                Monthly Events
            </div>
            <br/>


            {/* the slide */}
            <div className="outerEvents">
            <div className="newsletters">
                <div className="newsletterBox">
                    <div className="eventImage">
                        <div className="innerEventImage">
                            <img src={event1} alt="img not found"/>
                        </div>
                    </div>
                    <div className="newsDate">January 2024</div>
                </div>
                <div className="newsletterBox">
                    <div className="eventImage">
                        <div className="innerEventImage">
                            <img src={event2} alt="img not found"/>
                        </div>
                    </div>
                    <div className="newsDate">December 2023</div>
                </div>
                <div className="newsletterBox">
                    <div className="eventImage">
                        <div className="innerEventImage">
                            <img src={event3} alt="img not found"/>
                        </div>
                    </div>
                    <div className="newsDate">November 2023</div>
                </div>
                <div className="newsletterBox">
                    <div className="eventImage">
                        <div className="innerEventImage">
                            <img src={event4} alt="img not found"/>
                        </div>
                    </div>
                    <div className="newsDate">October 2023</div>
                </div>
                <div className="newsletterBox">
                    <div className="eventImage">
                        <div className="innerEventImage">
                            <img src={event5} alt="img not found"/>
                        </div>
                    </div>
                    <div className="newsDate">September 2023</div>
                </div>
                <div className="newsletterBox">
                    <div className="eventImage">
                        <div className="innerEventImage">
                            <img src={event6} alt="img not found"/>
                        </div>
                    </div>
                    <div className="newsDate">August 2023</div>
                </div>

            </div>
            </div>
            {/* end of tjhe slide  */}

            <div className="eventControl">
                <div className="point one " onClick={handleOneClick}></div>
                <div className="point two" onClick={handleTwoClick}></div>
            </div>
          
        </div>
    )
}
export default Event;
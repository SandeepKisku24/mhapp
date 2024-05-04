import React from "react";
import "./visitor.css"
const Visitor =()=>{
    return(
        <div className="Visitor">
        <div className="visitorHeading">
            Visitor information and OPD Holidays
        </div>
        <div className="visitorInfoContent">
            <div>
            <b>Make sure you're visiting during visiting hours and respect visiting hours and mealtimes. Kids below 14 years should not be encouraged for hospital visits</b>

            </div>
            <br/>
            <div className="visitTopic"> Visitor Hours</div>
            <br/>
            <li> 8 AM to 6 PM</li>
            <br/>
            <div className="visitTopic"> OPD Holidays</div>
            <br/>
            <li> Sundays</li>
            <br/>
            <div className="visitTopic"> IPD Information</div>
            <br/>
            <li>Type of room- General ward (AC, Non AC), Private room (AC, Non AC)</li>
            <li>No of beds available - 50 Beds</li>
            <li>Facilities provided - Purified Water, Ramps, Ambulance, 24 x 7 care </li>
        </div>
        </div>
    )
}

export default Visitor ;
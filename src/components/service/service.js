import React from "react";
import { Link } from "react-router-dom";    
import "../overview.css"
const Service = ()=>{
    return(
        <div className="Overview">
            <div className="overviewList">
                        <div className="overBlock"> 
                        <Link to = "/service/lab"> Laboratory/Pathology</Link>
                        </div>
                        <div className="overBlock"> 
                        <Link to = "/service/xray"> X-Ray</Link>

                        </div>
                        <div className="overBlock"> 
                        <Link to = "/service/ecg"> ECG</Link>
                        </div>
                        <div className="overBlock"> 
                        <Link to = "/info/campaigns">Community Outreach Services</Link>

                        </div>
                        <div className="overBlock"> 
                        <Link to = "/service/ambulance"> Ambulance</Link>

                        </div>
                        <div className="overBlock"> 
                        <Link to = "doctor/dtpriti"> Dietary Services</Link>

                        </div>
                        <div className="overBlock"> 
                        <Link to = "/service/pastoral"> Pastoral Care</Link>

                        </div>
            </div>
        </div>
    )
}

export default Service;
import React from "react";
import { Link } from "react-router-dom";    
import "./overview.css"
const Overview = ()=>{
    return(
        <div className="Overview">
            <div className="overviewList">
                        <div className="overBlock"> 
                        <Link to = "/aboutUs"> About Us</Link>
                        </div>
                        <div className="overBlock"> 
                        <Link to = "/vision"> Vision and Mission</Link>

                        </div>
                        <div className="overBlock"> 
                        <Link to = "/director"> Directors's Message</Link>
                        </div>
                        <div className="overBlock"> 
                        <Link to = "/management"> Management</Link>

                        </div>
                        <div className="overBlock"> 
                        <Link to = "/gall"> Gallery</Link>

                        </div>
            </div>
        </div>
    )
}

export default Overview;
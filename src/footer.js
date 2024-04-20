import React from "react";
import Enquiry from "./enquiry";
import FooterCU from "./rightContactUs";
import "./footer.css"
const footer =()=>{
    return(
        <div className="foterOuter">
        
            <div className="footer1">
            <div className="headingFooterContact">
                Contact Us
            </div>
            <div className="footer">
            <Enquiry/>
            <FooterCU/>
            </div>
            </div>
        <div className="bottomBar">
        © 2024 Mercy Hospital all rights reserved | Designed by 
        </div>
        </div>
    )
}

export default footer;
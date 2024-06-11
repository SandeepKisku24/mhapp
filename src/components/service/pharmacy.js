import React from "react";
import "../departments/departmentsAll.css"
import Service from "./service";
import { useMediaQuery } from "@mantine/hooks";
import { mobile } from "../../screenSizes";

const Pharmacy =()=>{
    const isMobile = useMediaQuery(mobile);
    return(
        <div className="departmentType">
            <div className="deptNameHeading">Pharmacy </div>
            <div className="DeptDivision">

            <div className="deptContent" style={{width: isMobile?"90%":"70%"}}>
               
               <br/>
               <div>
               In our hospital, the pharmacy is more than just a dispensary of medications; it is a vital hub of patient care, where expertise, efficiency, and empathy converge to ensure optimal health outcomes for every individual we serve.                </div>
               <br/>
               <div>
               In our hospital, the pharmacy is a cornerstone of patient safety and quality care, where every prescription is filled with attention to detail and every interaction is infused with compassion and expertise. We are committed to empowering patients to take control of their health through informed medication decisions, and we stand ready to support them every step of the way.                </div>
               </div>
               {isMobile?<></>:<Service/>}

            </div>
        </div>
        
    )
}

export default Pharmacy;
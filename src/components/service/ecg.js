import React from "react";
import "../departments/departmentsAll.css"
import Service from "./service";
import { useMediaQuery } from "@mantine/hooks";
import { mobile } from "../../screenSizes";

const ECG =()=>{
    const isMobile = useMediaQuery(mobile);
    return(
        <div className="departmentType">
            <div className="deptNameHeading"> Electro-Cardiogram  (ECG) Service</div>
            <div className="DeptDivision">
            <div className="deptContent" style={{width: isMobile?"90%":"70%"}}>
               
                
               <div>
               An electrocardiogram (ECG) is a simple, non-invasive test that records the electrical activity of the heart. An ECG can help diagnose certain heart conditions, including abnormal heart rhythms and coronary heart disease (heart attack and angina).
               </div>
           </div>
           {isMobile?<></>:<Service/>}
            
        </div>
        
        </div>
    )
}

export default ECG;
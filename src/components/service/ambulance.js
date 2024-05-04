import React from "react";
import "../departments/departmentsAll.css"
import Service from "./service";
const Ambulance =()=>{
    return(
        <div className="departmentType">
            <div className="deptNameHeading"> Ambulance Service</div>
            <div className="DeptDivision">
            <div className="deptContent">
               
               <div>
               At Mercy Hospital, our ambulance service stands as a cornerstone of emergency response, epitomizing precision, compassion, and unwavering professionalism. Equipped with cutting-edge technology and staffed by highly trained medical personnel, our fleet ensures rapid and efficient transportation to those in need. Beyond mere conveyance, we provide a continuum of care, delivering life-saving interventions en route to our facilities. Our commitment to excellence is unwavering, ensuring that every patient receives the highest standard of emergency medical care, regardless of circumstance.                
               </div>
            </div>
            <Service/>
            </div>
        </div>
    )
}

export default Ambulance ;
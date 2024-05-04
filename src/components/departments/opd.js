import React from "react";
import "./departmentsAll.css"
import Department from "./department";
const OPD=()=>{
    return(
        <div className="departmentType">
        <div className="deptNameHeading"> Out Patient Department (OPD) </div>
        <div className="DeptDivision">
        <div className="deptContent">
            
            <div>
    
            With skilled healthcare professionals and advanced medical technology, these services save lives by stabilizing patients and initiating necessary treatment swiftly. In times of urgent need, hospital emergency services offer reassurance and rapid intervention, ensuring that individuals receive the critical care they require to recover and thrive. 
            </div>
            <div>
            Emergency ICU operation theatres are pivotal in providing life-saving care to critically ill patients requiring urgent surgical interventions. These specialized facilities are equipped with advanced medical equipment, highly trained medical staff, and stringent protocols to address complex medical emergencies swiftly and effectively.             
            </div>
            </div>

            <Department/>
        </div>
    </div>
    )
}

export default OPD;
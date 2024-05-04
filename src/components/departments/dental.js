import React from "react";
import Department from "./department";

const Dental=()=>{
    return(
        <div className="departmentType">
            <div className="deptNameHeading">Dental Department </div>
            <div className="DeptDivision">
            
            <div className="deptContent">
                <div className="deptDocName">
                    Doctor's Name :  Dr. Rebin Renny (Dental Surgeon) 
                </div>
                <br/>
                <div className="timimgDoctor">
                    Timing : 24 X 7 (All week days and weekends)
                </div>
                <br/>
                <div>Service Provided :</div>
                <div>
                Dental Implant, Dental Bridge, Root Canal Treatment, Dental X-Ray 
                Dental Scaling, Tooth Coloured Filling, Dental Crown, Tooth Whitening 
                Cosmetic Dentistry, Ortho Braces, Dental Extractions, Pediatric Dentistry
                </div>
            </div>

            <Department/>

            </div>
        </div>
    )
}

export default Dental;
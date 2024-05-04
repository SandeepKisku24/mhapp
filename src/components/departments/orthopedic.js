import React from "react";
import "./departmentsAll.css"
import Department from "./department";
const Orthopedic=()=>{
    return(
        <div className="departmentType">
            <div className="deptNameHeading">Orthopedic Department </div>
            <div className="DeptDivision">
            <div className="deptContent">
                <div className="deptDocName">
                    Doctor's Name :  Dr. Arun Tudu 
                </div>
                <br/>
                <div className="timimgDoctor">
                    Timing : 9 AM to 5 PM -  Tuesday, Thursday, Saturday 
                </div>
                <br/>
                <div>
                Orthopedic services encompass a wide range of medical care focused on diagnosing, treating, and managing conditions related to the musculoskeletal system. This system includes bones, joints, muscles, ligaments, tendons, and nerves. Orthopedic services are vital for addressing various orthopedic issues.
                </div>
            </div>

            <Department/>
            </div>
        </div>
    )
}

export default Orthopedic;
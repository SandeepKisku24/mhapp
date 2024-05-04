import React from "react";
import "../departments/departmentsAll.css"
import Department from "../departments/department";
const DrTara=()=>{
    return(
        <div className="departmentType">
        <div className="deptNameHeading">Surgery Department </div>
        <div className="DeptDivision">
        <div className="deptContent">
            <div className="deptDocName">
                Doctor's Name :   Dr. Tara Sankar    
            </div>
            <br/>
            <div className="timimgDoctor">
            Timing : On Call
            </div>
            <br/>
    
            <div>
            With a wealth of experience and skill honed through years of practice, our On-Call Surgeon is equipped to address a diverse range of surgical needs, from emergency procedures to critical interventions. Whether it's a sudden trauma, an acute illness, or a surgical complication, their steady hand and quick decision-making instill confidence in patients and colleagues alike.
            </div>
            <br/>
            <div>
            Beyond their technical proficiency, our On-Call Surgeon embodies compassion and empathy, understanding the anxiety and vulnerability that often accompany surgical situations. They approach each case with sensitivity, providing not just surgical expertise, but also emotional support and reassurance to patients and their families.            </div>
        </div>

        <Department/>
        </div>
    </div>
    )
}

export default DrTara;
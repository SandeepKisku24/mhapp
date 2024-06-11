import React from "react";
import "../departments/departmentsAll.css"
import Department from "../departments/department";
import { useMediaQuery } from "@mantine/hooks";
import { mobile } from "../../screenSizes";
const DrTara=()=>{
    const isMobile = useMediaQuery(mobile);
    return(
        <div className="departmentType">
        <div className="deptNameHeading">Surgery Department </div>
        <div className="DeptDivision">
        <div className="deptContent" style={{width: isMobile?"90%":"70%"}}>
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

        {isMobile?<></>:<Department/>}
        </div>
    </div>
    )
}

export default DrTara;
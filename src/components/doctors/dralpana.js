import React from "react";
import "../departments/departmentsAll.css"
import Department from "../departments/department";
const DrAlpana=()=>{
    return(
        <div className="departmentType">
        <div className="deptNameHeading">Physician </div>
        
        <div className="DeptDivision">
        <div className="deptContent">
            <div className="deptDocName">
                Doctor's Name : Dr. Alpana Soren 
    
            </div>
            <br/>
            <div className="timimgDoctor">
            Timing : 24 X 7 (All week days and weekends)

            </div>
            <br/>
    
            <div>
            Our physicians are more than just medical professionals; they are trusted partners in the journey towards wellness. Through attentive listening, thorough examination, and evidence-based treatment, they strive to understand each patient's unique needs and concerns, crafting personalized care plans that prioritize both physical and emotional healing.            </div>
            <br/>
            <div>
            Beyond their clinical acumen, our physicians embody empathy and compassion, providing comfort and reassurance to patients and their families during times of illness and uncertainty. They serve not only as healers but also as educators, empowering patients with knowledge and tools to take control of their health and make informed decisions.           </div>
        </div>

        <Department/>
        </div>

    </div>
    )
}

export default DrAlpana;
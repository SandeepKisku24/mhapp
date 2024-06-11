import React from "react";
import Department from "./department";
import { useMediaQuery } from "@mantine/hooks";
import { mobile } from "../../screenSizes";

const GeneralMed=()=>{
    const isMobile = useMediaQuery(mobile);
    return(
        <div className="departmentType">
            <div className="deptNameHeading">General Medicine Department </div>
            <div className="DeptDivision">

            <div className="deptContent" style={{width: isMobile?"90%":"70%"}} >
                <div className="deptDocName">
                    Doctor's Name :  Dr. Betsy Francis
                </div>
                <br/>
                <div className="timimgDoctor">
                Timing : 24 X 7 (All week days and weekends)
                </div>
                <br/>
                <div>
                In Mercy Hospital, the General Medicine Department stands as the cornerstone of adult healthcare, offering comprehensive services in diagnosis, treatment, and prevention of a wide array of diseases. Commonly referred to as internal medicine, our team of dedicated physicians specializes in addressing the unique medical needs of adults.
                </div>
                <br/>
                <div>
                Operating round the clock, throughout the week, including weekends, our department ensures that patients receive timely and continuous care. Whether it's managing chronic conditions, diagnosing complex illnesses, or providing preventive screenings, we prioritize the well-being of every individual who walks through our doors.
                </div>
                <br/>
                <div>
                Backed by years of experience and a commitment to excellence, our physicians employ the latest medical advancements and techniques to deliver the highest standard of care. In our General Medicine Department, patients find not just treatment, but also compassionate support and guidance on their journey towards better health.
                </div>
            </div>

            {isMobile?<></>:<Department/>}

            </div>
        </div>
    )
}

export default GeneralMed;
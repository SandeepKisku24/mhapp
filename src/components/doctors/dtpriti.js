import React from "react";
import "../departments/departmentsAll.css"
import Department from "../departments/department";
import { useMediaQuery } from "@mantine/hooks";
import { mobile } from "../../screenSizes";
const DtPriti=()=>{
    const isMobile = useMediaQuery(mobile);
    return(
        <div className="departmentType">
        <div className="deptNameHeading">Dietetic Department </div>
        <div className="DeptDivision">

        <div className="deptContent" style={{width: isMobile?"90%":"70%"}}>
            <div className="deptDocName">
                Doctor's Name :  Dt. Priti Soren   
            </div>
            <br/>
            <div className="timimgDoctor">
            Timing : 24 X 7 (All week days and weekends)
            </div>
            <br/>
            <div>
            In our hospital, the Dietetic Department stands as a beacon of health and nutrition, tirelessly working round the clock to ensure that every patient receives personalized dietary care. With our doors open 24/7, we are committed to providing continuous support and guidance in the journey towards optimal nutrition and wellness.
            </div>
            <br/>
            <div>
            Our department offers comprehensive services tailored to meet the diverse needs of individuals. Whether it's managing chronic conditions, facilitating weight management, or addressing specific dietary concerns, we provide evidence-based recommendations and practical solutions to promote healthy living.
            </div>
            <br/>
            <div>
            In our Dietetic Department, every consultation is a collaborative journey towards better health, guided by compassion, expertise, and a steadfast commitment to promoting wellness around the clock.
            </div>
            <br/>
            <div>
                We also have Food Court in our campus that provides healthy food to the patients and ensures good nutrition is provided to all.
            </div>
        </div>

        {isMobile?<></>:<Department/>}

        </div>
    </div>
    )
}

export default DtPriti;
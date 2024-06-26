import React from "react";
import "./departmentsAll.css"
import Department from "./department";
import { useMediaQuery } from "@mantine/hooks";
import { mobile } from "../../screenSizes";
import { Group, Text } from "@mantine/core";
const FamilyMed=()=>{
    const isMobile = useMediaQuery(mobile);
    return(
        <div className="departmentType">
        <Group className="deptNameHeading" w="100%"  >
                <Text mx={isMobile?"auto":"5%"} fz={isMobile?"16px":"24px"}>Family Medicine Department</Text>
        </Group>
        <div className="DeptDivision">

        <div className="deptContent" style={{width: isMobile?"90%":"70%"}} >
            <div className="deptDocName">
                Doctor's Name :  Dr. Shetty Jose
            </div>
            <br/>
            <div className="timimgDoctor">
            Timing : 24 X 7 (All week days and weekends)
            </div>
            <br/>
            <div>
                In Mercy Hospital, Family medicine physicians, the stalwarts of our department, possess a unique skill set honed to address a broad spectrum of medical conditions across the lifespan. From the tender care of infancy to the seasoned wisdom of old age, our physicians provide comprehensive and personalized medical attention.
            </div>
            <br/>
            <div>
            With our doors open 24/7, including weekdays and weekends, accessibility and continuity of care are our guiding principles. Whether it's a routine check-up, management of chronic conditions, or urgent medical concerns, our dedicated team stands ready to serve with expertise and empathy.
            </div>
        </div>

        <Department/>

        </div>
    </div>
    )
}

export default FamilyMed;
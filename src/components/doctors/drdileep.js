import React from "react";
import "../departments/departmentsAll.css"
import Department from "../departments/department";
import { useMediaQuery } from "@mantine/hooks";
import { mobile } from "../../screenSizes";
import { Group, Text } from "@mantine/core";

const DrDileep=()=>{
    const isMobile = useMediaQuery(mobile);
    return(
        <div className="departmentType">
        <Group className="deptNameHeading" w="100%"  >
                <Text mx={isMobile?"auto":"5%"} fz={isMobile?"16px":"24px"}>Anesthesiology Department </Text>
        </Group>
        <div className="DeptDivision">
        <div className="deptContent" style={{width: isMobile?"90%":"70%"}}>
            <div className="deptDocName">
                Doctor's Name :   Dr. Dileep Kumar Takur     
            </div>
            <br/>
            <div className="timimgDoctor">
            Timing : On Call
            </div>
            <br/>
    
            <div>
            Available round the clock, our On-Call Anesthesiologist stands prepared to administer anesthesia for surgeries, procedures, and emergencies alike. With a keen understanding of patient physiology and medical history, they tailor anesthesia plans to suit individual needs, prioritizing safety and efficacy above all else.            </div>
            <br/>
            <div>
            In our hospital, the On-Call Anesthesiologist embodies the principles of safety, expertise, and compassion, standing as a steadfast guardian of patient well-being during moments of vulnerability and need.</div>
        </div>

        {isMobile?<></>:<Department/>}
        </div>
    </div>
    )
}

export default DrDileep;
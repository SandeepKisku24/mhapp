import React from "react";
import "../departments/departmentsAll.css"
import Service from "./service";
import { useMediaQuery } from "@mantine/hooks";
import { mobile } from "../../screenSizes";
import { Group, Text } from "@mantine/core";

const Pastoral =()=>{
    const isMobile = useMediaQuery(mobile);
    return(
        <div className="departmentType">
        <Group className="deptNameHeading" w="100%"  >
                <Text mx={isMobile?"auto":"5%"} fz={isMobile?"16px":"24px"}> Pastoral Care </Text>
        </Group>
        <div className="DeptDivision">
        <div className="deptContent" style={{width: isMobile?"90%":"70%"}}>
           
            
           <div>
           At Mercy Hospital, we understand that healing encompasses more than just physical recovery—it also involves nurturing the spirit. Our dedicated pastoral care service provides comfort, support, and spiritual guidance to patients and families during times of illness or injury.
           </div>
           <br/>
           <div>
           Our compassionate team offers solace through prayer, reflection, and attentive listening, respecting the diverse beliefs of those under our care. This ministry is a sacred commitment to holistic healing, working in harmony with our medical teams to foster an environment where faith, hope, and resilience flourish.                </div>
           <br/>
           <div>
           Our pastoral care embodies the belief that true healing involves addressing the needs of the whole person—mind, body, and spirit.
           </div>
       </div>
       {isMobile?<></>:<Service/>}
        </div>
    </div>
    )
}

export default Pastoral;
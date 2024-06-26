import React from "react";
import "./departmentsAll.css"
import Department from "./department";
import { useMediaQuery } from "@mantine/hooks";
import { mobile } from "../../screenSizes";
import { Group, Text } from "@mantine/core";
const Ophthal=()=>{
    const isMobile = useMediaQuery(mobile);
    return(
        <div className="departmentType">
        <Group className="deptNameHeading" w="100%"  >
                <Text mx={isMobile?"auto":"5%"} fz={isMobile?"16px":"24px"}>Ophthalmology Department </Text>
        </Group>
        <div className="DeptDivision">
        <div className="deptContent" style={{width: isMobile?"90%":"70%"}}>
            
            <div>

            In our hospital, the Ophthalmology Department serves as a beacon of sight and hope. Equipped with state-of-the-art technology and staffed by skilled specialist, we offer comprehensive eye care services. From routine check-ups to intricate surgeries, we cater to diverse needs with precision and compassion. Our commitment extends beyond treatment; we prioritize education, spreading awareness about eye health and prevention of blindness. With every patient we serve, we illuminate lives and pave the way for a brighter future.            </div>
            </div>
            {isMobile?<></>:<Department/>}
        </div>
    </div>
    )
}

export default Ophthal;
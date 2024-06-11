import React from "react";
import "./departmentsAll.css"
import Department from "./department";
import { Group, Image } from "@mantine/core";
import img from "../../gallery/pictures/emergency1.jpg"
import { useMediaQuery } from "@mantine/hooks";
import { mobile } from "../../screenSizes";

const Emergency =()=>{
    const isMobile = useMediaQuery(mobile);
    return(
        <div className="departmentType">
        <div className="deptNameHeading">Emergency </div>
        
        <div className="DeptDivision">
        <div className="deptContent" style={{width: isMobile?"90%":"70%"}} >
            <Group maw="100%" gap={25}>
            <Image src={img} h={300} fit="cover" w="auto"  />
            
            <div style={{width: isMobile?"90%":"60%"}}>
            <div>

                With skilled healthcare professionals and advanced medical technology, these services save lives by stabilizing patients and initiating necessary treatment swiftly. In times of urgent need, hospital emergency services offer reassurance and rapid intervention, ensuring that individuals receive the critical care they require to recover and thrive. 
            </div>
            <div>
                Emergency ICU operation theatres are pivotal in providing life-saving care to critically ill patients requiring urgent surgical interventions. These specialized facilities are equipped with advanced medical equipment, highly trained medical staff, and stringent protocols to address complex medical emergencies swiftly and effectively.             
            </div>
            </div>
            </Group>
        </div>

        {isMobile?<></>:<Department/>}
        </div>

        
    </div>
    )
}

export default Emergency;
import React from "react";
import "./departmentsAll.css"
import Department from "./department";
import { Image } from "@mantine/core";
import img from "../../gallery/pictures/Dr Arun.jpg"
import { useMediaQuery } from "@mantine/hooks";
import { mobile } from "../../screenSizes";

const Orthopedic=()=>{
    const isMobile = useMediaQuery(mobile);
    return(
        <div className="departmentType">
            <div className="deptNameHeading">Orthopedic Department </div>
            <div className="DeptDivision">
            <div className="deptContent" style={{width: isMobile?"90%":"70%"}} >
                <Image src={img} h={250} fit="contain" mx="0" mb={10} py={10} bg="#F7FEE2" w="250"  style={{boxShadow:" rgba(0, 0, 0, 0.1) 0px 4px 12px", borderRadius:"5px"}}></Image>

                <div className="deptDocName">
                    Doctor's Name :  Dr. Arun Tudu 
                </div>
                <br/>
                <div className="timimgDoctor">
                    Timing : 9 AM to 5 PM -  Tuesday, Thursday, Saturday 
                </div>
                <br/>
                <div>
                Orthopedic services encompass a wide range of medical care focused on diagnosing, treating, and managing conditions related to the musculoskeletal system. This system includes bones, joints, muscles, ligaments, tendons, and nerves. Orthopedic services are vital for addressing various orthopedic issues.
                </div>
            </div>

            {isMobile?<></>:<Department/>}
            </div>
        </div>
    )
}

export default Orthopedic;
import React from "react";
import Service from "./service";
import { useMediaQuery } from "@mantine/hooks";
import { mobile } from "../../screenSizes";
import { Group, Text } from "@mantine/core";
const Xray =()=>{
    const isMobile = useMediaQuery(mobile);
    return(
        <div className="departmentType">
            <Group className="deptNameHeading" w="100%"  >
                <Text mx={isMobile?"auto":"5%"} fz={isMobile?"16px":"24px"}>X-Ray Services</Text>
            </Group>
            <div className="DeptDivision">

            <div className="deptContent" style={{width: isMobile?"90%":"70%"}}>
               
               <br/>
               <div>
               X-rays are indispensable tools in healthcare, aiding in the diagnosis, treatment, and monitoring of a wide range of medical conditions while offering speed, convenience, and safety for patients.                 </div>
               <br/>
               <div>
                   Service provided:
                   <br/>
                   <ul>
                       <li>Chest X-ray</li>
                       <li>Skull X-ray</li>
                       <li>Hand X-ray</li>
                       <li>Wrist X-ray</li>
                       <li>PNS X-ray</li>
                       <li>Knee X-ray</li>
                       <li>Ankle X-ray</li>
                       <li>Foot X-ray</li>
                       <li>Finger X-ray</li>
                       <li>Femur X-ray</li>
                       <li>Pelvis X-ray</li>
                       <li>Abdomen X-ray</li>
                       <li>Cervical X-ray</li>
                       <li>L-Spine X-ray</li>
                       <li>Elbow X-ray</li>
                       <li>Mastoid X-ray</li>
                       <li>Mandible X-ray</li>
                       <li>Shoulder X-ray</li>
                       <li>Humerous X-ray</li>
                       <li>Forearm X-ray</li>
                       
                   </ul>
               </div>
               </div>

               {isMobile?<></>:<Service/>}

            </div>
        </div>
    )
}

export default Xray;
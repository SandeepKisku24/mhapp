import React from "react";
import Department from "./department";
import { Image } from "@mantine/core";
import img from "../../gallery/pictures/Dr Rebin R.jpg"
import { useMediaQuery } from "@mantine/hooks";
import { mobile } from "../../screenSizes";
const Dental=()=>{
    const isMobile = useMediaQuery(mobile);
    return(
        <div className="departmentType">
            <div className="deptNameHeading">Dental Department </div>
            <div className="DeptDivision">
            
            <div className="deptContent">
                <Image src={img} h={250} fit="contain" mx="0" mb={10} py={10} bg="#F7FEE2" w="250"  style={{boxShadow:" rgba(0, 0, 0, 0.1) 0px 4px 12px", borderRadius:"5px"}}></Image>

                <div className="deptDocName">
                    Doctor's Name :  Dr. Rebin Renny (Dental Surgeon) 
                </div>
                <br/>
                <div className="timimgDoctor">
                    Timing : 24 X 7 (All week days and weekends)
                </div>
                <br/>
                <div>Service Provided :</div>
                <div>
                Dental Implant, Dental Bridge, Root Canal Treatment, Dental X-Ray 
                Dental Scaling, Tooth Coloured Filling, Dental Crown, Tooth Whitening 
                Cosmetic Dentistry, Ortho Braces, Dental Extractions, Pediatric Dentistry
                </div>
            </div>

            
            {isMobile?<></>:<Department/>}
            </div>
        </div>
    )
}

export default Dental;
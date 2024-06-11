import React from "react";
import "../departments/departmentsAll.css"
import Service from "./service";
import { useMediaQuery } from "@mantine/hooks";
import { mobile } from "../../screenSizes";

const Lab =()=>{
    const isMobile = useMediaQuery(mobile);
    return(
        <div className="departmentType">
            <div className="deptNameHeading">Laboratory/ Pathology </div>
            <div className="DeptDivision">

            <div className="deptContent" style={{width: isMobile?"90%":"70%"}}>
                
                <div>
                In Mercy Hospital Laboratory and Pathology Department, we offer a comprehensive range of diagnostic tests and analyses to aid in the identification, monitoring, and management of various medical conditions. From cardiovascular diseases like myocardial infarction and cardiovascular inflammation to cancer screenings for prostate cancer and liver cancer, our department is equipped to provide accurate and timely results.

</div>
                <br/>
                <div>
                For patients with conditions such as renal disease, thyroid malfunction, infertility, and bone disease, we offer specialized testing to assist in diagnosis and treatment planning. Our laboratory also plays a crucial role in monitoring pregnancy, assessing fertility issues, and managing metabolic disorders like diabetes mellitus.                </div>
                <br/>
                <div>
                In cases of infection, including sepsis and dengue, our department conducts tests such as CRP, Dengue IgG/IgM, and ASO to aid in diagnosis and treatment decisions. We also offer screenings for rheumatoid arthritis, influenza, anemia, and other inflammatory conditions, utilizing tests such as RF IgM, Anti CCP, and PCT.                </div>
                <br/>
                <div>
                Furthermore, our laboratory is equipped to measure various biomarkers and hormones, including Tn-I, CK-MB, PSA, AFP, HbA1c, and TSH, among others, to provide comprehensive insights into patients' health status.                </div>
            </div>

            {isMobile?<></>:<Service/>}

            </div>
        </div>
    )
}

export default Lab;
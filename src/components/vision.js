import React from "react";
import "./vision.css"
import Overview from "./overview";
import { Image } from "@mantine/core";
import img from "../gallery/pictures/vision.jpg"
import { useMediaQuery } from "@mantine/hooks";
import { mobile } from "../screenSizes";
const Vision =()=>{
    const isMobile = useMediaQuery(mobile);
    return(
        <div className="vision">
            <div className="visionHeading">Vision and Objective</div>
            
            <div className="DeptDivision">

            <div className="visionContent" style={{width: isMobile?"90%":"60%"}}> 
                <Image src={img} w={250} h ={250} mx="auto" my={5}></Image>
                <div className="visionIntro">
                The aim and object of Poreyahat Mercy Hospital society is as follows:
                The objects for which the society is established are the following and it is declared that several sub clauses of this clause and all the powers mentioned in it are to be cumulative and in no case is the generality of the sub-clause to be narrowed or restricted by the particularity or any other sub clause nor will any general expression in any sub clause be now will any general expression in any sub clause be narrowed or restricted by any particularity of expression in the same sub clause or the application of any rule of construction “ ejus dem generals” or otherwise:
                </div>
                <ol type="i">
                    <li>To perform works of charity for the sick and disabled without distinction of caste, Religion, or Race. Diffuse social moral, religious, secular and scientific knowledge.</li>
                    <br/>
                    <li>	To enter into reciprocal or other agreements of affiliation with independent long term care facilities and community health facilities for the provisions of patient care for the purpose aforesaid or in furtherance thereof.</li>
                    <br/>
                    <li>To establish, provide, manage, conduct, administer, to run charitable hospital, orphanage, to conduct research and training in various aspects especially in health for all community, especially for SC/ST and Minorities.</li>
                    <br/>
                    <li>To establish charitable health center, community health center, to run mobile clinic, to help, government sponsored scheme like Aids, T.B, Cancer, Blood donation, Immunization and other spreading diseases.</li>
                    <br/>
                    <li>To organize free medical camp, Free Medicine distribution and seminar on Aids, Cancer, Drug Addicts etc. for the benefit of all communities. To promote and advance Medical College and Technological Research such Pathology, Radiology, Cardiology, Aids etc. and to raise the status of all medical and technological knowledge with all its aspects.</li>
                    <br/>
                    <li>To undertake publications relating to medical and technological research and applications. To establish Hospitals and Research Institutes of Medical and Technological Research.</li>
                    <br/>
                    <li>To conduct nursing, midwifery training and other training program related with nursing.</li>
                    <br/>
                    <li>To open, fund, establish, promote, set up, run, maintain, assist, finance, support and / or help the various charitable, educational, industrial, technical/non-technical, industrial, vocational, agricultural & community development programs.</li>
                    <br/>
                    <li>To promote literacy, cultural, and other social activities, by awareness programs, Adult Education classes, night school, lectures, essay competitions, exhibitions, symposiums, cultural programs, press conferences and seminars.</li>
                    <br/>
                    <li>To run orphanage, hostel, old age home, to support/ help or students or children to stand on their free.  To work on safe motherhood care, child and women. </li>
                </ol>
                
            </div>
            {isMobile?<></>:<Overview/>}
            </div>

        </div>
    )
}
export default Vision;
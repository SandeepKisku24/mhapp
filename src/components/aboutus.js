import React from "react";
import "./aboutus.css"
import Overview from "./overview";
import img from "../gallery/pictures/home1.jpg"
import { Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {mobile} from "../screenSizes";

const AboutUs= ()=>{

    const isMobile = useMediaQuery(mobile);
    return(
        <div className="aboutUsHistory">
            <div className="aboutUsHeadinghistory">
                History of Mercy Hospital
            </div>
            <div className="DeptDivision">
            <div className="aboutUsContenthistory" style={{width: isMobile?"90%":"60%"}}>
            
            <Text py={0} fw={400}>
            Mercy Hospital, Poreyahat, was initiated as a humanitarian venture by Rev. Lt. Bp. Urban Eugen McGarry TOR, the first Bishop of Bhagalpur, in the "Badi Mission" [Mission House of TOR Fathers, Poreyahat]. Ever since, the diocese was unceasingly immersed in the apostolic endeavors for the marginalized people living in the territory of the diocese to address their alarming medical needs. Rev. Sr. Dr. Agripina CHF [Congregation of the Holy Family] was the pioneering medical practitioner of the medical clinic functioned in "Badi Mission". Later in 1972, Reverend Bishop invited Rev. Sr. Dr. Luka CHF to take care of the newly built Mercy Hospital in Poreyahat. It was really a blessing to the health care mission of the hospital when Dr. Ms. Mary Quadros joined the team as a regular visiting medical surgeon. The completion of the period of tenure with the Congregation of Holy Family and the demands of the existing scenario of the hospital paved way for the Diocese of Bhagalpur to think about a new beginning and a new life for the hospital. The Catholic Diocese of Bhagalpur under the leadership of His Ex. Bishop Kurien Valiakandathil, decided to administer the Mercy Hospital and took over on 01-04-2024. The advisory council and Fr. George Joseph (Director) along with the Missionary Sisters of Mary Immaculate and Medical Sisters of St. Joseph are serving the hospital. The Hospital team includes the staff from different parts of India and the Hospital is proud in serving the poor and needy.
            </Text>
            <Image src={img} py={20}></Image>
            </div>
            {isMobile?<></>:<Overview/>}
            </div>
            
        </div>
    )
}

export default AboutUs;
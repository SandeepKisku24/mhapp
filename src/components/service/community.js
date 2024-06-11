import React from "react";
import "../information/campaignsMH.css"
import Service from "./service";
import { useMediaQuery } from "@mantine/hooks";
import { mobile } from "../../screenSizes";

const Community =()=>{
    const isMobile = useMediaQuery(mobile);
    return(
        <div className="healthCampaigns">
            <div className="healthCampHeading">Mercy Hospital Free Health Campaigns</div>
            <div className="DeptDivision" style={{width: isMobile?"90%":"70%"}}>
            <div className="healthCampContent">
                <div>
                Every week, our hospital launches a beacon of hope that traverses the dusty paths and winding roads to nearby villages. It’s not just a medical team; it’s an embodiment of compassion, comprising doctors, nurses, and volunteers, armed not only with stethoscopes and medicines but also with a fervent dedication to serve.
                </div>
                <br/>
                <div>In these villages, where healthcare is often a distant dream, we become the harbingers of wellness. We offer free medical checkups, dispense vital medicines, and educate communities about prevalent diseases. But our mission extends beyond mere treatment; we are champions of awareness. We enlighten women about their sanitary needs, empower the elderly with knowledge, and nurture the health of children from every age bracket.</div>
                <br/>
                <div>Our reach knows no bounds. Beyond the nearby hamlets, our active teams venture into far-flung villages, leaving no soul untouched by our healing touch. We defy barriers of community and caste, extending our care to every individual, especially those from marginalized sections of society who often suffer in silence.</div>
                <br/>
                <div>Our health campaigns are not confined to the accessible; they reach out to the unreachable, embracing those for whom healthcare remains an elusive luxury. In every journey, in every village, we sow seeds of health and reap fields of gratitude, for ours is not just a campaign; it’s a crusade for humanity.</div>
        
            </div>
            {isMobile?<></>:<Service/>}
            </div>
        </div>
    )
}

export default Community ;
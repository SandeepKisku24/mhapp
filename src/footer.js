import React from "react";
import Enquiry from "./enquiry";
import FooterCU from "./rightContactUs";
import "./footer.css"
import { Container, Group, Stack } from "@mantine/core";
import { mobile } from './screenSizes';
import { useMediaQuery } from "@mantine/hooks";

const Footer =()=>{
    const isMobile = useMediaQuery(mobile);

    return(

        <Container maw="100%" p={0} my="1%">
            <div className="headingFooterContact">
                 Contact Us
             </div>
            {isMobile?<Stack p="2%">
                <Enquiry/>
                <FooterCU/>
            </Stack>:<Group p="2%" justify="center" className="footer1">
                <Enquiry/>
                <FooterCU/>
                </Group>}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.331566559374!2d87.1802105740612!3d24.681126352412527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f0ed78a5203b83%3A0xa6d090e4eb2c1fad!2sMercy%20Hospital!5e0!3m2!1sen!2sin!4v1716443666056!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
             <div className="bottomBar">
                 © 2024 Mercy Hospital all rights reserved | Designed by 
             </div>
        </Container>
        // <div className="foterOuter">
        
        //     <div className="footer1">
        //     <div className="headingFooterContact">
        //         Contact Us
        //     </div>
        //     <div className="footer">
        //     <Enquiry/>
        //     <FooterCU/>
        //     </div>
        //     </div>
        // <div className="bottomBar">
        // © 2024 Mercy Hospital all rights reserved | Designed by 
        // </div>
        // </div>
    )
}

export default Footer;
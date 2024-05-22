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
            </Stack>:<Group p="2%">
                <Enquiry/>
                <FooterCU/>
                </Group>}
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
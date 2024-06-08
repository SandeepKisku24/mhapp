import React from "react";
import "./detialsBar.css"
import { Anchor, Group } from "@mantine/core";
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Link } from "react-router-dom";
const DetailsBar = ()=>{
    return(
        <Group gap={15} justify="right" pr="2%" style={{backgroundColor:"#DB4437", color:"#fff"}}>
            <Anchor href="tel:+91-8002877072" underline="never" c= "#fff">
                <Group>
                <AirportShuttleIcon style={{
                
                display:"flex", flexDirection:"column", justifyContent:"center"
                
                }}/>
                Emergency +91 8002877072 
                </Group>
            </Anchor>
            <Anchor href="tel:+91-9546233931" underline="never" c= "#fff">
                <Group>
                <ContactPhoneIcon style={{
                
                display:"flex", flexDirection:"column", justifyContent:"center"
                
                }}/>
                Enquiry +91 9546233931 
                </Group>
            </Anchor>
            <Link to="/faq" style={{backgroundColor:"#9B1C1C"}} ><Anchor c= "#fff" underline="never" px={10} style={{backgroundColor:"#9B1C1C", textAlign:"center"}} w={80}>FAQ</Anchor>
            </Link>
        </Group>
    )
}

export default DetailsBar;
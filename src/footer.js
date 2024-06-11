import { Anchor, Group, Stack, Text } from "@mantine/core";
import React from "react";
import { owdata,depdata,docdata,serdata,infodata } from "./menuData";
import { Link } from "react-router-dom";
import FooterCU from "./rightContactUs";
import Query from "./query";
import {mobile} from "./screenSizes";
import { useMediaQuery } from "@mantine/hooks";

const FooterLinks =()=>{
    const isMobile = useMediaQuery(mobile);
return(
    <Group   maw={isMobile?"90%":"100%"} mx="auto" py={50}   bg="#F8F9FA" >
        <Group gap={30} align="flex-start" maw={isMobile?"95%":"95%"} mx="auto">
        <FooterCU/>

        <Stack w={150} gap={5} style={{marginTop:"0 !important"}}>
        <Text size="18px" c="#5A5A5A" fw={550} style={{borderBottom:"1px solid #000", paddingBottom: "4px", fontFamily:"garamond"}}>Quick Links</Text>
            <Link to="/"><Anchor c="#868E96">Home</Anchor></Link>
            {owdata.map((item,index) => (
            <Link to={item.link} key={index}>
            <Anchor c="#868E96">{item.linkName}</Anchor>
            </Link>
            ))}

        </Stack>

        <Stack justify="flex-start" w={150} gap={5} c="#5A5A5A" >
        <Text size="18px" fw={550} style={{borderBottom:"1px solid #000", paddingBottom: "4px", fontFamily:"garamond"}}> Departments</Text>

            {depdata.map((item,index) => (
            <Link to={item.link} key={index}>
            <Anchor c="#868E96" >{item.linkName}</Anchor>
            </Link>
            ))}

        </Stack>

        <Stack justify="flex-start" w={150} gap={5}>
        <Text size="18px" fw={600} c="#5A5A5A" style={{borderBottom:"1px solid #000", paddingBottom: "4px", fontFamily:"garamond"}}>Doctors</Text>
            {docdata.map((item,index) => (
            <Link to={item.link} key={index}>
            <Anchor c="#868E96" >{item.linkName}</Anchor>
            </Link>
            ))}

        </Stack>
        <Stack justify="flex-start" w={150} gap={5}>
        <Text size="18px" fw={550} style={{borderBottom:"1px solid #000", paddingBottom: "4px", fontFamily:"garamond"}} c="#5A5A5A" >Services</Text>
            {serdata.map((item,index) => (
            <Link to={item.link} key={index}>
            <Anchor c="#868E96" >{item.linkName}</Anchor>
            </Link>
            ))}

        </Stack>
        <Stack justify="flex-start" w={150} gap={5} c="#5A5A5A" >
        <Text size="18px" fw={550} style={{borderBottom:"1px solid #000", paddingBottom: "4px", fontFamily:"garamond"}}>Information</Text>
            {infodata.map((item,index) => (
            <Link to={item.link} key={index}>
            <Anchor c="#868E96" >{item.linkName}</Anchor>
            </Link>
            ))}

        </Stack>

        <Group mx="auto" gap={isMobile?"50":"250"} maw="100%">
            
            <Query/>
            <Group h={400} my="auto" mx="auto"> 
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.3315665593746!2d87.18021057406119!3d24.681126352412516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f0ed78a5203b83%3A0xa6d090e4eb2c1fad!2sMercy%20Hospital!5e0!3m2!1sen!2sin!4v1716874665829!5m2!1sen!2sin" style={{height:"350px", width:isMobile?"300px":"550px", borderRadius:"10px"}}></iframe>
            </Group>
        </Group>
        </Group>
    </Group>
)
}

export default FooterLinks;
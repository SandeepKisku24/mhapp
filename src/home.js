import React, { useState } from "react";
import Slide from "./slides";
import Announce from "./announcement";
import AboutUs from "./aboutus";
import Event from "./events";
import Footer from "./footer";
import Testimonials from "./testimonials";
import Youtube from "./youtube";
import "./home.css"
import { Group, Stack } from "@mantine/core";
import { mobile } from "./screenSizes";
import { useMediaQuery } from "@mantine/hooks";
import Gallery from "./events/gallery";
import Service from "./service";
import Facility from "./facilities";
import ImageSection from "./gall";

const Home =()=>{

    const isMobile = useMediaQuery(mobile);

    return(
        <div className="home">
            <Slide/>
            {/* <div className="aboutUsAndAnnouce">
                <AboutUs/>
                <Announce/>
            </div> */}
            {isMobile?<Stack maw={isMobile?"95%":"90%"} mx="auto" my="2%">
                <AboutUs/>
                <Announce />
            </Stack>: <Group maw={isMobile?"95%":"90%"} mx="auto" my="2%" style={{backgroundColor:"#", borderRadius:"5px"}} >
                <AboutUs />
                <Announce/>
            </Group> }

            <br/>
            <br/>
            {/* <Event/> */}
            <Gallery/>
            <br/>
            <br/>
            <Service/>
            <br/>
            <br/>
            <Facility/>
            <br/>
            <br/>

            <Testimonials/>

            <></>

            {/* {isMobile?
            <Stack maw="95%" >
                <Testimonials/>
                <Youtube/>
            </Stack>:
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between" , width:"90%", margin:"auto", backgroundColor:"#F5F5F5", borderRadius:"5px", paddingTop:"3%", paddingBottom:"5%"}} >
                 <Testimonials/>
                 <Youtube/>
            </div>} */}
            <ImageSection/>
        </div>
    )
}

export default Home;
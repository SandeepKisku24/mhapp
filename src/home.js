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
            </Stack>: <Group maw={isMobile?"95%":"90%"} mx="auto" my="2%">
                <AboutUs />
                <Announce/>
            </Group> }

            <br/>
            <br/>
            {/* <Event/> */}
            <Gallery/>
            <br/>
            {isMobile?
            <Stack maw="95%" >
                <Testimonials/>
                <Youtube/>
            </Stack>:
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between" , width:"90%", margin:"auto"}} >
                 <Testimonials/>
                 <Youtube/>
            </div>}
        </div>
    )
}

export default Home;
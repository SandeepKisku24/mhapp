import React, { useState } from "react";
import Slide from "./slides";
import Announce from "./announcement";
import AboutUs from "./aboutus";
import Event from "./events";
import Footer from "./footer";
import Testimonials from "./testimonials";
import Youtube from "./youtube";
import "./home.css"
import { Group } from "@mantine/core";
import { mobile } from "./screenSIzes";
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
            <Group maw={isMobile?"95%":"90%"} mx="auto" my="2%">
                <AboutUs/>
                <Announce/>
            </Group>
            <br/>
            <br/>
            {/* <Event/> */}
            <Gallery/>
            <br/>
            <div className="testAndYou">
                <Testimonials/>
                <Youtube/>
            </div>
        </div>
    )
}

export default Home;
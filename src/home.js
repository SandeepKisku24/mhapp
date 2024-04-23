import React, { useState } from "react";
import Slide from "./slides";
import Announce from "./announcement";
import AboutUs from "./aboutus";
import Event from "./events";
import Footer from "./footer";
import Testimonials from "./testimonials";
import Youtube from "./youtube";
import "./home.css"
const Home =()=>{

    
    return(
        <div className="home">
            <Slide/>
            <div className="aboutUsAndAnnouce">
                <AboutUs/>
                <Announce/>
            </div>
            <br/>
            <br/>
            <Event/>
            <br/>
            <div className="testAndYou">
                <Testimonials/>
                <Youtube/>
            </div>
        </div>
    )
}

export default Home;
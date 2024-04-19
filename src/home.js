import React from "react";
import Slide from "./slides";
import Announce from "./announcement";
import AboutUs from "./aboutus";
import Event from "./events";
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
        </div>
    )
}

export default Home;
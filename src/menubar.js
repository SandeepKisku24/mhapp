import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./menubar.css"
const Menu = ()=>{
    const [showAboutUs, setAboutUs] = useState(false);
    const [showDep, setDep] = useState(false);
    const handleOnMouse = ()=>{
        setAboutUs(true);
    }
    const handleOutMouse = ()=>{
        setAboutUs(false);
    }
    const handleOnMouse1 = ()=>{
        setDep(true);
    }
    const handleOutMouse1 = ()=>{
        setDep(false);
    }
    return(
        <div className="menuBar">
            <ul className="menuList">
                <li><Link to ="/">HOME</Link></li>
                <li><a href="#" onMouseOver={handleOnMouse} onMouseOut={handleOutMouse} >ABOUT US <i class="fa fa-caret-down"></i> </a>
                    {showAboutUs? <div className="dropDownList" onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                        <Link to = "/history"> HISTORY</Link>
                        <Link to = "/vision"> VISION & MISSION</Link>
                        <Link to = "/management"> MANAGEMENT</Link>
                        <Link to = "/gallery"> GALLERY</Link>
                        
                    </div>:<></>}
                </li>
                <li><a href="#" onMouseOver={handleOnMouse1} onMouseOut={handleOutMouse1}>DEPARTMENTS AND DOCTORS <i class="fa fa-caret-down"></i> </a>
                    {showDep? <div className="dropDownList" onMouseOver={handleOnMouse1} onMouseOut={handleOutMouse1}>
                        <a href="#">GENERAL MEDICINE</a>
                        <a href="#">DENTAL DEPARTMENT</a>
                        <a href="#">OPD</a>
                        <a href="#">IPD</a>
                        {/* <Link to ="doctor">Doctors</Link> */}
                    </div>:<></>}
                </li>
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">CONTACT US</a></li>
            </ul>
        </div>
    )
}

export default Menu;
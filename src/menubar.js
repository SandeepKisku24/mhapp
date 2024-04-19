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
                <li><a href="#" onMouseOver={handleOnMouse} onMouseOut={handleOutMouse} > OVERVIEW <i class="fa fa-caret-down"></i> </a>
                    {showAboutUs? <div className="dropDownList" onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                        <Link to = "/history"> about us</Link>
                        <Link to = "/vision"> VISION & MISSION</Link>
                        <Link to = "/vision"> directors's message</Link>
                        <Link to = "/management"> MANAGEMENT</Link>
                        <Link to = "/gallery"> GALLERY</Link>
                        
                    </div>:<></>}
                </li>
                <li><a href="#" onMouseOver={handleOnMouse1} onMouseOut={handleOutMouse1}>DEPARTMENTS AND DOCTORS <i class="fa fa-caret-down"></i> </a>
                    {showDep? <div className=" typedrop dropDownList " onMouseOver={handleOnMouse1} onMouseOut={handleOutMouse1}>
                        <div className="dept">
                            <div className="deptHeading">clinical services</div>
                            <hr/>
                            <a>Emergency</a>
                            <a>Intensive Care Unit (ICU)</a>
                            <a>Outpatient Department (OPD)</a>
                            <a>Operating Theater (O.T)</a>
                            <a>Orthopedic</a>
                            <a>Dental</a>
                            <a>General Medicine</a>
                            <a>Family Medicine</a>
                            <a>Inpatient Department (IPD)</a>
                        </div>
                        <div className="dept">
                            <div className="deptHeading">Diagnostic and Support Services</div>
                            <hr/>
                            <a>X-Ray</a>
                            <a>Laboratory/Pathology</a>
                            <a>Pharmacy</a>
                            <a>Ophthalmology</a>
                            <a>Dietetic</a>
                            <a>Medical Social Work</a>
                            <a>Pastoral Care</a>
                        </div>
                        <div className="dept">
                            <div className="deptHeading">Doctors</div>
                            <hr/>
                           
                        </div>
                        {/* <Link to ="doctor">Doctors</Link> */}
                    </div>:<></>}
                </li>
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">patient information</a></li>
            </ul>
        </div>
    )
}

export default Menu;
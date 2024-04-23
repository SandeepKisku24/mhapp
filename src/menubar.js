import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./menubar.css"
const Menu = ()=>{
    const [showAboutUs, setAboutUs] = useState(false);
    const [showDep, setDep] = useState(false);
    const [showPI, setPI] = useState(false);
    const [showServices, setService] = useState(false);
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
    const handleOnMouse2 = ()=>{
        setService(true);
    }
    const handleOutMouse2 = ()=>{
        setService(false);
    }
    const handleOnMouse3 = ()=>{
        setPI(true);
    }
    const handleOutMouse3 = ()=>{
        setPI(false);
    }
    return(
        <div className="menuBar">
            <ul className="menuList">
                <li><Link to ="/">HOME</Link></li>
                <li><a href="#" onMouseOver={handleOnMouse} onMouseOut={handleOutMouse} > OVERVIEW <i class="fa fa-caret-down"></i> </a>
                    {showAboutUs? <div className="dropDownList" onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                        <Link to = "/aboutUs"> about us</Link>
                        <Link to = "/vision"> VISION & MISSION</Link>
                        <Link to = "/director"> directors's message</Link>
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
                            <a>Dr. Arun Tudu</a>
                            <a> DR. Rebin Renny </a>
                            <a>Dr. Betsy Francis</a>
                            <a>Dr. Shetty Jose</a>
                            <a>Dt. Priti Soren</a>
                            <a>Dr. Dileep Kumar Thakur</a>
                            <a>Dr. Tara Sankar</a>
                            <a>Dr. Alpana Soren</a>
                        </div>
                        {/* <Link to ="doctor">Doctors</Link> */}
                    </div>:<></>}
                </li>

                <li><a href="#" onMouseOver={handleOnMouse2} onMouseOut={handleOutMouse2}>SERVICES <i class="fa fa-caret-down"></i></a> 
                {showServices? <div className="dropDownList" onMouseOver={handleOnMouse2} onMouseOut={handleOutMouse2}>
                        <Link to = "/">Community Outreach Services</Link>
                        <Link to = "/"> Ambulance</Link>
                        <Link to = "/"> Dieatry Services</Link>
                        <Link to = "/"> Pharmacy</Link>
                        
                    </div>:<></>}
                </li>
                
                <li><a href="#"onMouseOver={handleOnMouse3} onMouseOut={handleOutMouse3}>patient information <i class="fa fa-caret-down"></i> </a>
                {showPI? <div className="dropDownList" onMouseOver={handleOnMouse3} onMouseOut={handleOutMouse3}>
                        <Link to = "/"> General information </Link>
                        <Link to = "/"> Admission Procedure</Link>
                        <Link to = "/"> Visitor Hours</Link>
                        <Link to = "/"> OPD Holidays</Link>
                        <Link to = "/"> Inpatient Department</Link>
                        <Link to = "/"> patient rights and responsibilities</Link>
                        <Link to = "/">Campaigns under Mercy hospital</Link>
                    </div>:<></>}
                </li>
            </ul>
        </div>
    )
}

export default Menu;
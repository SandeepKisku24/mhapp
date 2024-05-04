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
                <li><a href="#" onMouseOver={handleOnMouse} onMouseOut={handleOutMouse} > OVERVIEW <i class="fa fa-caret-down"></i> </a >
                    {showAboutUs? <div className="dropDownList" onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
                        <Link to = "/aboutUs"> about us</Link>
                        <Link to = "/vision"> VISION & MISSION</Link>
                        <Link to = "/director"> directors's message</Link>
                        <Link to = "/management"> MANAGEMENT</Link>
                        <Link to = "/gallery"> GALLERY</Link>
                        
                    </div>:<></>}
                </li>
                <li><a href="#" onMouseOver={handleOnMouse1} onMouseOut={handleOutMouse1}>DEPARTMENTS AND DOCTORS <i class="fa fa-caret-down"></i> </a >
                    {showDep? <div className=" typedrop dropDownList " onMouseOver={handleOnMouse1} onMouseOut={handleOutMouse1}>
                        <div className="dept">
                            <div className="deptHeading">clinical services</div>
                            <hr/>
                            <Link to="/department/emergency">Emergency</Link >
                            <Link to="/department/ot">Operating Theater (O.T)</Link >
                            <Link to="/department/orthopedic">Orthopedic</Link >
                            <Link to="/department/opthal">ophthalmology</Link >
                            <Link to="/department/dental">Dental</Link >
                            <Link to="/department/opd">Outpatient Department (OPD)</Link >

                            <Link to="/department/generalmedicine">General Medicine</Link >
                            <Link to="/department/famililymedicine">Family Medicine</Link >
                            <Link to="/department/icu">Intensive Care Unit (ICU)</Link >

                            {/* <Link to="/department/ipd   ">Inpatient Department (IPD)</Link > */}
                            <Link to="/info/ipdinfo  ">Inpatient Department (IPD)</Link >
                        </div>
                        
                        <div className="dept">
                            <div className="deptHeading">Doctors</div>
                            <hr/>
                            <Link to="/department/orthopedic">Dr. Arun Tudu</Link >
                            <Link to="/department/dental"> DR. Rebin Renny </Link >
                            <Link to="/department/generalmedicine">Dr. Betsy Francis</Link >
                            <Link to="/department/famililymedicine">Dr. Shetty Jose</Link >
                            <Link to="doctor/dtpriti">Dt. Priti Soren</Link >
                            <Link to="/doctor/drdileep">Dr. Dileep Kumar Thakur</Link >
                            <Link to="/doctor/drtara">Dr. Tara Sankar (Surgeon)</Link >
                            <Link to="/doctor/dralpana">Dr. Alpana Soren</Link >
                        </div>
                        {/* <Link to ="doctor">Doctors</Link> */}
                    </div>:<></>}
                </li>

                <li><a href="#" onMouseOver={handleOnMouse2} onMouseOut={handleOutMouse2}>SERVICES <i class="fa fa-caret-down"></i></a > 
                {showServices? <div className="dropDownList" onMouseOver={handleOnMouse2} onMouseOut={handleOutMouse2}>
                        <Link to = "/service/lab"> Laboratory/Pathology</Link>
                        <Link to = "/service/xray"> X-Ray</Link>
                        <Link to = "/service/ecg"> ECG</Link>
                        <Link to = "/service/community">Community Outreach Services</Link>
                        <Link to = "/service/ambulance"> Ambulance</Link>
                        <Link to = "doctor/dtpriti"> Dietary Services</Link>
                        <Link to = "/service/pharmacy"> Pharmacy</Link>
                        <Link to = "/service/pastoral"> Pastoral Care</Link>
                        
                    </div>:<></>}
                </li>
                
                <li><a href="#"onMouseOver={handleOnMouse3} onMouseOut={handleOutMouse3}>patient information <i class="fa fa-caret-down"></i> </a >
                {showPI? <div className="dropDownList" onMouseOver={handleOnMouse3} onMouseOut={handleOutMouse3}>
                        <Link to = "/info/generalinfo"> General information </Link>
                        <Link to = "/info/admission"> Admission Procedure</Link>
                        <Link to = "/info/visitorhours"> Visitor Hours</Link>
                        <Link to = "/info/visitorhours"> OPD Holidays</Link>
                        <Link to = "/info/ipdinfo"> Inpatient Department</Link>
                        <Link to = "/info/rightsandresponsibilities"> patient rights and responsibilities</Link>
                        <Link to = "/info/campaigns">Campaigns under Mercy hospital</Link>
                    </div>:<></>}
                </li>
            </ul>
        </div>
    )
}

export default Menu;
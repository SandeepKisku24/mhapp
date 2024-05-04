import React from "react";
import { Link } from "react-router-dom";    
import "../overview.css"
const Department = ()=>{
    return(
        <div className="Overview ">
            <div className="overviewList">
                        <div className="overBlock"> 
                        <Link to="/department/emergency">Emergency</Link >
                        </div>
                        <div className="overBlock"> 
                        <Link to="/department/ot">Operating Theater (O.T)</Link >

                        </div>
                        <div className="overBlock"> 
                        <Link to="/department/orthopedic">Orthopedic</Link >
                        </div>
                        <div className="overBlock"> 
                        <Link to="/department/opthal">ophthalmology</Link >

                        </div>
                        <div className="overBlock"> 
                        <Link to="/department/dental">Dental</Link >

                        </div>
                        <div className="overBlock"> 
                        <Link to="/department/opd">Outpatient Department (OPD)</Link >

                        </div>
                        <div className="overBlock"> 
                        <Link to="/department/generalmedicine">General Medicine</Link >

                        </div>
                        <div className="overBlock"> 
                        <Link to="/department/famililymedicine">Family Medicine</Link >

                        </div>
                        <div className="overBlock"> 
                        <Link to="/department/icu">Intensive Care Unit (ICU)</Link >

                        </div>
            </div>
        </div>
    )
}

export default Department;
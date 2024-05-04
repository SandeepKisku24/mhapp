import React from "react";
import "./ipd.css"
const IpdInfo =()=>{
    return(
        <div className="ipdInfo">
            <div className="ipdInfoHeading">
                Mercy Hospital IPD
            </div>
            <div className="ipdContent">
                <div className="ipdContentOverview">
                The In-Patient Department (IPD) at Mercy Hospital is a specialized unit committed to providing exceptional care for patients requiring hospitalization. Our IPD combines cutting-edge facilities, a compassionate team, and a patient-centric approach to ensure optimal outcomes.
                </div>
                <br/>
                <div className="ipdInfoService">  Facilities and Services</div>
                <ol>
                    <li>Hospital Beds</li>
                    <ul>
                        <li>In our hospital we provide 50 beds. We have General wards as well as the Private Rooms (AC and Non AC). </li>
                        <li>
                        Our general ward, accommodates patients with diverse medical conditions. While  private rooms cater to patients seeking personalized care.
                        </li>
                    </ul>
                    <br/>
                    <li>Expert Medical Staffs</li>
                    <ul>
                        <li>Internal Medicine Specialists: Addressing a wide spectrum of medical issues.</li>
                        <li>Dentists: Ensuring comprehensive oral health care.</li>
                        <li>Anaesthesiologist: Safeguarding patients during surgical procedures.</li>
                        <li>On-Call Surgeon: Available for emergency surgeries.</li>
                        <li>Physicians: Managing acute and chronic illnesses.</li>
                        <li>Orthopedic Specialists: Focusing on musculoskeletal conditions.</li>
                    </ul>
                    <br/>
                    <li> State-of-the-Art Facilities</li>
                    <ul>
                        <li>Operation Theatre (OT): Our fully equipped OT facilitates a range of surgical interventions. </li>
                        <li> Advanced Diagnostic Laboratories:  We house cutting-edge labs for accurate and timely diagnostic tests.</li>
                        <li>Pharmacy Services: Our well-stocked pharmacy ensures prompt access to medications.</li>
                    </ul>
                    <br/>
                    <li>Patient-Centric Approach</li>
                    <ul>
                        <li>Patients admitted to our IPD receive personalized care, regular medical assessments, and round-the-clock attention from our dedicated staff.</li>
                        <li>We prioritize patient comfort, safety, and well-being throughout their hospital stay.</li>
                    </ul>
                    <br/>
    
                </ol>
            </div>
        </div>
    )
}

export default IpdInfo;
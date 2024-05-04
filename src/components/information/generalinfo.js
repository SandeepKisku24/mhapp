import React from "react";
import "./generalinfo.css"
const GeneralInfo =()=>{
    return(
        <div className="GeneralInfo">
            <div className="genInfoHeading">
                General Information
            </div>
            <div  className="genInfoContent">
                <div className="genInfoDo">Do's</div>
                <ul>
                    <li>Make sure you're visiting during visiting hours and respect visiting hours and mealtimes.</li>
                    <li>Observe and follow the signs, notices, and precautions in and around the Hospital</li>
                    <li>Keep your voice down and phone on silent mode while in earmarked zones.</li>
                    <li>Old smoke clings to clothes too, so wash them before visiting. TMH facilities are No smoking Zones</li>
                    <li>Excuse yourself when the doctor enters the wards and visit the patient unless requested to stay.</li>
                    <li>Stay for a short time as prescribed in the notice.</li>
                    <li>Park your vehicle at appropriate parking place only in and around the Hospital</li>
                </ul>

                <br/>
                <br/>
                <div className="genInfoDo">Dont's</div>
                <ul>
                    <li>Don't break hospital rules or violate safety/ security issues as it will account to breach of trust.</li>
                    <li>Don't help the patient get out of bed or give food or drink or any kind of seductive without an approval from treating doctors.</li>
                    <li>Don't talk or laugh loudly as it may disturb the silence of the hospital and other patient.</li>
                    <li>Don't stay with the patient while the doctor's consultation with the patient is in progress.</li>
                    <li>Don't touch any type of equipment or sit on the patient's bed.</li>
                    <li>Don't park your vehicle at non designated areas.</li>
                    <li>Two wheeler are not allowed in TMH except emergency cases.</li>
                    <li>Don't indulge in unnecessary arguments with the doctors /Nurse or other staff.</li>
                    <li>Don’t enter to hospital premises if consumed alcohol, all forms of tobacco is prohibited </li>
                </ul>
            </div>
        </div>
    )
}

export default GeneralInfo;
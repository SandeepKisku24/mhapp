import React from "react";

import "./management.css"
import Overview from "./overview";
const management =()=>{
    return(
        <div className="management ">
            <div className="mngtHeading">
                Management
            </div>
            <div className="DeptDivision">
            <div className="mngtContent">
                <div className="mngtPeople">
                    Director: Fr. George Joseph
                </div>
                <br/>
                <div className="mngtPeople">
                    Assistant Administrator : Sr. preeti Thomas
                </div>
                <br/>
                <div className="mngtPeople">
                    HR Manager: Mr. Sandeep Sebastian
                </div>
                <br/>
                <div className="mngtPeople">
                    Financial Manager: Sr. Tincy Thomas
                </div>
                <br/>
                <div className="mngtPeople">
                    Pharmacy Incharge: Sr. Sweta
                </div>
                <br/>
                <div className="mngtPeople">
                    Social Media Manager: Dani Thomas
                </div>
                <br/>
            </div>

            <Overview/>

            </div>
        </div>
    )
}
export default management;
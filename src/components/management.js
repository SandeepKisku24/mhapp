import React from "react";

import "./management.css"
import Overview from "./overview";
import { useMediaQuery } from "@mantine/hooks";
import { mobile } from "../screenSizes";

const Management =()=>{
    const isMobile = useMediaQuery(mobile);
    return(
        <div className="management ">
            <div className="mngtHeading">
                Management
            </div>
            <div className="DeptDivision">
            <div className="mngtContent" style={{width: isMobile?"90%":"60%"}}>
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

            {isMobile?<></>:<Overview/>}

            </div>
        </div>
    )
}
export default Management;
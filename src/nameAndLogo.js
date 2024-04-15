import React from "react";
import logo from "./gallery/pictures/logo.png"
import "./nameAndLogo.css"

const nameAndLogo =({name, place})=>{
    return(
        <div className="nameAndLogo">
            <div className="logoImage"> <img src={logo} alt="imgnotfound"/></div>
            <div className="nameAndPlace">
                <div className="hosName"> {name} </div>
                <hr className="nameHr"/>
                <div className="hosPlace">{place}</div>
            </div>
        </div>
    )
}

export default nameAndLogo;
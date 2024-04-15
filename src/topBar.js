import React from "react";
import NameAndLogo from "./nameAndLogo";
import Menu from "./menubar";
import "./topBar.css"
const topBar =()=>{
    return(
        <div className="topBar">
            <div className="topBarSecond">
            <NameAndLogo name = "Mercy Hospital" place = " Poreyahat, Godda, Jharkhand ( an  undertaking of Diocese of Bhagalpur)"/>
            <Menu/>
            </div>
        </div>
    )
}
export default topBar;
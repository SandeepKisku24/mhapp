import React from "react";
import NameAndLogo from "./nameAndLogo";
import Menu from "./menubar";
import "./topBar.css"
import '@mantine/core/styles.css';
const topBar =()=>{
    return(
        
            <div className="topBar">
                <Menu/>
            </div>
       
    )
}
export default topBar;

// ( an  undertaking of Diocese of Bhagalpur)
// <div className="topBar">
            {/* <div className="topBarSecond">
            <NameAndLogo name = "Mercy Hospital" place = " Poreyahat, Godda, Jharkhand "/>
            <Menu/>
            </div> */}
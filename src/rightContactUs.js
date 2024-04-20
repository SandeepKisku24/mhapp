import React from "react";

import "./rightContactUs.css"
const footerCU =()=>{
    return(
        <div className="footerContact">
            <div className="addressBoxContact">
                <div className="headingContact"> Mercy hospital</div>
                <div   className="addressContact">
                <p>Poreyahat, Godda,  814153</p>
                <p>Jharkhand, India</p>
                <p>Tel: 8297456887</p>
                </div>
            </div>
            <div className="addressBoxContact">
                <div className="socialMedia"> <a href="mailto:mercyhospital@gmail.com"><i class="fa fa-envelope" aria-hidden="true"></i> mercyhospital@gmail.com</a> </div>

                <br/>
                <br/>

                <div className="socialMedia"> <a href="https://www.youtube.com/@MERCYHOSPITALPOREYAHAT"><i class="fa fa-youtube" aria-hidden="true"></i> Youtube</a> </div>

                <br/>
                <br/>

                <div className="socialMedia">  <a href=""><i class="fa fa-envelope" aria-hidden="true"></i> mercyhospital@gmail.com</a> </div>
            </div>
        </div>
    )

}

export default footerCU;
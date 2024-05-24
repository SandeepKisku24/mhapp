import React from "react";

import "./rightContactUs.css"
import { Container, Text,Stack } from "@mantine/core";
const footerCU =()=>{
    return(

        <Container style={{
            backgroundColor:"#fff",
            width:"400px",
            margin:"auto"
        }}>
            <Stack gap={10} >
            <Text className="headingContact"> Mercy hospital</Text>
            <Text>Poreyahat, Godda,  814153</Text>
            <Text>Jharkhand, India</Text>
            <Text style={{textDecoration:"none", color:"#2f3082"}}> <a href="mailto:mercyhospital@gmail.com" style={{textDecoration:"none", color:"#2f3082"}}><i class="fa fa-envelope" aria-hidden="true"></i> &nbsp; mercyhospital@gmail.com</a> </Text>
            <Text > <a style={{textDecoration:"none", color:"#2f3082"}} href="https://www.youtube.com/@MERCYHOSPITALPOREYAHAT"><i class="fa fa-youtube" aria-hidden="true" style={{ color:"red"}}></i>  &nbsp; Youtube</a> </Text>
            <Text style={{textDecoration:"none", color:"#4285F4"}}> <a style={{textDecoration:"none", color:"#2f3082"}} href="https://m.facebook.com/people/Mercy-Hospital-Poreyahat/100091387437222/" ><i class="fa fa-facebook" aria-hidden="true" style={{color:"#1877F2"}}></i>  &nbsp; &nbsp; Facebook</a> </Text>
            </Stack>

       </Container>
        // <div className="footerContact">
        //     <div className="addressBoxContact">
        //         
        //         <div   className="addressContact">
        //         <p>Poreyahat, Godda,  814153</p>
        //         <p>Jharkhand, India</p>
        //         <p>Tel: 8297456887</p>
        //         </div>
        //     </div>
        //     <div className="addressBoxContact">
        //         <div className="socialMedia">  </div>

        //         <br/>
        //         <br/>

        //         <div className="socialMedia"> </div>

        //         <br/>
        //         <br/>

        //     </div>
        // </div>
    )

}

export default footerCU;
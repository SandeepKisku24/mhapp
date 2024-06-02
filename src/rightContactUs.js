import React from "react";
import img from "./gallery/pictures/logo.png"
import "./rightContactUs.css"
import { Container, Text,Stack, Image, Anchor, Group } from "@mantine/core";
const FooterCU =()=>{
    return(

        <Container style={{
            backgroundColor:"#fff",
            width:"300px",
            margin:"auto",
            borderRadius:"10px"
            
            }} p={20}>
            <Stack gap={10} >
            <Image src={img} h={50} w={50} mx={10}></Image>
            <Text className="headingContact"> Mercy hospital</Text>
            <Text>Poreyahat, Godda,  814153</Text>
            <Text>Jharkhand, India</Text>
            <Anchor href="tel:+91-8002877072" underline="never" c= "black">
                <Group>
                Emergency :  +91-8002877072 
                </Group>
            </Anchor>
            <Anchor href="tel:+91-9546233931" underline="never" c= "black">
                <Group>
                Enquiry :  +91-9546233931 
                </Group>
            </Anchor>
            {/* <Text style={{textDecoration:"none", color:"#2f3082"}}> <a href="mailto:mercyhospital@gmail.com" style={{textDecoration:"none", color:"#2f3082"}}><i class="fa fa-envelope" aria-hidden="true"></i> &nbsp; mercyhospital@gmail.com</a> </Text>
            <Text > <a style={{textDecoration:"none", color:"#2f3082"}} href="https://www.youtube.com/@MERCYHOSPITALPOREYAHAT"><i class="fa fa-youtube" aria-hidden="true" style={{ color:"red"}}></i>  &nbsp; Youtube</a> </Text>
            <Text style={{textDecoration:"none", color:"#4285F4"}}> <a style={{textDecoration:"none", color:"#2f3082"}} href="https://m.facebook.com/people/Mercy-Hospital-Poreyahat/100091387437222/" ><i class="fa fa-facebook" aria-hidden="true" style={{color:"#1877F2"}}></i>  &nbsp; &nbsp; Facebook</a> </Text> */}
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

export default FooterCU;
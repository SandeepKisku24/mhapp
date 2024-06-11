import { Group, Stack, Text } from "@mantine/core";
import React from "react";
import {mobile} from "./screenSizes"
import { useMediaQuery } from "@mantine/hooks";
const Bottombar = ()=>{
    const isMobile = useMediaQuery(mobile);
    return(
        <Group style={{}}>
            {isMobile?<Group justify="center" h={100} bg="#000" c="#fff" w="100%">
            <Text ta="center">© 2024 Mercy Hospital | all rights reserved | Designed by Sandeep Kisku || &nbsp; &nbsp;</Text>
            <Text > <a style={{textDecoration:"none", color:"#2f3082", fontSize:"18px", width:"100px"}} href="https://www.youtube.com/@MERCYHOSPITALPOREYAHAT"><i class="fa fa-youtube" aria-hidden="true" style={{ color:"red"}}></i>  &nbsp; </a> </Text>
            <Text style={{textDecoration:"none", color:"#4285F4"}}> <a style={{textDecoration:"none", color:"#2f3082"}} href="https://m.facebook.com/people/Mercy-Hospital-Poreyahat/100091387437222/" ><i class="fa fa-facebook" aria-hidden="true" style={{color:"#1877F2"}}></i>  &nbsp; &nbsp; </a> </Text>
            <Text style={{textDecoration:"none", color:"#fff"}}> <a href="mailto:mercyhospital@gmail.com" style={{textDecoration:"none", color:"#fff"}}><i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;</a> </Text>
            </Group>:
            <Group justify="center" h={50} bg="#000" c="#fff" w="100%">
            <Text>© 2024 Mercy Hospital | all rights reserved | Designed by Sandeep Kisku || &nbsp; &nbsp;</Text>
            <Text > <a style={{textDecoration:"none", color:"#2f3082", fontSize:"18px", width:"100px"}} href="https://www.youtube.com/@MERCYHOSPITALPOREYAHAT"><i class="fa fa-youtube" aria-hidden="true" style={{ color:"red"}}></i>  &nbsp; </a> </Text>
            <Text style={{textDecoration:"none", color:"#4285F4"}}> <a style={{textDecoration:"none", color:"#2f3082"}} href="https://m.facebook.com/people/Mercy-Hospital-Poreyahat/100091387437222/" ><i class="fa fa-facebook" aria-hidden="true" style={{color:"#1877F2"}}></i>  &nbsp; &nbsp; </a> </Text>
            <Text style={{textDecoration:"none", color:"#fff"}}> <a href="mailto:mercyhospital@gmail.com" style={{textDecoration:"none", color:"#fff"}}><i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;</a> </Text>


            </Group>}
        </Group>
        
    )
}

export default Bottombar;
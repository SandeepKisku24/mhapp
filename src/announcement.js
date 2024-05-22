import React, { useEffect } from "react";
import "./announcement.css"
import ReadMore from "./readMore";
import { Center, Group, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { mobile } from "./screenSizes";
import { colors } from "@mui/material";


const Announce = ({number})=>{
    const isMobile = useMediaQuery(mobile);

    useEffect(()=>{
        if(number!=0)
            {
                
            }
            else{
                // console.log(number+ "hi");
                var tmp = document.querySelector(".announceBar");
                var tmp1 = document.querySelector(".announce");
                
                if(tmp){
                    // console.log("okays");
                    tmp.classList.add("bgAnnouce");
                }
                
                if(tmp1){
                    tmp1.style.width = "100%";
                    tmp1.style.margin = "auto";
                    tmp1.style.borderRadius = "5px";
                }
                // console.log(tmp);
            }
    },[number]);

    
    var change = 1;
    const notes = [{note:"Objects use names to access its  In this example, person.firstName returns John:", date:"12/09/2024",id: "01"},{note:"You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array", date:"08/09/2024", id: "02"},{note:"Many programming languages support arrays with named indexes.", date:"06/01/2023", id: "03"},{note:"programming languages support arrays with named indexes.", date:"07/01/2023", id: "04"}];
    var fNotes = notes;
    if(number!=0){
        fNotes = fNotes.slice(0,3);
    }
    // console.log(number);
    
    return(
        <Group className="announceBar" maw={isMobile?"95%":"35%"} mx={isMobile?"auto":""} gap={isMobile?"0":"1px"} style={{ borderTop: isMobile ? '1px solid #d0bb68' : '',backgroundColor:"#4285F4", borderRadius:"5px"}}  >
                
                <Group justify="center" className="headingAnnouce" style={{ fontSize: isMobile ? '20px' : '30px',}} >Announcements</Group>
                <br/>
                <br/>
                <div className="announce">
                {fNotes.map(({note,date,id})=>{
                    return(
                    <div key={id} className="annoucebox">
                        <Group gap="10" my={10}>
                            
                            <Text className="annouceIcon">
                            <i class="fa fa-bullhorn" aria-hidden="true"></i>
                            </Text>
                            <Stack w="80%" gap="2">
                            <Text >{note}</Text>
                            <Text>{date}</Text>
                            </Stack>
                        </Group>
                        {/* <div className="annouceIcon">
                        <i class="fa fa-bullhorn" aria-hidden="true"></i>
                        </div>
                        <div className="annouceContent">
                            <div className="note">{note}</div>
                            <br/>
                            <div className="date">{date}</div>
                        </div> */}
                    </div>
                    )
                })}
            </div>
            {number!=0?<ReadMore linkTo={"/announce"}/>:<></>}
        </Group>
    )
}

export default Announce;
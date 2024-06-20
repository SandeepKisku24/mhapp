import React, { useEffect } from "react";
import "./announcement.css"
import ReadMore from "./readMore";
import { Group, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { mobile } from "./screenSizes";


const Announce = ({number})=>{
    const isMobile = useMediaQuery(mobile);

    useEffect(()=>{
        if(number!=0)
            {
                
            }
            else{
                
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

    
    const notes = [{note:"Objects use names to access its  In this example, person.firstName returns John:", date:"12/09/2024",id: "01"},{note:"You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array", date:"08/09/2024", id: "02"},{note:"Many programming languages support arrays with named indexes.", date:"06/01/2023", id: "03"},{note:"programming languages support arrays with named indexes.", date:"07/01/2023", id: "04"}];
    var fNotes = notes;
    if(number!=0){
        fNotes = fNotes.slice(0,3);
    }

    
    return(
        <Group className="announceBar" maw={isMobile?"95%":"35%"} mx={isMobile?"auto":"auto"} gap={isMobile?"0":"0"} style={{ borderTop: isMobile ? '1px solid #d0bb68' : '',backgroundColor:"#fff", borderRadius:"5px"}} id={number!=0?"":"full"} >
                
                <Group justify="center" bg="#fff" className="headingAnnouce" style={{ fontSize: isMobile ? '20px' : '30px', borderBottom: "1px solid #000", fontWeight:"bold"}} >Announcements</Group>
                <br/>
                <br/>
                <div className="announce">
                {fNotes.map(({note,date,id})=>{
                    return(
                    <div key={id} className="annoucebox">
                        <Group gap="10" my={10}>
                            
                            {isMobile?<></>:
                                <Text className="annouceIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M640-440v-80h160v80H640Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM120-360v-240h160l200-200v640L280-360H120Zm280-246-86 86H200v80h114l86 86v-252ZM300-480Z"/></svg>
                                </Text>
                            }
                            <Stack w={isMobile?"100%":"80%"} gap="2" mx="auto">
                            <Text >{note}</Text>
                            <Text style={{border:" 2px solid #4284f4", width:`${date.length * 9}px`, borderRadius:"5px"} } px={5}>{date}</Text>
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
            {number!=0?<ReadMore linkTo={"/annouceAll"} text=" Show All"/>:<></>}
        </Group>
    )
}

export default Announce;
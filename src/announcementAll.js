import React from "react";
import "./announcement.css"
import { Group, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { mobile } from "./screenSizes";
import "./faq.css";


const AnnounceAll = ()=>{
    const isMobile = useMediaQuery(mobile);
    const notes = [{note:"Objects use names to access its  In this example, person.firstName returns John:", date:"12/09/2024",id: "01"},{note:"You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array", date:"08/09/2024", id: "02"},{note:"Many programming languages support arrays with named indexes.", date:"06/01/2023", id: "03"},{note:"programming languages support arrays with named indexes.", date:"07/01/2023", id: "04"}];
    
    return(
        <Group className="faqs">
            <Group className="announceBar" maw={isMobile?"95%":"400"} mx={isMobile?"auto":"auto"} gap={isMobile?"0":"0"} style={{ borderTop: isMobile ? '1px solid #d0bb68' : '',backgroundColor:"#fff", borderRadius:"5px"}} my={10}>
                
                <Group justify="center" bg="#fff" className="headingAnnouce" style={{ fontSize: isMobile ? '20px' : '30px', borderBottom: "1px solid #000", fontWeight:"bold"}} >Announcements</Group>
                <br/>
                <br/>
                <div className="announce">
                {notes.map(({note,date,id})=>{
                    return(
                    <div key={id} className="annoucebox">
                        <Group gap="10" my={10}>
                            
                            <Text className="annouceIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M640-440v-80h160v80H640Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM120-360v-240h160l200-200v640L280-360H120Zm280-246-86 86H200v80h114l86 86v-252ZM300-480Z"/></svg>
                            </Text>
                            <Stack w="80%" gap="2">
                            <Text >{note}</Text>
                            <Text>{date}</Text>
                            </Stack>
                        </Group>
                    </div>
                    )
                })}
            </div>
        </Group>
        </Group>
    )
}

export default AnnounceAll;
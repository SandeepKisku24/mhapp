import React from "react";
// import "./youtube.css"
import { Group , Stack, Text} from "@mantine/core";
import { mobile } from './screenSizes';
import { useMediaQuery } from "@mantine/hooks";

const Youtube = ()=>{
    const isMobile = useMediaQuery(mobile);
    return(
        <Group my={30}>
        <Group style={{width: isMobile ? '95%' : '90%' }} mx="auto" justify="">
            <Stack w= {isMobile?"90%":"45%"} pr="2%" align="flex-start" justify="flex-start" mx="auto">
                <Group mt={0} style={{ width: '100%', justifyContent: 'center' }}>
                    <iframe 
                        src="https://www.youtube.com/embed/lo-mj3te4vo?si=plOgtjU0_PUZW96H" 
                        title="" 
                        height= {isMobile?"150":250}
                        width= {isMobile?"80%":"70%"}
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen 
                        style={{ marginTop: 0, alignSelf: 'center' }} // Center horizontally
                    ></iframe>
                </Group>    
                <Text ta="center">
                    <b>Hospital COVID-19 Preparedness: Demonstrating Excellence in Crisis Management</b>
                    <p>Our video highlights our hospital's exceptional readiness and efficiency in handling COVID-19, showcasing our commitment to patient safety and effective crisis management.</p>
                </Text>
            </Stack>
    
            <Stack w= {isMobile?"90%":"45%"} pr="2%" align="flex-start" justify="flex-start" mx="auto">
                <Group mt={0} style={{ width: '100%', justifyContent: 'center' }}>
                    <iframe 
                        src="https://www.youtube.com/embed/DIU0al664Jw?si=eaql07vkTvYb84Rv" 
                        title="YouTube video player" 
                        height= {isMobile?"150":250}
                        width= {isMobile?"80%":"70%"}
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen 
                        style={{ marginTop: 0, alignSelf: 'center' }} // Center horizontally
                    ></iframe>
                </Group>   
                <Text ta="center">
                    <b>Bringing Healthcare to Rural Villages: Our Dedicated Health Camps</b>
                    <p>Our team provides essential medical care and medicines to underserved rural communities, ensuring they receive the health support they need.</p>
                </Text>
            </Stack>
        </Group>
    </Group>
    

    )
} 

export default Youtube;
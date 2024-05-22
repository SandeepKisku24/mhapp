import React from "react";
import logo from "./gallery/pictures/logo.png"
import "./nameAndLogo.css"
import { Group, Image, Stack, Text, Title } from "@mantine/core";
import { mobile } from "./screenSizes";
import { useMediaQuery } from "@mantine/hooks";

const NameAndLogo =({name, place})=>{

    const isMobile = useMediaQuery(mobile);


    return(
        // <div className="nameAndLogo">
        //     <div className="logoImage"> <img src={logo} alt="imgnotfound"/></div>
        //     <div className="nameAndPlace">
        //         <div className="hosName"> {name} </div>
        //         {/* <hr className="nameHr"/> */}
        //         <div className="hosPlace">{place}</div>
        //     </div>
        // </div>
        <>
            <Group gap={10}>
                <Image src={logo} w={isMobile?40:60} h={isMobile?40:60}/>
               <Stack gap={5} >
                    <Text fz={isMobile?"xs":"md"} fw={700} c="#4285F4"style={{
                        textTransform:"uppercase"
                    }}>{name}</Text>
                    <Text fz={isMobile?"9px":"xs"} fw={600 }  c="#000" style={{
                        textTransform:"uppercase"
                    }}>{place}</Text>
                </Stack>
            </Group>
        </>
    )
}

export default NameAndLogo;
import React from "react";
import "./youtube.css"
import { Group } from "@mantine/core";
import { mobile } from './screenSizes';
import { useMediaQuery } from "@mantine/hooks";

const Youtube = ()=>{
    const isMobile = useMediaQuery(mobile);
    return(
        <Group style={{width: isMobile ? '95%' : '45%', margin: "auto" }}>
            <iframe src="https://www.youtube.com/embed/lo-mj3te4vo?si=plOgtjU0_PUZW96H" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div style={{width:"90%", display:"flex", flexDirection:"row", justifyContent: "space-between",margin:"auto" }}>
            <iframe  style={{width:"45%"}} src="https://www.youtube.com/embed/eIeXVTL5xXw?si=ZzXvzZtthsBwF3Bs" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
            <iframe style={{width:"45%"}} src="https://www.youtube.com/embed/kw6rn4QoMrw?si=zEuSelldjmIR0-Tp" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen/>
            </div>
        </Group>
    )
} 

export default Youtube;
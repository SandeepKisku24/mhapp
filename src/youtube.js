import React from "react";
import "./youtube.css"
const youtube = ()=>{
    return(
        <div className="youtube">
            <div className="topYoutube">
            <iframe src="https://www.youtube.com/embed/lo-mj3te4vo?si=plOgtjU0_PUZW96H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="bottomYoutube">
                <iframe src="https://www.youtube.com/embed/eIeXVTL5xXw?si=ZzXvzZtthsBwF3Bs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe  src="https://www.youtube.com/embed/kw6rn4QoMrw?si=zEuSelldjmIR0-Tp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    )
} 

export default youtube;
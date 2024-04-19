import React from "react";
import "./announcement.css"

const announce = ()=>{

    const notes = [{note:"Objects use names to access its  In this example, person.firstName returns John:", date:"12/09/2024",id: "01"},{note:"You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array", date:"08/09/2024", id: "02"},{note:"Many programming languages support arrays with named indexes.", date:"06/01/2023", id: "03"}];
    return(
        <div className="announceBar">
                <div className="headingAnnouce">Announcements</div>
                <br/>
                <br/>
                <div className="announce">
                {notes.map(({note,date,id})=>{
                    return(
                    <div key={id} className="annoucebox">
                        <div className="annouceIcon">
                        <i class="fa fa-bullhorn" aria-hidden="true"></i>
                        </div>
                        <div className="annouceContent">
                            <div className="note">{note}</div>
                            <br/>
                            <div className="date">{date}</div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default announce;
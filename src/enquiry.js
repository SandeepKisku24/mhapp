import React, { useState } from "react";
import "./enquiry.css"
const Enquiry = ()=>{
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [message,setMessage] = useState("");
    return(
        <div className="enquiry">
            <form action="mailto:sanjoshkisku24@gmail.com" method="post" enctype="text/plain">
                <div className="inputText">
                    <label for ="">Email</label>
                    <br/>
                    <input type="email" placeholder="yourname@example.com" name ="email" required id="emailEnquiry" value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }} />
                </div>
                
                <div className="inputText">
                    <label for ="nameEnquiry">Name</label><br/>
                    <input placeholder ="First name Last name " id="nameEnquiry"  name="name" value={name} onChange={(e)=>{
                    setName(e.target.value)
                }} />
                </div>

                <div className="inputText">
                    <label for= "messageEnquiry">Your message</label>
                    <br/>
                    <textarea placeholder="Message" id="messageEnquiry" name  = "message" value ={message} onChange={(e)=>{
                    setMessage(e.target.value)
                }} />
                
                </div>
                <div className="inputSubmit">
                    <input type="submit" value="Send Message" ></input>
                </div>
            </form>
        </div>
    )
}

export default Enquiry;

// onClick={()=>{
//     setEmail("");
//     setMessage("");
//     setName("");
// }}
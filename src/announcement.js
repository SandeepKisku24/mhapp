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

    
    const notes = [{note:"Health Camps in three east zone villages of Poreyahat, elderly and children are expected. ", date:"12/03/2024",id: "01"},{note:"Dental health checkups are now open 24 x 7 in our hospital, all types of services are available .", date:"08/07/2024", id: "02"},{note:" All types of x-ray facilities is now available in our ca,pus with highest accuracy rates. ", date:"06/01/2023", id: "03"},{note:"programming languages support arrays with named indexes.", date:"07/01/2023", id: "04"}];
    var fNotes = notes;
    if(number!=0){
        fNotes = fNotes.slice(0,3);
    }
        const sliderImages = document.querySelectorAll('.slidein');

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
        };
        };

    function checkSlide(e) {
    
    // loop over every image 
    // figure out where it needs to be shown
    // at least 50% of its height
    
    
    sliderImages.forEach(sliderImage => {
    //half way through images
     const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.offsetHeight /2;
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.offsetHeight;
    // half way in the images
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    
    const isNoScrolledPast = window.scrollY < imageBottom;
    
    if(isHalfShown ) {
          sliderImage.classList.add('active');
       } else {
          sliderImage.classList.remove('active');
       }
    })
    
    
    }
    window.addEventListener('scroll', debounce(checkSlide));
    
    return(
        <Group className="announceBar slidein alignright" maw={isMobile?"95%":"35%"} mx={isMobile?"auto":"auto"} gap={isMobile?"0":"0"} style={{ borderTop: isMobile ? '1px solid #d0bb68' : '',backgroundColor:"#fff", borderRadius:"5px"}} id={number!=0?"":"full"} >
                
                <Text bg="#fff" className="headingsall headingAnnouce" style={{ fontSize: isMobile ? '20px' : '30px', borderBottom: "1px solid #000", textAlign:"center"}} >Announcements</Text>
                <br/>
                <br/>
                <div className="announce">
                {fNotes.map(({note,date,id})=>{
                    return(
                    <div key={id} className="annoucebox" >
                        <Group gap="10" my={10}>
                            
                            {isMobile?<></>:
                                <Text className="annouceIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M640-440v-80h160v80H640Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM120-360v-240h160l200-200v640L280-360H120Zm280-246-86 86H200v80h114l86 86v-252ZM300-480Z"/></svg>
                                </Text>
                            }
                            <Stack w={isMobile?"100%":"80%"} gap="4" mx="auto">
                            <Text size= {isMobile?"14px":"16px"}  style={{lineHeight:"1.5"}} >{note}</Text>
                            <Text size= {isMobile?"14px":"16px"} style={{borderBottom:" 1px solid #4284f4", width:`${date.length * 9}px`} } px={5}>{date}</Text>
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
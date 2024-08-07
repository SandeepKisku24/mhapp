import React from "react";
import "./aboutus.css"
// import "./swipe.css"
import { Group, Text } from "@mantine/core";
import { mobile } from "./screenSizes";
import { useMediaQuery } from "@mantine/hooks";
import ReadMore from "./readMore";

const AboutUs = ()=>{
    const isMobile = useMediaQuery(mobile);

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
        <Group className="aboutUs" maw={isMobile?"95%":"60%"} mx={isMobile?"auto":""} style={{borderRight: isMobile?"":""}} gap={0}>
            <div className="alignleft slidein">
            <Group className="headingsall" style={{ fontSize: isMobile ? '16px' : '30px' }} ta="center" justify="center" gap={0} c={isMobile?"#fff":"#fff"}>
                Mercy Hospital, Poreyahat, Godda, Jharkhand 
                <Text size={isMobile?"12px":"20px"}  fw={600}>
                ( an  undertaking of Diocese of Bhagalpur)
                </Text>
            </Group>
            <br/>
            <Group className="contentAboutUs alignleft slidein" >
                <Text lineClamp={10} size={isMobile?"14px":"16px"} style={{ lineHeight: isMobile ? '1.5em' : "1.8" }}>            Mercy Hospital, Poreyahat, was initiated as a humanitarian venture by Rev. Lt. Bp. Urban Eugen McGarry TOR, the first Bishop of Bhagalpur, in the "Badi Mission" [Mission House of TOR Fathers, Poreyahat]. Ever since, the diocese was unceasingly immersed in the apostolic endeavors for the marginalized people living in the territory of the diocese to address their alarming medical needs. Rev. Sr. Dr. Agripina CHF [Congregation of the Holy Family] was the pioneering medical practitioner of the medical clinic functioned in "Badi Mission". Later in 1972, Reverend Bishop invited Rev. Sr. Dr. Luka CHF to take care of the newly built Mercy Hospital in Poreyahat. It was really a blessing to the health care mission of the hospital when Dr. Ms. Mary Quadros joined the team as a regular visiting medical surgeon. The completion of the period of tenure with the Congregation of Holy Family and the demands of the existing scenario of the hospital paved way for the Diocese of Bhagalpur to think about a new beginning and a new life for the hospital.
                     {/* The Catholic Diocese of Bhagalpur under the leadership of His Ex. Bishop Kurien Valiakandathil, decided to administer the Mercy Hospital and took over on 01-04-2024. The advisory council and Fr. George Joseph (Director) along with the Missionary Sisters of Mary Immaculate and Medical Sisters of St. Joseph are serving the hospital. The Hospital team includes the staff from different parts of India and the Hospital is proud in serving the poor and needy. */}
                </Text>
            </Group>
            <ReadMore linkTo={"/aboutUs"} text="Read More"/>
            </div>
        </Group>
    )
}

export default AboutUs;
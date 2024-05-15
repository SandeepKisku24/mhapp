import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import img1 from "../gallery/Newsletters/24 - 01 January News.jpg";
import img2 from "../gallery/Newsletters/23 - 09 December News.jpg";
import img3 from "../gallery/Newsletters/23 - 08 November News.jpg";
import img4 from "../gallery/Newsletters/23 - 07 October News.jpg";
import img5 from "../gallery/Newsletters/23 - 06 September News.jpg";
import img6 from "../gallery/Newsletters/23 - 05 August News.jpg";
import img7 from "../gallery/Newsletters/23 - 04 July News.jpg";
import { Thumbnails } from "yet-another-react-lightbox/plugins";
import Images from "./images";

const Gallery = ()=>{
    const [open,setOpen] = useState(true);
    const images = [img1,img2,img3, img4, img5, img6, img7];
    return(
        <div>
            <Images data = {images}/>
            <Lightbox 
            slides={images.map(src => ({ src }))} 
            open = {open}
            plugins={[Thumbnails]}
            close={() => setOpen(false)}
            />
        </div>
    )
}

export default Gallery;
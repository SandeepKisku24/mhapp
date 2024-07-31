import React, { useState } from 'react';
import PhotoAlbum from 'react-photo-album';

import { Carousel } from '@mantine/carousel';
import { imagehc, imagehp} from './galleryDataAll';
import { Group, Image , Stack, Text} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { mobile } from './screenSizes';
import Lightbox from 'yet-another-react-lightbox';

const ImageAll = ()=> {
  const isMobile = useMediaQuery(mobile);
  const [section,setSection] = useState(0);
  const [index, setIndex] = React.useState(-1);
  return (
    <div style={{ maxWidth: isMobile ? "95%" : "90%", margin: "auto", marginTop:"2%"}}>
        <div>
        <Stack w="100%" mx="auto">
            <Text   c="#4285F4" ta={isMobile?"center":"left"} className="headingsall" style={{ fontSize: isMobile ? '16px' : '30px' }}>Hospital Gallery</Text>
            <Text ta={isMobile?"center":"left"} size={isMobile?"14px !important":""} c="gray" my={10} w={isMobile?"95%":"60%"} style={{lineHeight:"1.5"}}>
                Explore our hospital through these images. Here, you'll find photos of our state-of-the-art facilities, dedicated medical staff, and various events and activities that reflect our commitment to providing excellent care.
            </Text>
        </Stack>

        <div style={{backgroundColor:"#EFF0FF" , padding:"2%"}}>

        <Group maw="100%" mx="auto" mt={10}>
            <Stack w={isMobile?"40%":"20%"} c={section===0?"#4285F4":"gray"}  h={50} style={{borderBottom : section===0?"1px solid #4285F4":"", cursor:"pointer",backgroundColor:section===0?"#fff":"#EFF0FF"}} onClick={()=> setSection(0)}>
                <Text ta="center" my="auto" >
                    Hospital Premises
                </Text>
            </Stack>
            <Stack w={isMobile?"40%":"20%"} c={section===1?"#4285F4":"gray"} h={50}  style={{borderBottom :section===1?"1px solid #4285F4":"",cursor:"pointer",backgroundColor:section===1?"#ffff":"#EFF0FF"}} onClick={()=> setSection(1)} >
                <Text ta="center" my="auto">
                    Health Camps
                </Text>
            </Stack>
        </Group>

        {section===0? 
            <div className="slidein alignleft" style={{marginRight:"auto", marginTop:"0%"}}>
                <div style={{width:isMobile?"100%":"90%", padding:"2%",backgroundColor:"#fff"}}>
                <PhotoAlbum  layout="rows" photos={imagehp} onClick={({ index: current }) => setIndex(current)} />
                <Lightbox
                    index={index}
                    slides={imagehp}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                    styles={{ container: { backgroundColor: "#FFF" } }}
                />
                </div>
            </div>
        :
        
        <div style={{marginRight:"auto", marginTop:"0%"}}>
        <div style={{width:isMobile?"100%":"90%", padding:"2%", backgroundColor:"#fff"}}>
        <PhotoAlbum layout="rows" photos={imagehc} onClick={({ index: current }) => setIndex(current)} />
        <Lightbox
        index={index}
        slides={imagehc}
        open={index >= 0}
        close={() => setIndex(-1)}
        styles={{ container: { backgroundColor: "#FFF" } }}
      />
        </div>
        </div>
        }

        </div>
        </div>

        



        

       
    </div>
  )
}

export default ImageAll;
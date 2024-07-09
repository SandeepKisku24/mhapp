import React, { useState } from 'react';
import PhotoAlbum from 'react-photo-album';

import { Carousel } from '@mantine/carousel';
import { imagehc, imagehp} from './galleryDataAll';
import { Group, Image , Stack, Text} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { mobile } from './screenSizes';

const ImageAll = ()=> {
  const isMobile = useMediaQuery(mobile);
  const [section,setSection] = useState(0);
  return (
    <div style={{ maxWidth: isMobile ? "95%" : "90%", margin: "auto", marginTop:"2%" }}>
        <Stack w="100%" mx="auto">
            <Text fz={isMobile?"20":"24"}  c="#4285F4" ta="center">Welcome to our Hospital Gallery</Text>
            <Text ta="center" my={10} w={isMobile?"90%":"60%"} mx="auto">
                Explore our hospital through these images. Here, you'll find photos of our state-of-the-art facilities, dedicated medical staff, and various events and activities that reflect our commitment to providing excellent care.
            </Text>
        </Stack>

        <Group maw="100%" mx="auto" my={10}>
            <Stack w={isMobile?"40%":"20%"}  h={50} style={{borderBottom :"1px solid #4285F4", cursor:"pointer",backgroundColor:section===0?"#EFF0FF":"#fff"}} onClick={()=> setSection(0)}>
                <Text ta="center" my="auto">
                    Hospital Premises
                </Text>
            </Stack>
            <Stack w={isMobile?"40%":"20%"}h={50} style={{borderBottom :"1px solid #4285F4",cursor:"pointer",backgroundColor:section===1?"#EFF0FF":"#fff"}} onClick={()=> setSection(1)} >
                <Text ta="center" my="auto">
                    Health Camps
                </Text>
            </Stack>
        </Group>

        {section===0? 
            <div style={{width:isMobile?"100%":"90%",marginRight:"auto", marginTop:"4%"}}>
                <PhotoAlbum layout="rows" photos={imagehp} />
            </div>
        :
        
        <div style={{width:isMobile?"100%":"90%",marginRight:"auto", marginTop:"4%"}}>
                <PhotoAlbum layout="rows" photos={imagehc} />
            </div>
        }
        

       
    </div>
  )
}

export default ImageAll;
import React, { useState } from 'react';
import PhotoAlbum from 'react-photo-album';

import { Carousel } from '@mantine/carousel';
import { imagedataAll} from './galleryDataAll';
import { Group, Image , Stack, Text} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { mobile } from './screenSizes';

const ImageAll = ()=> {
  const isMobile = useMediaQuery(mobile);
  const [img,setImg] = useState(-1);
  return (
    <div style={{ maxWidth: isMobile ? "95%" : "90%", margin: "auto", marginTop:"2%"}}>
        <Stack w="100%" mx="auto">
            <Text fz={isMobile?"20":"24"}  c="#4285F4" ta="center">Welcome to our Hospital Gallery</Text>
            <Text ta="center" my={10} w={isMobile?"90%":"60%"} mx="auto">
                Explore our hospital through these images. Here, you'll find photos of our state-of-the-art facilities, dedicated medical staff, and various events and activities that reflect our commitment to providing excellent care.
            </Text>
        </Stack>
        
        <PhotoAlbum layout="rows" photos={imagedataAll} />
       
    </div>
  )
}

export default ImageAll;
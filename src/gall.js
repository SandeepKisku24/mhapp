import React, { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { imagedata } from './galleryData';
import { Group, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { mobile } from './screenSizes';
const ImageSection = ()=> {
  const isMobile = useMediaQuery(mobile);
  const [img,setImg] = useState(-1);
  return (
        <Group h={400} maw={isMobile?"95%":"90%"} mx="auto">
        <Carousel
        withIndicators
        height={300}
        slideSize="33.333333%"
        slideGap="md"
        loop
        align="start"
        >
        {imagedata.map((item, index) => (
          <Carousel.Slide key={index}>
          <Image  src={item.src} alt={item.title} h={280} onMouseOver={()=>{setImg(index)}} style={{ borderRadius:"5px" ,border: img===index?"2px":"", cursor:img==index?"pointer":""}} fit='cover' />
          </Carousel.Slide>
        ))}
        </Carousel>
        </Group>
  );
}

export default ImageSection;
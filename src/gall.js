import React from 'react';
import { Carousel } from '@mantine/carousel';
import { imagedata } from './galleryData';
import { Group, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { mobile } from './screenSizes';
const ImageSection = ()=> {
  const isMobile = useMediaQuery(mobile);
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
          <Image src={item.src} alt={item.title} h={300} />
          </Carousel.Slide>
        ))}
        </Carousel>
        </Group>
  );
}

export default ImageSection;
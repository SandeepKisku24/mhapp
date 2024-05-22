import { Carousel } from '@mantine/carousel';
import { Card, Image, Text, Overlay, Group, SimpleGrid } from '@mantine/core';
import '@mantine/carousel/styles.css';
import "./images.css";
import { slides } from './data';
const Images= ({data,onClick})=> {
    // const images = props;
    const handleClick = (index)=>{
      onClick(index);
    }
    

  return (
    <div className='gallery' style={{width : "90%", margin:"auto"}}>
    
      <div className="headingEvents">
        Monthly Events
      </div>
    
    <Carousel
    withIndicators
    height={250}

    slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
    slideGap={{ base: 0, sm: 'md' }}
    loop
    align="start"
    className='container-Image'
    >
  {
    slides.map((slide,index) => (
      <Carousel.Slide key={index} className='image' onClick={()=>{handleClick(index)}}> 
        <Card key={index} shadow="sm" radius="md" style={{ position: 'relative' }}> 
        <Image src={slide.src} alt={slide.src} height={200} />
        <Overlay 
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))"
        opacity={0.7} zIndex={1} blur={1} /> 
        <Group position="center" style={{ position: 'absolute', top: '100px', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}> 
        <Text color="white" weight={700} size="lg">{slide.title}</Text> </Group> </Card>

      </Carousel.Slide>
    ))
  }
    </Carousel>
    </div>

  );
}
export default Images;
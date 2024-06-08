import { Carousel } from '@mantine/carousel';
import { Card, Image, Text, Overlay, Group, SimpleGrid, Title } from '@mantine/core';
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
    
      <Title fz="h1" className="headingEvents">
        Monthly Events in Mercy Hospital
      </Title>
    
    <Carousel
    height={300}

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
        <div className='galImg'>
        <Image style={{height:"", overflow:"hidden"}} src={slide.src} alt={slide.src} />
        </div>
        
        </Card>

        <Group className='gal' justify='center' style={{ backgroundColor:"#fff",padding:"1%",borderRadius:"5px", zIndex: 5 }}> 
        <Text c="grey" weight={700} size="lg" bg="#E8E8E8" px={30} my={5} style={{borderRadius:"5px"}}>{slide.title}</Text> 
        </Group>
      </Carousel.Slide>
    ))
  }
    </Carousel>
    </div>

  );
}
export default Images;
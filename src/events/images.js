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
        Monthly Events in Mercy Hospital
      </div>
    
    <Carousel
    withIndicators
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
        {/* <Overlay 
        // gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))"
        opacity={1} zIndex={1} blur={0} />  */}
        {/* <Group position="center" style={{ left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>  */}
        </Card>

        <Group className='gal' justify='center' style={{ backgroundColor:"#83B81A",padding:"1%",borderRadius:"5px", zIndex: 5 }}> 
        <Text c="white" weight={700} size="lg">{slide.title}</Text> 
        </Group>
      </Carousel.Slide>
    ))
  }
    </Carousel>
    </div>

  );
}
export default Images;
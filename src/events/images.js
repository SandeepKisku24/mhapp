import { Carousel } from '@mantine/carousel';
import { Card, Image, Text, Overlay, Group,Stack, SimpleGrid, Title } from '@mantine/core';
import '@mantine/carousel/styles.css';
import "./images.css";
import { slides } from './data';
import { useMediaQuery } from '@mantine/hooks';
import { mobile } from '../screenSizes';
import { grey } from '@mui/material/colors';
const Images= ({data,onClick})=> {
    // const images = props;
    const isMobile = useMediaQuery(mobile);
    const handleClick = (index)=>{
      onClick(index);
    }
    

  return (
    <div className='gallery' style={{width : isMobile?"95%":"90%", margin:"auto", height: isMobile?"":"70vh", backgroundColor:"#F8F9FA"}} >
    
      <Stack mx={isMobile?"0":"2.5%"} gap={1}>
          <Text style={{fontSize:isMobile?"18px":"30px"}} pt={20} mb={isMobile?"":"0"} ta={isMobile?"center":"left"} className="headingsall" >
            Events in Mercy Hospital
          </Text>
          <Text py={isMobile?"10":"30"} fz={isMobile?"14px":"20px"} ta={isMobile?"center":"left"} c="#4285F4" style={{fontFamily:"Garamond"}} fw={600}>
           Stay connected with the latest events and activities at Mercy Hospital, and join us in making a positive impact!      </Text>
      </Stack>
    
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
      <Carousel.Slide key={index} className='image' onClick={()=>{handleClick(index)}} > 
        <Card key={index} shadow="sm" radius="md" style={{ position: 'relative' }} w={isMobile?"90%":"90%"} mx="auto" bg="#fff"> 
        <div className='galImg'>
        <Image style={{height:"", overflow:"hidden"}} src={slide.src} alt={slide.src} />
        </div>
        
        </Card>

        <Group className='gal' justify='center' style={{ backgroundColor:"#fff",padding:"1%",borderRadius:"5px", zIndex: 5 }} maw="100%"> 
        <Text c="#fff" weight={700} size="lg" bg="#7C469B" px={30} my={5} style={{borderRadius:"5px"}}>{slide.title}</Text> 
        </Group>
      </Carousel.Slide>
    ))
  }
    </Carousel>
    </div>

  );
}
export default Images;
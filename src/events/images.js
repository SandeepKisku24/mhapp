import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import "./images.css";
const Images= ({data})=> {
    // const images = props;
    console.log("hi");
    console.log();
  return (
    <Carousel
  withIndicators
  height={200}
  slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
  slideGap={{ base: 0, sm: 'md' }}
  loop
  align="start"
    className='container-Image'
>
  {
    data.map((slide, index) => (
      <Carousel.Slide key={index} className='image'> 
        <img src={slide} alt={`Slide ${index + 1}`} /> 
      </Carousel.Slide>
    ))
  }
</Carousel>

  );
}
export default Images;
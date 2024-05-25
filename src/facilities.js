import React from "react";
import { Card, Image, Text, Badge, Button, Group, Stack } from '@mantine/core';
import '@mantine/carousel/styles.css';
import { mobile } from "./screenSizes";
import { useMediaQuery } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import { facdata } from "./facilitydata";


function Facility() {
    const isMobile = useMediaQuery(mobile);
    const faclinks = facdata.map((item)=>{

      <Carousel.Slide style={{borderRadius:"0px !important"}}>

      <Card shadow="sm" padding="lg" radius="md" withBorder w={275}>
      <Card.Section>
      <Image
      src={item.src}
      height={250}
       alt="Norway"

      />
      </Card.Section>
              
      <Group justify="space-between" mt="md" mb="xs">
      <Text fw={500}>{item.title}</Text>
      </Group>

      <Text size="sm" c="dimmed">
          {item.content}
      </Text>
      hi
      <Button color="blue" fullWidth mt="md" radius="md">
          Know more
      </Button>
      </Card>


      </Carousel.Slide>              

  });


  return (
    <Group maw={isMobile?"95%":"90%"} mx="auto">

        <Group></Group>

        <Carousel
        // withIndicators
        height={450}
        slideSize={{ base: '100%', sm: '50%', md: '23%' }}
        slideGap={{ base: 0, sm: '30px' }}
        loop
        align="start"
        style={{width:"100%",margin:"auto"}}
        >
        {
            faclinks
        }

        {/* <Carousel.Slide>
        

        <Card shadow="sm" padding="lg" radius="md" withBorder w={275}>
        <Card.Section>
        <Image
          src={fac2}
          height={250}
          alt="Norway"
        
        />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        </Group>

        <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
        </Text>

        <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
        </Button>
        </Card>    
        </Carousel.Slide> */}

    {/* <Carousel.Slide>
       
    <Card shadow="sm" padding="lg" radius="md" withBorder w={275}>
        <Card.Section>
        <Image
          src={fac3}
          height={250}
          alt="Norway"
        
        />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        </Group>

        <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
        </Text>

        <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
        </Button>
        </Card>

    </Carousel.Slide>

    <Carousel.Slide>
       
    <Card shadow="sm" padding="lg" radius="md" withBorder w={275}>
        <Card.Section>
        <Image
          src={fac5}
          height={250}
          alt="Norway"
        
        />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        </Group>

        <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
        </Text>

        <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
        </Button>
        </Card>

    </Carousel.Slide> */}
        
    </Carousel>

    </Group>
    
  )
}

export default Facility;
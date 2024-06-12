import React from "react";
import { Card, Image, Text, Badge, Button, Group, Stack } from '@mantine/core';
import '@mantine/carousel/styles.css';
import { mobile } from "./screenSizes";
import { useMediaQuery } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import { facdata } from "./facilitydata";
import { Link } from "react-router-dom";



function Facility() {
    const isMobile = useMediaQuery(mobile);
    const faclinks =()=>{

      <h1>1</h1>  

  };


  return (
    <Group maw={isMobile?"95%":"90%"} mx="auto">

        <Group></Group>

        <Carousel
        // withIndicators
        height={450}
        slideSize={{ base: '100%', sm: '50%', md: '25%' }}
        slideGap={{ base: 0, sm: '30px' }}
        loop
        align={isMobile?"center":"start"}
        style={{width:"100%",margin:"auto"}}
        >
        {
            faclinks
        }

        {facdata.map((item, index) => (
        <Carousel.Slide key={index} style={{cursor:"pointer"}}>
          <Card shadow="sm" padding="lg" radius="md" withBorder w={isMobile?"80%":"90%"} mx="auto">
            <Card.Section>
              <Image
                src={item.src}
                height={250}
                alt={item.title}
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>{item.title}</Text>
            </Group>

            <Text size="sm" c="dimmed" lineClamp={3}>
              {item.content}
            </Text>

            <Link to={item.link}>
            <Button color="blue" fullWidth mt="md" radius="md">
              Read More
            </Button>
            </Link>
          </Card>
        </Carousel.Slide>
      ))}

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
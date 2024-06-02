import React, { useState } from 'react';
import * as TablerIcons from '@tabler/icons-react';
import classes from './DoubleHeader.module.css';
import { Link } from 'react-router-dom';
import NameAndLogo from './nameAndLogo';
import '@mantine/core/styles.css';
import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Stack,
  Container,
} from '@mantine/core';

import "./menubar.css"
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

import { mobile } from './screenSizes';
import { owdata, depdata, docdata, serdata, infodata } from './menuData';

const {
  IconChevronDown,
} = TablerIcons;




export default function Menu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();  

  const [menu,setMenu] = useState('home');
  const isMobile = useMediaQuery(mobile);
  const [mobileMenu,setmm] = useState(0);


const owlinks = owdata.map((item) => (
  <UnstyledButton className={classes.subLink} key={item.title}>
    <Group wrap="nowrap" align="flex-start">
      
      <Link to={item.link} >
        <a size="xs" c="dimmed">
          {item.linkName}
        </a>
      </Link >
    </Group>
  </UnstyledButton>
));


const deplinks = depdata.map((item) => (
  <UnstyledButton className={classes.subLink} key={item.title}>
    <Group wrap="nowrap" align="flex-start">
      <Link to={item.link} >
        <a size="xs" c="dimmed">
          {item.linkName}
        </a>
      </Link >
    </Group>
  </UnstyledButton>
));
const doclinks = docdata.map((item) => (
  <UnstyledButton className={classes.subLink} key={item.title}>
    <Group wrap="nowrap" align="flex-start">
      <Link to={item.link} >
        <a size="xs" c="dimmed">
          {item.linkName}
        </a>
      </Link >
    </Group>
  </UnstyledButton>
));

const serlinks = serdata.map((item) => (
  <UnstyledButton className={classes.subLink} key={item.title}>
    <Group wrap="nowrap" align="flex-start">
      <Link to={item.link} >
        <a size="xs" c="dimmed">
          {item.linkName}
        </a>
      </Link >
    </Group>
  </UnstyledButton>
));

const infolinks = infodata.map((item) => (
  <UnstyledButton className={classes.subLink} key={item.title}>
    <Group wrap="nowrap" align="flex-start">
      <Link to={item.link} >
        <Anchor size="" underline='never'>
          {item.linkName}
        </Anchor>
      </Link >
    </Group>
  </UnstyledButton>
));



  return (
      <>
      <header >
        <Container maw={isMobile?"95%":"90%"} mx="auto" style={{position:"sticky",top: "0px"}}>
        <Group justify="space-between" w="100%" py={10}>
        <Link to={"/"}> <NameAndLogo name = " Mercy Hospital " place = " Poreyahat, Godda, Jharkhand "/> </Link>
        <Stack gap={10} style={{textTransform:"none"}}>
        <Group h="100%" pr={15} visibleFrom="sm" justify='flex-end'>
            <Anchor  href="#" fw={400} fz="md" c={menu==="train"?"gray":"#4285F4"} underline='never' onMouseEnter={()=>setMenu("train")}>
              Training Courses
            </Anchor>
           
            <Anchor  href="#" fw={400} fz="md" c={menu==="learn"?"gray":"#4285F4"} underline='never'  onMouseEnter={()=>setMenu("learn")}>
              Careers
            </Anchor>
            <Anchor style={{backgroundColor:"#4285F4",padding:"1%",borderRadius:"5px"}} href="#" fw={400} fz="md"c={menu==="academy"?"#fff":"#fff"} underline='never'  onMouseEnter={()=>setMenu("academy")}>
              Donate Us
            </Anchor>
        </Group>

            <Group h="100%" gap={0} visibleFrom="sm" justify='flex-end'>
            <Link to="/" style={{ textDecoration: 'none' }}>
            <Anchor
              fz={isMobile ? "sm" : "md"}
              c={menu === "home" ? "#4285F4" : "grey"}
              underline='never'
              onMouseEnter={() => setMenu("home")}
            >
            Home
            </Anchor>
            </Link>

            <HoverCard width={400} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                    <Anchor
                      fz={isMobile ? "sm" : "md"}
                      c={menu === "overview" ? "#4285F4" : "grey"}
                      underline='never'
                      onMouseEnter={() => setMenu("overview")}
                    >
                      Overview
                    </Anchor>

                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Overview</Text>
                </Group>

                <Divider my="sm" />
                <SimpleGrid cols={2} spacing={0}>
                </SimpleGrid>
                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <Stack gap={5} fz="sm" className='submenupart'>

                      {owdata!==null?owlinks:<></>}
  
                    </Stack>

                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            <HoverCard width={400} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                    <Anchor
                      fz={isMobile ? "sm" : "md"}
                      c={menu === "docdep" ? "#4285F4" : "grey"}
                      underline='never'
                      onMouseEnter={() => setMenu("docdep")}
                    >
                      Doctors and Departments
                    </Anchor>

                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Doctors and Departments</Text>
                </Group>

                <Divider my="sm" />
                <SimpleGrid cols={2} spacing={0}>
                </SimpleGrid>
                <div className={classes.dropdownFooter}>
                  <div justify="space-between" style={{display:"flex", flexDirection :"row"}} className='submenupart'>
                    <Stack gap={5} fz="sm">

                      {depdata!==null?deplinks:<></>}
  
                    </Stack>
                    <Stack gap={5} fz="sm" pl="md" >

                      {docdata!==null?doclinks:<></>}
  
                    </Stack>

                  </div>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            <HoverCard width={400} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                    <Anchor
                      fz={isMobile ? "sm" : "md"}
                      c={menu === "service" ? "#4285F4" : "grey"}
                      underline='never'
                      onMouseEnter={() => setMenu("service")}
                    >
                      Services
                    </Anchor>

                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Services</Text>
                </Group>

                <Divider my="sm" />
                <SimpleGrid cols={2} spacing={0}>
                </SimpleGrid>
                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <Stack gap={5} fz="sm" className='submenupart'>

                      {serdata!==null?serlinks:<></>}
  
                    </Stack>

                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            <HoverCard width={400} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                    <Anchor
                      fz={isMobile ? "sm" : "md"}
                      c={menu === "pinfo" ? "#4285F4" : "grey"}
                      underline='never'
                      onMouseEnter={() => setMenu("pinfo")}
                    >
                      Patient Information
                    </Anchor>

                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Patient Information</Text>
                </Group>

                <Divider my="sm" />
                <SimpleGrid cols={2} spacing={0}>
                </SimpleGrid>
                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <Stack gap={5} fz="sm" style={{color:"#4285F4"}}>

                      {infodata!==null?infolinks:<></>}
  
                    </Stack> 

                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            
            </Group>
        </Stack>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" size={isMobile?"xs":"md"} />
        </Group>
        </Container>
      </header>

      {isMobile && <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="90%"
        padding="md"
        title="Mercy Hospital"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(125vh - ${rem(0)})`} mx="-md">
          <Divider my="sm" />

          <Link to="/">
          <a className={classes.link}>
            Home
          </a>
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <a component="span" mr={5} className={classes.link} >
                Overview
              </a>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
                onClick={()=>{
                  if(mobileMenu!==1) setmm(1);
                  // else setmm(0);
                }}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}  style={{fontSize:"12px", marginRight:"5%", display : mobileMenu===1?"":"none"} }>{owlinks}</Collapse>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <a component="span" mr={5} className={classes.link} >
                Doctors and Departments
              </a>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]} 
                onClick={()=>{
                  if(mobileMenu!==2) setmm(2);
                  // else setmm(0);
                }}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened} style={{fontSize:"12px", marginRight:"5%" ,display : mobileMenu===2?"":"none"}}>{deplinks}{doclinks} </Collapse>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <a component="span" mr={5} className={classes.link}>
                Services
              </a>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
                onClick={()=>{
                  if(mobileMenu!==3) setmm(3);
                  // else setmm(0);
                }}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened} style={{fontSize:"12px", marginRight:"5%",display : mobileMenu===3?"":"none"}}>{serlinks}</Collapse>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <a component="span" mr={5} className={classes.link}>
                Patient Information
              </a>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
                onClick={()=>{
                  if(mobileMenu!==4) setmm(4);
                  // else setmm(0);
                }}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened} style={{fontSize:"12px", marginRight:"5%",display : mobileMenu===4?"":"none"}}>{infolinks}</Collapse>
          
  
        </ScrollArea>
      </Drawer>}
    </>
  );
}



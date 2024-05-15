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

import { useDisclosure, useMediaQuery } from '@mantine/hooks';

import { mobile } from './screenSIzes';

const {
  IconChevronDown,
} = TablerIcons;



export default function Menu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();  

  const [menu,setMenu] = useState('home');
  const isMobile = useMediaQuery(mobile);

  const owdata = [
    {
    link: '/aboutUs',
    linkName: 'About Us'
    },
    {
    link: '/vision',
    linkName: 'Vission and Missions'
    },
    {
    link: '/director',
    linkName: 'Director'
    },
    {
    link: '/management',
    linkName: 'Management'
    },
    {
    link: '/gallery',
    linkName: 'Gallery'
    }
];



const links = owdata.map((item) => (
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

  return (
      <>
      <header >
        <Container maw={isMobile?"95%":"90%"} mx="auto">
        <Group justify="space-between" w="100%" py={10}>
        <NameAndLogo name = "Mercy Hospital" place = " Poreyahat, Godda, Jharkhand "/>
        <Stack gap={10} style={{textTransform:"none"}}>
        <Group h="100%" pr={15} visibleFrom="sm" justify='flex-end'>
            <Anchor  href="#" fw={400} fz="md" c={menu==="home"?"black":"gray"} underline='never' >
              Home
            </Anchor>
           
            <Anchor  href="#" fw={400} fz="md" c={menu==="learn"?"black":"gray"} underline='never'  onMouseEnter={()=>setMenu("learn")}>
              Learn
            </Anchor>
            <Anchor  href="#" fw={400} fz="md"c={menu==="academy"?"black":"gray"} underline='never'  onMouseEnter={()=>setMenu("academy")}>
              Academy
            </Anchor>
        </Group>

            <Group h="100%" gap={0} visibleFrom="sm" justify='flex-end'>
            <Link to="/" style={{ textDecoration: 'none' }}>
            <Anchor
              fz={isMobile ? "sm" : "md"}
              c={menu === "home" ? "gray" : "black"}
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
                      Overview

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
                    <Stack gap={5} fz="sm">

                      {owdata!==null?links:<></>}
  
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
                      Doctors and Departments

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
                  <Group justify="space-between">
                    <Stack gap={5} fz="sm">

                      {owdata!==null?links:<></>}
  
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
                      Services

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
                    <Stack gap={5} fz="sm">

                      {owdata!==null?links:<></>}
  
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
                      Patient Information

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
                    <Stack gap={5} fz="sm">

                      {owdata!==null?links:<></>}
  
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
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Link to="/">
          <a className={classes.link}>
            Home
          </a>
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <a component="span" mr={5}>
                Overview
              </a>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>
  
        </ScrollArea>
      </Drawer>}
    </>
  );
}




// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./menubar.css"
// const Menu = ()=>{
//     const [showAboutUs, setAboutUs] = useState(false);
//     const [showDep, setDep] = useState(false);
//     const [showPI, setPI] = useState(false);
//     const [showServices, setService] = useState(false);
//     const handleOnMouse = ()=>{
//         setAboutUs(true);
//     }
//     const handleOutMouse = ()=>{
//         setAboutUs(false);
//     }
//     const handleOnMouse1 = ()=>{
//         setDep(true);
//     }
//     const handleOutMouse1 = ()=>{
//         setDep(false);
//     }
//     const handleOnMouse2 = ()=>{
//         setService(true);
//     }
//     const handleOutMouse2 = ()=>{
//         setService(false);
//     }
//     const handleOnMouse3 = ()=>{
//         setPI(true);
//     }
//     const handleOutMouse3 = ()=>{
//         setPI(false);
//     }
//     return(
//         <div className="menuBar">
//             <ul className="menuList">
//                 <li><Link to ="/">HOME</Link></li>
//                 <li><a href="#" onMouseOver={handleOnMouse} onMouseOut={handleOutMouse} > OVERVIEW <i class="fa fa-caret-down"></i> </a >
//                     {showAboutUs? <div className="dropDownList" onMouseOver={handleOnMouse} onMouseOut={handleOutMouse}>
//                         <Link to = "/aboutUs"> about us</Link>
//                         <Link to = "/vision"> VISION & MISSION</Link>
//                         <Link to = "/director"> directors's message</Link>
//                         <Link to = "/management"> MANAGEMENT</Link>
//                         <Link to = "/gallery"> GALLERY</Link>
                        
//                     </div>:<></>}
//                 </li>
//                 <li><a href="#" onMouseOver={handleOnMouse1} onMouseOut={handleOutMouse1}>DEPARTMENTS AND DOCTORS <i class="fa fa-caret-down"></i> </a >
//                     {showDep? <div className=" typedrop dropDownList " onMouseOver={handleOnMouse1} onMouseOut={handleOutMouse1}>
//                         <div className="dept">
//                             <div className="deptHeading">clinical services</div>
//                             <hr/>
//                             <Link to="/department/emergency">Emergency</Link >
//                             <Link to="/department/ot">Operating Theater (O.T)</Link >
//                             <Link to="/department/orthopedic">Orthopedic</Link >
//                             <Link to="/department/opthal">ophthalmology</Link >
//                             <Link to="/department/dental">Dental</Link >
//                             <Link to="/department/opd">Outpatient Department (OPD)</Link >

//                             <Link to="/department/generalmedicine">General Medicine</Link >
//                             <Link to="/department/famililymedicine">Family Medicine</Link >
//                             <Link to="/department/icu">Intensive Care Unit (ICU)</Link >

//                             {/* <Link to="/department/ipd   ">Inpatient Department (IPD)</Link > */}
//                             <Link to="/info/ipdinfo  ">Inpatient Department (IPD)</Link >
//                         </div>
                        
//                         <div className="dept">
//                             <div className="deptHeading">Doctors</div>
//                             <hr/>
//                             <Link to="/department/orthopedic">Dr. Arun Tudu</Link >
//                             <Link to="/department/dental"> DR. Rebin Renny </Link >
//                             <Link to="/department/generalmedicine">Dr. Betsy Francis</Link >
//                             <Link to="/department/famililymedicine">Dr. Shetty Jose</Link >
//                             <Link to="doctor/dtpriti">Dt. Priti Soren</Link >
//                             <Link to="/doctor/drdileep">Dr. Dileep Kumar Thakur</Link >
//                             <Link to="/doctor/drtara">Dr. Tara Sankar (Surgeon)</Link >
//                             <Link to="/doctor/dralpana">Dr. Alpana Soren</Link >
//                         </div>
//                         {/* <Link to ="doctor">Doctors</Link> */}
//                     </div>:<></>}
//                 </li>

//                 <li><a href="#" onMouseOver={handleOnMouse2} onMouseOut={handleOutMouse2}>SERVICES <i class="fa fa-caret-down"></i></a > 
//                 {showServices? <div className="dropDownList" onMouseOver={handleOnMouse2} onMouseOut={handleOutMouse2}>
//                         <Link to = "/service/lab"> Laboratory/Pathology</Link>
//                         <Link to = "/service/xray"> X-Ray</Link>
//                         <Link to = "/service/ecg"> ECG</Link>
//                         <Link to = "/service/community">Community Outreach Services</Link>
//                         <Link to = "/service/ambulance"> Ambulance</Link>
//                         <Link to = "doctor/dtpriti"> Dietary Services</Link>
//                         <Link to = "/service/pharmacy"> Pharmacy</Link>
//                         <Link to = "/service/pastoral"> Pastoral Care</Link>
                        
//                     </div>:<></>}
//                 </li>
                
//                 <li><a href="#"onMouseOver={handleOnMouse3} onMouseOut={handleOutMouse3}>patient information <i class="fa fa-caret-down"></i> </a >
//                 {showPI? <div className="dropDownList" onMouseOver={handleOnMouse3} onMouseOut={handleOutMouse3}>
//                         <Link to = "/info/generalinfo"> General information </Link>
//                         <Link to = "/info/admission"> Admission Procedure</Link>
//                         <Link to = "/info/visitorhours"> Visitor Hours</Link>
//                         <Link to = "/info/visitorhours"> OPD Holidays</Link>
//                         <Link to = "/info/ipdinfo"> Inpatient Department</Link>
//                         <Link to = "/info/rightsandresponsibilities"> patient rights and responsibilities</Link>
//                         <Link to = "/info/campaigns">Campaigns under Mercy hospital</Link>
//                     </div>:<></>}
//                 </li>
//             </ul>
//         </div>
//     )
// }

// export default Menu;

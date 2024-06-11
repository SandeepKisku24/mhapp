import { Container, Group, Stack, Card, Image,Text, Badge, Button } from "@mantine/core";
import React, { useState } from "react";
import { mobile } from "./screenSizes";
import { useMediaQuery } from "@mantine/hooks";
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { SvgIcon } from "@mui/material";
import { Link } from "react-router-dom";
import "./service.css"
import ReadMore from "./readMore";

const Service = ()=>{
    const isMobile = useMediaQuery(mobile);
    const [ser,setService] = useState(-1);
    return(
        <Group maw={isMobile?"95%":"100%"} justify="center" mx="auto" my="" style={{backgroundColor:"#FFFFE0",fontFamily:"Montserrat"}}>
            {isMobile?<Stack maw="100%" my={15}>
                <Text size="25px" fw={500} c="grey" w="95%" ta="center">Services Provided in Mercy Hospital</Text>
                <Group maw="95%" mx="auto">
                    <Text ta="center" size="18px" c="black" fw={400} style={{ lineHeight: '1.6', letterSpacing: '' }} > 
                    At Mercy Hospital, we provide a wide range of medical services for the holistic treatment of our patients, ensuring quality health care.

                    </Text>
                </Group>
            </Stack>:
            <Group maw="100%" my={15}>
            <Text size="25px" fw={500} c="grey" w="50%" ta="center">Services Provided in Mercy Hospital</Text>
            <Group maw="40%">
                <Text ta="justify" size="18px" c="black" fw={400} style={{ lineHeight: '1.6', letterSpacing: '' }} > 
                At Mercy Hospital, we provide a wide range of medical services for the holistic treatment of our patients, ensuring quality health care.

                </Text>
            </Group>
            </Group>}
            {isMobile?
            <Group gap={25} maw="" p={0} my={5} mx="auto" justify="center" >
            <Card shadow="sm" style={{width:"150px", height:"", margin:"1px", cursor:"pointer"}} padding="lg" radius="md"  withBorder onMouseEnter={()=>{
                      setService(0);
                  }} onMouseLeave={()=>{ setService(-1)}}>
              <Card.Section>
                  <MedicalServicesIcon style={{ fontSize: ser==0?"30px":"40px", color: '#83B81A', textAlign:"center", width:"100%",fontWeight:"100" , transition:"0.5s"}}/>
              </Card.Section>

              <Stack justify="space-between"  h={200} align="stretch" gap={0}>
                  <Group justify="space-between" mt="md" mb="xs">
                      <Text fw="500" ta="center" w= "100%" size="sm" className="headingService">Emergency Service</Text>   
                  </Group>

                  <Text size="md" c="dimmed" ta="justify" className="halfService" lineClamp={2}>
                      With skilled healthcare professionals and advanced medical ...
                  </Text>

                  <Link to="/department/emergency" >
                      <Button color="blue" fullWidth mt="md" radius="md" >
                          Know More
                      </Button>
                  </Link>
              </Stack>
             </Card> 

            <Card shadow="sm" style={{width:"150px", height:"", margin:"1px", cursor:"pointer"}} padding="lg" radius="md"  withBorder onMouseEnter={()=>{
                      setService(1);
                  }} onMouseLeave={()=>{ setService(-1)}}>
              <Card.Section>
              <svg xmlns="http://www.w3.org/2000/svg" height=  {ser==1?"30px":"40px"} style={{textAlign:"center",fontWeight:"100" , width:"100%" , transition:"0.5s"}} fill="#83B81A" viewBox="0 -960 960 960" width="24px"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-560H200v560Zm160 0v-72l-72-84q-11-11-19.5-30t-8.5-44q0-13 2.5-25.5T271-440q-5-11-8-23.5t-3-26.5q0-25 8.5-44t19.5-30l72-84v-72h60v83q0 5-7 19l-80 94q-7 8-10 16.5t-3 17.5q0 20 13 34.5t33 14.5q9 0 17-3t14-10q17-17 38.5-26t44.5-9q23 0 44.5 9t38.5 26q7 7 15 10t16 3q20 0 33-14.5t13-33.5q0-9-3.5-17.5T627-523l-80-95q-4-4-5.5-9t-1.5-10v-83h60v72l73 86q14 16 20.5 34.5T700-489q0 13-3.5 25.5T688-440q6 12 9 24.5t3 25.5q0 25-8.5 44T672-316l-72 84v72h-60v-83q0-6 7-19l80-94q7-8 10-17t3-18q-11 5-22 7.5t-23 2.5q-20 0-40-8t-35-24q-7-8-17.5-12t-22.5-4q-11 0-21.5 4T440-413q-15 16-34.5 24t-39.5 8q-12 0-23.5-2.5T320-391q0 9 3 18t10 17l80 94q3 5 5 9.5t2 9.5v83h-60Zm-160 0v-560 560Z"/></svg>                    </Card.Section>

              <Stack justify="space-between"  h={200} align="stretch" gap={10}>
                  <Group justify="space-between" mt="md" mb="xs">
                      <Text fw="500" ta="center"  w= "100%" size="sm" className="headingService">Imaging Service</Text>   
                  </Group>

                  <Text size="md" c="dimmed" ta="justify" className="halfService" lineClamp={2}>
                      Chest X-ray, Skull X-ray, Hand X-ray, Wrist X-ray, PNS X-ray, Knee X-ray, Ankle X-ray...
                  </Text>

                  <Link to="/service/xray" style={{ transition:" 0.5s"}}>
                      <Button color="blue" fullWidth mt="md" radius="md" >
                          Know More
                      </Button>
                  </Link>
              </Stack>
             </Card>  

            <Card shadow="sm" style={{width:"150px", height:"", margin:"1px", cursor:"pointer"}} padding="lg" radius="md"  withBorder onMouseEnter={()=>{
                      setService(2);
                  }} onMouseLeave={()=>{ setService(-1)}}>
              <Card.Section>
              <svg xmlns="http://www.w3.org/2000/svg" height=  {ser==2?"30px":"40px"} style={{textAlign:"center", width:"100%" , transition:"0.5s"}} fill="#83B81A" viewBox="0 -960 960 960" width="24px"><path d="M480-480Zm0 360q-18 0-34.5-6.5T416-146L148-415q-35-35-51.5-80T80-589q0-103 67-177t167-74q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19q100 0 167.5 74T880-590q0 49-17 94t-51 80L543-146q-13 13-29 19.5t-34 6.5Zm40-520q10 0 19 5t14 13l68 102h166q7-17 10.5-34.5T801-590q-2-69-46-118.5T645-758q-31 0-59.5 12T536-711l-27 29q-5 6-13 9.5t-16 3.5q-8 0-16-3.5t-14-9.5l-27-29q-21-23-49-36t-60-13q-66 0-110 50.5T160-590q0 18 3 35.5t10 34.5h187q10 0 19 5t14 13l35 52 54-162q4-12 14.5-20t23.5-8Zm12 130-54 162q-4 12-15 20t-24 8q-10 0-19-5t-14-13l-68-102H236l237 237q2 2 3.5 2.5t3.5.5q2 0 3.5-.5t3.5-2.5l236-237H600q-10 0-19-5t-15-13l-34-52Z"/></svg>                    </Card.Section>

              <Stack justify="space-between"  h={200} align="stretch" gap={10}>
                  <Group justify="space-between" mt="md" mb="xs">
                      <Text fw="500" ta="center" w= "100%" size="sm" className="headingService">ECG Service</Text>   
                  </Group>

                  <Text size="md" c="dimmed" ta="justify" className="halfService" lineClamp={2}>
                      We provide ECG services for best diagnostic practices    ...
                  </Text>

                  <Link to="/service/ecg" style={{ transition:" 0.5s"}}>
                      <Button color="blue" fullWidth mt="md" radius="md" >
                          Know More
                      </Button>
                  </Link>
              </Stack>
             </Card>   

            <Card shadow="sm" style={{width:"150px", height:"", margin:"1px", cursor:"pointer"}} padding="lg" radius="md"  withBorder onMouseEnter={()=>{
                      setService(3);
                  }} onMouseLeave={()=>{ setService(-1)}}>
              <Card.Section>
              <svg xmlns="http://www.w3.org/2000/svg" height=  {ser==3?"30px":"40px"} style={{textAlign:"center", width:"100%" , transition:"0.5s"}} fill="#83B81A" viewBox="0 -960 960 960" width="24px" ><path d="M680-875q66 0 113 47t47 113q0 11-1.5 29.5T834-643l-55 403q-5 38-34.5 62T677-154q-23 0-42.5-10T602-192L495-348q-2-4-6.5-5.5T479-355q-4 0-16 9L359-195q-14 20-34.5 30.5T281-154q-38 0-67-24.5T180-241l-54-402q-3-24-4.5-42.5T120-715q0-66 47-113t113-47q36 0 57.5 9.5T379-845q20 11 42.5 20.5T480-815q36 0 58.5-9.5T581-845q20-11 42-20.5t57-9.5Zm0 80q-23 0-40.5 9.5T601-765q-21 11-49 20.5t-72 9.5q-44 0-72-9.5T359-765q-21-11-38.5-20.5T280-795q-33 0-56.5 23.5T200-715q0 8 1 23t4 35l55 405q1 8 7 12.5t14 4.5q5 0 9-2t6-6l101-148q14-20 36-32t47-12q25 0 47 12t36 32l103 151q2 3 5 4.5t7 1.5q8 0 14.5-4.5T700-251l55-406q3-20 4-35t1-23q0-33-23.5-56.5T680-795ZM480-515Z"/></svg>                    </Card.Section>

              <Stack justify="space-between"  h={200} align="stretch" gap={10}>
                  <Group justify="space-between" mt="md" mb="xs">
                      <Text fw="500" ta="center" w= "100%" size="sm" className="headingService">Dental Service</Text>   
                  </Group>

                  <Text size="md" c="dimmed" ta="justify" className="halfService" lineClamp={2}>
                  Dental Implant, Dental Bridge, Root Canal Treatment, Dental X-Ray Dental Scaling, Tooth Coloured Filling, ...
                  </Text>

                  <Link to="/department/dental" style={{ transition:" 0.5s"}}>
                      <Button color="blue" fullWidth mt="md" radius="md" >
                          Know More
                      </Button>
                  </Link>
              </Stack>
             </Card>    
            </Group>
            
            :
            <Group gap={25} maw="100%" p={0} my={15} >
                  <Card shadow="sm" style={{width:"250px", height:"300px", margin:"5px", cursor:"pointer"}} padding="lg" radius="md"  withBorder onMouseEnter={()=>{
                            setService(0);
                        }} onMouseLeave={()=>{ setService(-1)}}>
                    <Card.Section>
                        <MedicalServicesIcon style={{ fontSize: ser==0?"60px":"80px", color: '#83B81A', textAlign:"center", width:"100%",fontWeight:"100" , transition:"0.5s"}}/>
                    </Card.Section>

                    <Stack justify="space-between"  h={200} align="stretch" gap={0}>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw="500" ta="center" w= "100%" size="xl" className="headingService">Emergency Service</Text>   
                        </Group>

                        <Text size="md" c="dimmed" ta="justify" className="halfService" lineClamp={2}>
                            With skilled healthcare professionals and advanced medical ...
                        </Text>

                        <Link to="/department/emergency" >
                            <Button color="blue" fullWidth mt="md" radius="md" >
                                Know More
                            </Button>
                        </Link>
                    </Stack>
                   </Card> 

                  <Card shadow="sm" style={{width:"250px", height:"300px" , cursor:"pointer"}} padding="lg" radius="md"  withBorder onMouseEnter={()=>{
                            setService(1);
                        }} onMouseLeave={()=>{ setService(-1)}}>
                    <Card.Section>
                    <svg xmlns="http://www.w3.org/2000/svg" height=  {ser==1?"60px":"80px"} style={{textAlign:"center",fontWeight:"100" , width:"100%" , transition:"0.5s"}} fill="#83B81A" viewBox="0 -960 960 960" width="24px"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-560H200v560Zm160 0v-72l-72-84q-11-11-19.5-30t-8.5-44q0-13 2.5-25.5T271-440q-5-11-8-23.5t-3-26.5q0-25 8.5-44t19.5-30l72-84v-72h60v83q0 5-7 19l-80 94q-7 8-10 16.5t-3 17.5q0 20 13 34.5t33 14.5q9 0 17-3t14-10q17-17 38.5-26t44.5-9q23 0 44.5 9t38.5 26q7 7 15 10t16 3q20 0 33-14.5t13-33.5q0-9-3.5-17.5T627-523l-80-95q-4-4-5.5-9t-1.5-10v-83h60v72l73 86q14 16 20.5 34.5T700-489q0 13-3.5 25.5T688-440q6 12 9 24.5t3 25.5q0 25-8.5 44T672-316l-72 84v72h-60v-83q0-6 7-19l80-94q7-8 10-17t3-18q-11 5-22 7.5t-23 2.5q-20 0-40-8t-35-24q-7-8-17.5-12t-22.5-4q-11 0-21.5 4T440-413q-15 16-34.5 24t-39.5 8q-12 0-23.5-2.5T320-391q0 9 3 18t10 17l80 94q3 5 5 9.5t2 9.5v83h-60Zm-160 0v-560 560Z"/></svg>                    </Card.Section>

                    <Stack justify="space-between"  h={200} align="stretch" gap={10}>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw="500" ta="center"  w= "100%" size="xl" className="headingService">Imaging Service</Text>   
                        </Group>

                        <Text size="md" c="dimmed" ta="justify" className="halfService" lineClamp={2}>
                            Chest X-ray, Skull X-ray, Hand X-ray, Wrist X-ray, PNS X-ray, Knee X-ray, Ankle X-ray...
                        </Text>

                        <Link to="/service/xray" style={{ transition:" 0.5s"}}>
                            <Button color="blue" fullWidth mt="md" radius="md" >
                                Know More
                            </Button>
                        </Link>
                    </Stack>
                   </Card>  

                  <Card shadow="sm" style={{width:"250px", height:"300px" , cursor:"pointer"}} padding="lg" radius="md"  withBorder onMouseEnter={()=>{
                            setService(2);
                        }} onMouseLeave={()=>{ setService(-1)}}>
                    <Card.Section>
                    <svg xmlns="http://www.w3.org/2000/svg" height=  {ser==2?"60px":"80px"} style={{textAlign:"center", width:"100%" , transition:"0.5s"}} fill="#83B81A" viewBox="0 -960 960 960" width="24px"><path d="M480-480Zm0 360q-18 0-34.5-6.5T416-146L148-415q-35-35-51.5-80T80-589q0-103 67-177t167-74q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19q100 0 167.5 74T880-590q0 49-17 94t-51 80L543-146q-13 13-29 19.5t-34 6.5Zm40-520q10 0 19 5t14 13l68 102h166q7-17 10.5-34.5T801-590q-2-69-46-118.5T645-758q-31 0-59.5 12T536-711l-27 29q-5 6-13 9.5t-16 3.5q-8 0-16-3.5t-14-9.5l-27-29q-21-23-49-36t-60-13q-66 0-110 50.5T160-590q0 18 3 35.5t10 34.5h187q10 0 19 5t14 13l35 52 54-162q4-12 14.5-20t23.5-8Zm12 130-54 162q-4 12-15 20t-24 8q-10 0-19-5t-14-13l-68-102H236l237 237q2 2 3.5 2.5t3.5.5q2 0 3.5-.5t3.5-2.5l236-237H600q-10 0-19-5t-15-13l-34-52Z"/></svg>                    </Card.Section>

                    <Stack justify="space-between"  h={200} align="stretch" gap={10}>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw="500" ta="center" w= "100%" size="xl" className="headingService">ECG Service</Text>   
                        </Group>

                        <Text size="md" c="dimmed" ta="justify" className="halfService" lineClamp={2}>
                            We provide ECG services for best diagnostic practices    ...
                        </Text>

                        <Link to="/service/ecg" style={{ transition:" 0.5s"}}>
                            <Button color="blue" fullWidth mt="md" radius="md" >
                                Know More
                            </Button>
                        </Link>
                    </Stack>
                   </Card>   

                  <Card shadow="sm" style={{width:"250px", height:"300px" , cursor:"pointer"}} padding="lg" radius="md"  withBorder onMouseEnter={()=>{
                            setService(3);
                        }} onMouseLeave={()=>{ setService(-1)}}>
                    <Card.Section>
                    <svg xmlns="http://www.w3.org/2000/svg" height=  {ser==3?"60px":"80px"} style={{textAlign:"center", width:"100%" , transition:"0.5s"}} fill="#83B81A" viewBox="0 -960 960 960" width="24px" ><path d="M680-875q66 0 113 47t47 113q0 11-1.5 29.5T834-643l-55 403q-5 38-34.5 62T677-154q-23 0-42.5-10T602-192L495-348q-2-4-6.5-5.5T479-355q-4 0-16 9L359-195q-14 20-34.5 30.5T281-154q-38 0-67-24.5T180-241l-54-402q-3-24-4.5-42.5T120-715q0-66 47-113t113-47q36 0 57.5 9.5T379-845q20 11 42.5 20.5T480-815q36 0 58.5-9.5T581-845q20-11 42-20.5t57-9.5Zm0 80q-23 0-40.5 9.5T601-765q-21 11-49 20.5t-72 9.5q-44 0-72-9.5T359-765q-21-11-38.5-20.5T280-795q-33 0-56.5 23.5T200-715q0 8 1 23t4 35l55 405q1 8 7 12.5t14 4.5q5 0 9-2t6-6l101-148q14-20 36-32t47-12q25 0 47 12t36 32l103 151q2 3 5 4.5t7 1.5q8 0 14.5-4.5T700-251l55-406q3-20 4-35t1-23q0-33-23.5-56.5T680-795ZM480-515Z"/></svg>                    </Card.Section>

                    <Stack justify="space-between"  h={200} align="stretch" gap={10}>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw="500" ta="center" w= "100%" size="xl" className="headingService">Dental Service</Text>   
                        </Group>

                        <Text size="md" c="dimmed" ta="justify" className="halfService" lineClamp={2}>
                        Dental Implant, Dental Bridge, Root Canal Treatment, Dental X-Ray Dental Scaling, Tooth Coloured Filling, ...
                        </Text>

                        <Link to="/department/dental" style={{ transition:" 0.5s"}}>
                            <Button color="blue" fullWidth mt="md" radius="md" >
                                Know More
                            </Button>
                        </Link>
                    </Stack>
                   </Card>    



            </Group>}
            
            <ReadMore linkTo={"/department"}  text="Show all Services"/>

        </Group>
    )
}

export default Service;
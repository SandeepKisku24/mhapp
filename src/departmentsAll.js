import { Container, Group, Stack, Card, Image,Text, Badge, Button } from "@mantine/core";
import React, { useState } from "react";
import { mobile } from "./screenSizes";
import { useMediaQuery } from "@mantine/hooks";
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { SvgIcon } from "@mui/material";
import { Link } from "react-router-dom";

const DepartmentsAll = ()=>{
    const isMobile = useMediaQuery(mobile);
    const [ser,setService] = useState(-1);
    return(
        <Group maw={isMobile?"95%":"100%"} justify="center" mx="auto" my="" style={{backgroundColor:"#B0C5F9"}}>
            <Group maw="100%" c="#fff" my={15}>
                <Text size="25px" fw={700} w="50%" ta="center">Services Provided by Mercy Hospital</Text>
                <Group maw="40%">
                    <Text ta="justify"> 
                    At Mercy Hospital, we provide a wide range of medical services for the holistic treatment of our patients, ensuring quality health care.

                    </Text>
                </Group>
            </Group>
            {isMobile?<Stack></Stack>:
            <Group gap={15} maw="90%" my={15}  justify="center">
                  <Card shadow="sm" style={{width:"250px", height:"350px", margin:"5px", cursor:"pointer"}} padding="lg" radius="md"  withBorder onMouseEnter={()=>{
                            setService(0);
                        }} onMouseLeave={()=>{ setService(-1)}}>
                    <Card.Section>
                        <MedicalServicesIcon style={{ fontSize: ser==0?"60px":"80px", color: '#00a217', textAlign:"center", width:"100%",fontWeight:"100" , transition:"0.5s"}}/>
                    </Card.Section>

                    <Stack justify="space-between"  h={250} align="stretch" gap={10}>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw="bold" ta="center" w= "100%" size="xl">Emergency Service</Text>   
                        </Group>

                        <Text size="md" c="dimmed" ta="justify" lineClamp={3}>
                            With skilled healthcare professionals and advanced medical ...
                        </Text>

                        <Link to="/department/emergency" style={{opacity:ser===0?1:0, transition:" 0.5s"}}>
                            <Button color="blue" fullWidth mt="md" radius="md" >
                                Know More
                            </Button>
                        </Link>
                    </Stack>
                   </Card> 

                  <Card shadow="sm" style={{width:"250px", height:"350px" , cursor:"pointer"}} padding="lg" radius="md"  withBorder onMouseEnter={()=>{
                            setService(1);
                        }} onMouseLeave={()=>{ setService(-1)}}>
                    <Card.Section>
                    <svg xmlns="http://www.w3.org/2000/svg" height=  {ser==1?"60px":"80px"} style={{textAlign:"center",fontWeight:"100" , width:"100%" , transition:"0.5s"}} fill="#00a217" viewBox="0 -960 960 960" width="24px"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-560H200v560Zm160 0v-72l-72-84q-11-11-19.5-30t-8.5-44q0-13 2.5-25.5T271-440q-5-11-8-23.5t-3-26.5q0-25 8.5-44t19.5-30l72-84v-72h60v83q0 5-7 19l-80 94q-7 8-10 16.5t-3 17.5q0 20 13 34.5t33 14.5q9 0 17-3t14-10q17-17 38.5-26t44.5-9q23 0 44.5 9t38.5 26q7 7 15 10t16 3q20 0 33-14.5t13-33.5q0-9-3.5-17.5T627-523l-80-95q-4-4-5.5-9t-1.5-10v-83h60v72l73 86q14 16 20.5 34.5T700-489q0 13-3.5 25.5T688-440q6 12 9 24.5t3 25.5q0 25-8.5 44T672-316l-72 84v72h-60v-83q0-6 7-19l80-94q7-8 10-17t3-18q-11 5-22 7.5t-23 2.5q-20 0-40-8t-35-24q-7-8-17.5-12t-22.5-4q-11 0-21.5 4T440-413q-15 16-34.5 24t-39.5 8q-12 0-23.5-2.5T320-391q0 9 3 18t10 17l80 94q3 5 5 9.5t2 9.5v83h-60Zm-160 0v-560 560Z"/></svg>                    </Card.Section>

                    <Stack justify="space-between"  h={250} align="stretch" gap={10}>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw="bold" ta="center" w= "100%" size="xl">Imaging Service</Text>   
                        </Group>

                        <Text size="md" c="dimmed" ta="justify" lineClamp={3}>
                            Chest X-ray, Skull X-ray, Hand X-ray, Wrist X-ray, PNS X-ray, Knee X-ray, Ankle X-ray...
                        </Text>

                        <Link to="/service/xray" style={{opacity:ser===1?1:0, transition:" 0.5s"}}>
                            <Button color="blue" fullWidth mt="md" radius="md" >
                                Know More
                            </Button>
                        </Link>
                    </Stack>
                   </Card>  

                  <Card shadow="sm" style={{width:"250px", height:"350px" , cursor:"pointer"}} padding="lg" radius="md"  withBorder onMouseEnter={()=>{
                            setService(2);
                        }} onMouseLeave={()=>{ setService(-1)}}>
                    <Card.Section>
                    <svg xmlns="http://www.w3.org/2000/svg" height=  {ser==2?"60px":"80px"} style={{textAlign:"center", width:"100%" , transition:"0.5s"}} fill="#00a217" viewBox="0 -960 960 960" width="24px"><path d="M480-480Zm0 360q-18 0-34.5-6.5T416-146L148-415q-35-35-51.5-80T80-589q0-103 67-177t167-74q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19q100 0 167.5 74T880-590q0 49-17 94t-51 80L543-146q-13 13-29 19.5t-34 6.5Zm40-520q10 0 19 5t14 13l68 102h166q7-17 10.5-34.5T801-590q-2-69-46-118.5T645-758q-31 0-59.5 12T536-711l-27 29q-5 6-13 9.5t-16 3.5q-8 0-16-3.5t-14-9.5l-27-29q-21-23-49-36t-60-13q-66 0-110 50.5T160-590q0 18 3 35.5t10 34.5h187q10 0 19 5t14 13l35 52 54-162q4-12 14.5-20t23.5-8Zm12 130-54 162q-4 12-15 20t-24 8q-10 0-19-5t-14-13l-68-102H236l237 237q2 2 3.5 2.5t3.5.5q2 0 3.5-.5t3.5-2.5l236-237H600q-10 0-19-5t-15-13l-34-52Z"/></svg>                    </Card.Section>

                    <Stack justify="space-between"  h={250} align="stretch" gap={10}>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw="bold" ta="center" w= "100%" size="xl">ECG Service</Text>   
                        </Group>

                        <Text size="md" c="dimmed" ta="justify" lineClamp={3}>
                        An electrocardiogram (ECG) is a simple, non-invasive test that records the electrical activity of the heart. An ECG can help diagnose certain heart conditions, including abnormal heart rhythms and coronary heart disease (heart attack and angina).

                        </Text>

                        <Link to="/service/ecg" style={{opacity:ser===2?1:0, transition:" 0.5s"}}>
                            <Button color="blue" fullWidth mt="md" radius="md" >
                                Know More
                            </Button>
                        </Link>
                    </Stack>
                   </Card>   

                  <Card shadow="sm" style={{width:"250px", height:"350px" , cursor:"pointer"}} padding="lg" radius="md"  withBorder onMouseEnter={()=>{
                            setService(3);
                        }} onMouseLeave={()=>{ setService(-1)}}>
                    <Card.Section>
                    <svg xmlns="http://www.w3.org/2000/svg" height=  {ser==3?"60px":"80px"} style={{textAlign:"center", width:"100%" , transition:"0.5s"}} fill="#00a217" viewBox="0 -960 960 960" width="24px" ><path d="M680-875q66 0 113 47t47 113q0 11-1.5 29.5T834-643l-55 403q-5 38-34.5 62T677-154q-23 0-42.5-10T602-192L495-348q-2-4-6.5-5.5T479-355q-4 0-16 9L359-195q-14 20-34.5 30.5T281-154q-38 0-67-24.5T180-241l-54-402q-3-24-4.5-42.5T120-715q0-66 47-113t113-47q36 0 57.5 9.5T379-845q20 11 42.5 20.5T480-815q36 0 58.5-9.5T581-845q20-11 42-20.5t57-9.5Zm0 80q-23 0-40.5 9.5T601-765q-21 11-49 20.5t-72 9.5q-44 0-72-9.5T359-765q-21-11-38.5-20.5T280-795q-33 0-56.5 23.5T200-715q0 8 1 23t4 35l55 405q1 8 7 12.5t14 4.5q5 0 9-2t6-6l101-148q14-20 36-32t47-12q25 0 47 12t36 32l103 151q2 3 5 4.5t7 1.5q8 0 14.5-4.5T700-251l55-406q3-20 4-35t1-23q0-33-23.5-56.5T680-795ZM480-515Z"/></svg>                    </Card.Section>

                    <Stack justify="space-between"  h={250} align="stretch" gap={10}>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw="bold" ta="center" w= "100%" size="xl">Dental Service</Text>   
                        </Group>

                        <Text size="md" c="dimmed" ta="justify" lineClamp={3}>
                        Dental Implant, Dental Bridge, Root Canal Treatment, Dental X-Ray Dental Scaling, Tooth Coloured Filling, ...
                        </Text>

                        <Link to="/department/dental" style={{opacity:ser===3?1:0, transition:" 0.5s"}}>
                            <Button color="blue" fullWidth mt="md" radius="md" >
                                Know More
                            </Button>
                        </Link>
                    </Stack>
                   </Card> 

                  <Card shadow="sm" style={{width:"250px", height:"350px" , cursor:"pointer"}} padding="lg" radius="md"  withBorder onMouseEnter={()=>{
                            setService(4);
                        }} onMouseLeave={()=>{ setService(-1)}}>
                    <Card.Section>
                    <svg xmlns="http://www.w3.org/2000/svg" height=  {ser==4?"60px":"80px"} style={{textAlign:"center", width:"100%" , transition:"0.5s"}} fill="#00a217" viewBox="0 -960 960 960" width="24px"><path d="M480-72q-46 0-115.5-14T264-115q-11-5-17.5-15t-6.5-22v-40h-40q-17 0-28.5-11.5T160-232v-60q0-17 11.5-28.5T200-332h40v-80h-40q-17 0-28.5-11.5T160-452v-60q0-17 11.5-28.5T200-552h40v-80h-40q-17 0-28.5-11.5T160-672v-60q0-17 11.5-28.5T200-772h40v-60q0-22 18-33t38-3q1 0 55 18t129 18q75 0 129-18t55-18q20-8 38 3.5t18 32.5v60h40q17 0 28.5 11.5T800-732v60q0 17-11.5 28.5T760-632h-40v80h40q17 0 28.5 11.5T800-512v60q0 17-11.5 28.5T760-412h-40v80h40q17 0 28.5 11.5T800-292v60q0 17-11.5 28.5T760-192h-40v40q0 12-6.5 22T696-115q-31 15-100.5 29T480-72Zm0-534q38 0 80.5-7t79.5-20v-143q-38 11-79.5 17.5T480-752q-38 0-79.5-6.5T320-776v143q36 13 79 20t81 7Zm0 228q37 0 79.5-7t80.5-21v-144q-44 12-83.5 18t-76.5 6q-39 0-80-6t-80-18v144q38 14 80.5 21t79.5 7Zm0 226q38 0 80.5-7t79.5-20v-143q-38 11-79.5 17.5T480-298q-38 0-79.5-6.5T320-322v143q36 13 79 20t81 7Z"/></svg>                    
                    </Card.Section>

                    <Stack justify="space-between"  h={250} align="stretch" gap={10}>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw="bold" ta="center" w= "100%" size="xl">Orthopedic</Text>   
                        </Group>

                        <Text size="md" c="dimmed" ta="justify" lineClamp={3}>
                        Orthopedic services encompass a wide range of medical care focused on diagnosing, treating, and managing conditions related to the musculoskeletal system. This system includes bones, joints, muscles, ligaments, tendons, and nerves. Orthopedic services are vital for addressing various orthopedic issues.

                        </Text>

                        <Link to="/department/orthopedic" style={{opacity:ser===4?1:0, transition:" 0.5s"}}>
                            <Button color="blue" fullWidth mt="md" radius="md" >
                                Know More
                            </Button>
                        </Link>
                    </Stack>
                   </Card>

                  <Card shadow="sm" style={{width:"250px", height:"350px" , cursor:"pointer"}} padding="lg" radius="md"  withBorder onMouseEnter={()=>{
                            setService(5);
                        }} onMouseLeave={()=>{ setService(-1)}}>
                    <Card.Section>
                    <svg xmlns="http://www.w3.org/2000/svg" height=  {ser==5?"60px":"80px"} style={{textAlign:"center", width:"100%" , transition:"0.5s"}} fill="#00a217" viewBox="0 -960 960 960" width="24px" ><path d="M420-280h120v-100h100v-120H540v-100H420v100H320v120h100v100ZM160-120v-480l320-240 320 240v480H160Zm80-80h480v-360L480-740 240-560v360Zm240-270Z"/></svg>                    
                    </Card.Section>

                    <Stack justify="space-between"  h={250} align="stretch" gap={10}>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw="bold" ta="center" w= "100%" size="xl">Family Medicine</Text>   
                        </Group>

                        <Text size="md" c="dimmed" ta="justify" lineClamp={3}>
                        In Mercy Hospital, Family medicine physicians, the stalwarts of our department, possess a unique skill set honed to address a broad spectrum of medical conditions across the lifespan. From the tender care of infancy to the seasoned wisdom of old age, our physicians provide comprehensive and personalized medical attention.

                        </Text>

                        <Link to="/department/famililymedicine" style={{opacity:ser===5?1:0, transition:" 0.5s"}}>
                            <Button color="blue" fullWidth mt="md" radius="md" >
                                Know More
                            </Button>
                        </Link>
                    </Stack>
                   </Card>    

                  <Card shadow="sm" style={{width:"250px", height:"350px" , cursor:"pointer"}} padding="lg" radius="md"  withBorder onMouseEnter={()=>{
                            setService(6);
                        }} onMouseLeave={()=>{ setService(-1)}}>
                    <Card.Section>
                    <svg xmlns="http://www.w3.org/2000/svg" height=  {ser==6?"60px":"80px"} style={{textAlign:"center", width:"100%" , transition:"0.5s"}} fill="#00a217" viewBox="0 -960 960 960" width="24px"><path d="M120-120q-33 0-56.5-23.5T40-200v-200q0-33 23.5-56.5T120-480v-171q-18-11-29-28.5T80-720v-40q0-33 23.5-56.5T160-840h200q33 0 56.5 23.5T440-760v40q0 23-11 40.5T400-651v171h160v-171q-18-11-29-28.5T520-720v-40q0-33 23.5-56.5T600-840h200q33 0 56.5 23.5T880-760v40q0 23-11 40.5T840-651v171q33 0 56.5 23.5T920-400v200q0 33-23.5 56.5T840-120H120Zm480-600h200v-40H600v40Zm-440 0h200v-40H160v40Zm480 240h120v-160H640v160Zm-440 0h120v-160H200v160Zm-80 280h720v-200H120v200Zm40-520v-40 40Zm440 0v-40 40ZM120-200v-200 200Z"/></svg>                    
                    </Card.Section>

                    <Stack justify="space-between"  h={250} align="stretch" gap={10}>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw="bold" ta="center" w= "100%" size="xl">Laboratory/ Pathology</Text>   
                        </Group>

                        <Text size="md" c="dimmed" ta="justify" lineClamp={3}>
                        In Mercy Hospital Laboratory and Pathology Department, we offer a comprehensive range of diagnostic tests and analyses to aid in the identification, monitoring, and management of various medical conditions. From cardiovascular diseases like myocardial infarction and cardiovascular inflammation to cancer screenings for prostate cancer and liver cancer, our department is equipped to provide accurate and timely results.

                        </Text>

                        <Link to="/service/lab" style={{opacity:ser===6?1:0, transition:" 0.5s"}}>
                            <Button color="blue" fullWidth mt="md" radius="md" >
                                Know More
                            </Button>
                        </Link>
                    </Stack>
                   </Card>

                  <Card shadow="sm" style={{width:"250px", height:"350px" , cursor:"pointer"}} padding="lg" radius="md"  withBorder onMouseEnter={()=>{
                            setService(7);
                        }} onMouseLeave={()=>{ setService(-1)}}>
                    <Card.Section>
                    <svg xmlns="http://www.w3.org/2000/svg" height=  {ser==7?"60px":"80px"} style={{textAlign:"center", width:"100%" , transition:"0.5s"}} fill="#00a217" viewBox="0 -960 960 960" width="24px"><path d="M540-80q-108 0-184-76t-76-184v-23q-86-14-143-80.5T80-600v-240h120v-40h80v160h-80v-40h-40v160q0 66 47 113t113 47q66 0 113-47t47-113v-160h-40v40h-80v-160h80v40h120v240q0 90-57 156.5T360-363v23q0 75 52.5 127.5T540-160q75 0 127.5-52.5T720-340v-67q-35-12-57.5-43T640-520q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T800-407v67q0 108-76 184T540-80Zm220-400q17 0 28.5-11.5T800-520q0-17-11.5-28.5T760-560q-17 0-28.5 11.5T720-520q0 17 11.5 28.5T760-480Zm0-40Z"/></svg>                    
                    </Card.Section>

                    <Stack justify="space-between"  h={250} align="stretch" gap={10}>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw="bold" ta="center" w= "100%" size="xl">General Medicine</Text>   
                        </Group>

                        <Text size="md" c="dimmed" ta="justify" lineClamp={3}>
                        In Mercy Hospital, the General Medicine Department stands as the cornerstone of adult healthcare, offering comprehensive services in diagnosis, treatment, and prevention of a wide array of diseases. Commonly referred to as internal medicine, our team of dedicated physicians specializes in addressing the unique medical needs of adults.

                        </Text>

                        <Link to="/department/generalmedicine" style={{opacity:ser===7?1:0, transition:" 0.5s"}}>
                            <Button color="blue" fullWidth mt="md" radius="md" >
                                Know More
                            </Button>
                        </Link>
                    </Stack>
                   </Card>    



            </Group>}
        </Group>
    )
}

export default DepartmentsAll;
import React, { useState } from "react";
import { Stack, Button, Group, Text, Collapse, Box, Title } from "@mantine/core";
import { faqdata } from "./faqData";
import "./faq.css"
import { useMediaQuery } from "@mantine/hooks";
import { mobile } from "./screenSizes";
const Faq = () => {
    const [openedIndex, setOpenedIndex] = useState(null);

    const toggle = (index) => {
        setOpenedIndex(openedIndex === index ? null : index);
    };
    const isMobile = useMediaQuery(mobile);

    return (
        <div className="faqs">
            <Stack bg="#fff" maw= {isMobile?"90%":"50%"} mx="auto">
            <Title maw="100%" ta="center" my={20}>Frequently Asked Questions</Title>
            <Stack gap={5} my={20} bg="#fff" >
                {faqdata.map((item, index) => (
                    <Box maw={isMobile?"90%": "400"} mx="auto" key={index} >
                        <Group justify="center" mb={5}>
                            <Button onClick={() => toggle(index)} w={400} my={10}>
                                {openedIndex === index ? '-' : '+'} {item.que}
                            </Button>
                        </Group>

                        <Collapse in={openedIndex === index}>
                            <Text>{item.ans}</Text>
                        </Collapse>
                    </Box>
                ))}
            </Stack>
            </Stack>
        </div>
    );
};

export default Faq;

import React from "react";
import "./readMore.css"
import { Link } from "react-router-dom";
import { Group } from "@mantine/core";
const ReadMore =({linkTo, text})=>{
    return(
        <Group className="readMore" gap={10} my="1%">
            <Group gap={5} className="readMe">
                <Link to={linkTo}> {text} </Link>
            </Group>
        </Group>
    )
}

export default ReadMore;
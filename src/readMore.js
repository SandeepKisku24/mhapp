import React from "react";
import "./readMore.css"
import { Link } from "react-router-dom";
import { Group } from "@mantine/core";
const ReadMore =({linkTo})=>{
    return(
        <Group className="readMore" gap={10} my="4%">
            <Group gap={10} className="readMe">
                <Link to={linkTo}> ReadMore </Link>
            </Group>
        </Group>
    )
}

export default ReadMore;
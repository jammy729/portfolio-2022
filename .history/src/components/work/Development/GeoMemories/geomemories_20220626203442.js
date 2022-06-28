import React from  'react'
import {
    Container,
    Box,
    List,
    ListItem,
    Divider, 
    AspectRatio
} from '@chakra-ui/react'
import { Title, WorkImage, Tag } from "../../../layouts/work-grid"

const GeoMemories = () => {
    return (
       <Box>
        <Container maxW='850px'>
            <Title>GeoMemories</Title>

            <List py={2}>
                <ListItem>
                    <Tag>Type</Tag> Experience Design, Academic Team Project
                </ListItem>
                <ListItem>
                    <Tag>Partner</Tag> Tobby, Hana, Amy, Mutte, Meng, 
                </ListItem>

            </List>

        </Container>
       </Box>
    )
}

export default GeoMemories
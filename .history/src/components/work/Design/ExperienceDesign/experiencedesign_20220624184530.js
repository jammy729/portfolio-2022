import React from  'react'
import {
    Container,
    Box,
    List,
    ListItem,
    Divider, 
    AspectRation
} from '@chakra-ui/react'
import { Title, WorkImage, Tag } from "../../../layouts/work-grid"

const ExperienceDesign = () => {
    return (
       <Box>
        <Container maxW='850px'>
            <Title>Be My Eyes</Title>

            <List py={2}>
                <ListItem>
                    <Tag>Type</Tag> Experience Design, Academic Team Project
                </ListItem>
                <ListItem>
                    <Tag>Partner</Tag> Tobby, Hana, Amy, 
                </ListItem>

            </List>

        </Container>
       </Box>
    )
}

export default ExperienceDesign
import React from 'react'
import {
  Container,
  Box,
  List,
  ListItem,
  Divider,
  AspectRatio
} from '@chakra-ui/react'
import { Title, WorkImage, Tag } from '../../../layouts/work-grid'

const GeoMemories = () => {
  return (
    <Box>
      <Container maxW='850px'>
        <Title>GeoMemories</Title>

        {/* BADGES  */}
        <List py={2}>
          <ListItem>
            <Tag>Type</Tag> Mobile Development, Academic Team Project
          </ListItem>
          <ListItem>
            <Tag>Partner</Tag> Christine Drummond
          </ListItem>
          <ListItem>
            <Tag>Stack</Tag> Java (Android Studio)
          </ListItem>
        </List>

        <Divider />

        {/* WRITINGS  */}
        <Writings />
      </Container>
    </Box>
  )
}

export default GeoMemories

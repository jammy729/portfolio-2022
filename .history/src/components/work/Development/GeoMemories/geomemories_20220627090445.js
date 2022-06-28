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
import { Writings } from '../../layout'

const GeoMemories = () => {
  return (
    <Box>
      <Container maxW='800px'>
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
            <Tag>Stack</Tag> Java (Android Studio), XML
          </ListItem>
        </List>

        <Divider borderColor="whiteAlpha.200" borderWidth={1}/>

        {/* WRITINGS  */}
        <Writings 
        size="md"
        title="Summary"
        description="GeoMemories is a travel journal application,
        allowing users to capture memories by pinning the location 
        on a map as a destination marker and create posts. It allows
        users to "
        />
      </Container>
    </Box>
  )
}

export default GeoMemories

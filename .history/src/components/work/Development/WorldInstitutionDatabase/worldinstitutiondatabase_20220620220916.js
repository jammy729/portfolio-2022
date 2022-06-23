import React from 'react'
import { Container, Box, List, ListItem, Text } from '@chakra-ui/react'
import { Title, WorkImage, Tag } from '../../../layouts/work-grid'
import { Writings } from '../../layout'
import { useMediaQuery } from '@chakra-ui/media-query'
import dbms from '../Images/er-diagram.png'
import cover from '../Images/image4.png'
import register from "../Images/register.png"
const WorldInstitutionDatabase = () => {
  const [isLargeScreen] = useMediaQuery('(min-width:750px)')

  return (
    <Box>
      <Container maxW="800px">
        <Title> World Institution Database </Title>
        <WorkImage src={cover} alt='Entity Relationship Diagram' w='full' />
        {/* <AspectRatio ratio={isLargeScreen ? 2 : 1}>
          <video controls>
            <source
              src={require('./universityDatabase.mp4')}
              type='video/mp4'
            />
          </video>
        </AspectRatio> */}
        {/* <Text fontSize={isLargeScreen ? 'xl' : 'lg'} py={3}>
          A functional web application that allows users to browse through a
          list of institutions around the world to gain insights. Used PHP, HTML,
          jQuery, and MySQL.
        </Text> */}
        <List py={2}>
          <ListItem>
            <Tag> Type </Tag> Web Development, Academic Team Project
          </ListItem>
          <ListItem>
            <Tag> Partner </Tag> Ha Thu N.
          </ListItem>
          <ListItem>
            <Tag> Stack </Tag> HTML, CSS, PHP, MySQL, jQuery
          </ListItem>
          <ListItem>
            <Tag> Source </Tag>
            <a href='https://github.com/rubik516/iat352-institution-reviews-web-app'>
              Github Link
            </a>
          </ListItem>
        </List>
        <Container>

        </Container>
      
      </Container>
    </Box>
  )
}

export default WorldInstitutionDatabase

// My role in this project was the design of the Entity-Relationship (ER) Diagram, Schema Table based on the ER diagram, and
// front - end and back - end for the login and register form.This step was important because to understand the data that are needed
// for the web application, data requirement analysis is needed to establish, ideate and validates the datas that are needed to '
{/* <WorkImage
src={dbms}
alt='Entity Relationship Diagram'
caption='Entity-Relationship diagram for the web application World Institution Database'
w='full'
/> */}
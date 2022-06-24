import React from 'react'
import {
  Container,
  Box,
  List,
  ListItem,
  Text,
  AspectRatio
} from '@chakra-ui/react'
import { Title, WorkImage, Tag } from '../../../layouts/work-grid'
import { Writings } from '../../layout'
import { useMediaQuery } from '@chakra-ui/media-query'
import dbms from '../Images/er-diagram.png'
import cover from '../Images/image4.png'
const WorldInstitutionDatabase = () => {
  const [isLargeScreen] = useMediaQuery('(min-width:750px)')

  return (
    <Box>
      <Container>
        <Title> World Institution Database </Title>
      </Container>
      <Container maxW={isLargeScreen ? '70%' : '100%'}>
        <AspectRatio ratio={isLargeScreen ? 2 : 1}>
          <video controls>
            <source
              src={require('./universityDatabase.mp4')}
              type='video/mp4'
            />
          </video>
        </AspectRatio>
      </Container>
      <Container>
        <Text fontSize={isLargeScreen ? 'xl' : 'lg'} py={3}>
          A functional web application that allows users to browse through a
          list of institutions around the world to gain insights.Used PHP, HTML,
          jQuery, and MySQL.
        </Text>
        <List py={2}>
          <ListItem>
            <Tag> Type </Tag> Web Development
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
              https: //github.com/rubik516/iat352-institution-reviews-web-app
            </a>
          </ListItem>
        </List>
        <Writings
          title='Summary'
          description='World Institution Database is a web application built with a team of
    two with the main focus around backend functionalities.It is a functional web application that allows users to browse through a populated list of institutions from the database around the world to gain insights.
    '
        />
      </Container>
      <Box align='center'>
        <WorkImage
          src={dbms}
          alt='Entity Relationship Diagram'
          caption='Entity-Relations`hip diagram for the web application World Institution Database'
        />
      </Box>
      <Container>
        <Writings
          title='Contribution'
          description='My role in this project was the design of the Entity-Relationship (ER) Diagram, Schema Table based on the ER diagram, and
    front - end and back - end
    for the login and register form.This step was important because to understand the data that are needed
    for the web application, data requirement analysis is needed to establish, ideate and validates the datas that are needed to '
        />
      </Container>
    </Box>
  )
}

export default WorldInstitutionDatabase
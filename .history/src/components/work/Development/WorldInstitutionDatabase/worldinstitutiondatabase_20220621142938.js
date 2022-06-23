import React from 'react'
import { Container, Box, List, ListItem, Text } from '@chakra-ui/react'
import { Title, WorkImage, Tag } from '../../../layouts/work-grid'
import { Writings } from '../../layout'
import { useMediaQuery } from '@chakra-ui/media-query'
import dbms from '../Images/er-diagram.png'
import cover from '../Images/image4.png'
import register from '../Images/register.png'
const WorldInstitutionDatabase = () => {
  const [isLargeScreen] = useMediaQuery('(min-width:750px)')

  return (
    <Box>
      <Container maxW='800px'>
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
        <Writings
          size='md'
          title='Summary'
          description='World Institution Database is a web application built with a team of
    two with the main focus around backend functionalities. It is a functional web application that allows users to browse through a populated list of institutions from the database around the world to gain insights.
    '
        />

        <Writings
          size='md'
          title='Contribution'
          description='My role in this project divided into two parts, the design of the Entity-Relationship diagram and schema table, 
          and the frontend and backend development of the login and register form.'
        />

        <WorkImage
          src={dbms}
          alt='Entity Relationship Diagram'
          caption='Entity-Relationship diagram for the web application World Institution Database'
          w='full'
        />
        <Writings
          size='md'
          title='Entity-Relationship Diagram'
          description='I created an entity-relationship diagram (ER) diagram to illustrate how entities relate to each other in
          a system. This step was one of the most important steps because it is the foundation of modelling the data stored in the database  and
          howimage8.jpg the database is built.'
        />
        <Writings
        size="sm"
        title="Justification for the ER Diagram Design"
        description="
        To create an ER diagram, understanding what kind of entities are involved in this 
        
        This web application aims to provide a platform where current and alumni students can
        share their experiences at their institutions while prospective students can read the reviews. For the 
        sharing experiences, only the registered members can share experiences and have favourite list of institution. 
        Therefore, there are two entities which are 'Users' and 'Institution', and two relationships between the two
        entities are the 'Comment' and 'Favourite'"
        />
      </Container>
    </Box>
  )
}

export default WorldInstitutionDatabase

// My role in this project was the design of the Entity-Relationship (ER) Diagram, Schema Table based on the ER diagram, and
// front - end and back - end for the login and register form.This step was important because to understand the data that are needed
// for the web application, data requirement analysis is needed to establish, ideate and validates the datas that are needed to '

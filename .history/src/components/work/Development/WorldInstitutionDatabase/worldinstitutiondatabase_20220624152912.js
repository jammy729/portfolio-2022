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
import dbms from '../Images/er-diagram.png'
import cover from '../Images/image4.png'
import register from '../Images/register.png'
import register_code from '../Images/register_code.png'
import login_code from '../Images/login_code.png'
const WorldInstitutionDatabase = () => {
  return (
    <Box>
      <Container maxW='800px'>
        <Title> World Institution Database </Title>
        <WorkImage src={cover} alt='Entity Relationship Diagram' w='full' />

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
            <a
              target='blank'
              href='https://github.com/rubik516/iat352-institution-reviews-web-app'
            >
              Github Link
            </a>
          </ListItem>
        </List>
        <Divider />
        <Writings
          size='md'
          title='Summary'
          description='World Institution Database is a web application built with a team of
          two with the main focus around backend functionalities. It is a functional web application 
          that allows users to browse through a populated list of institutions from the database 
          around the world to gain insight˝s.'
        />
        <Divider />

        <Writings
          size='md'
          title='Contribution'
          description='My role in this project divided into two parts, the design of the Entity-Relationship diagram and schema table, 
          and the frontend and backend development of the login and register form.'
        />

        <Divider />

        <Writings
          size='md'
          title='Database Analysis'
          description='I created an entity-relationship diagram (ER) diagram to illustrate how entities relate to each other in
          a system. This step was one of the most important steps because it is the foundation of modelling the data stored in the 
          database and how the database is built.'
        />

        <WorkImage
          src={dbms}
          alt='Entity Relationship Diagram'
          caption='Entity-Relationship diagram for the web application World Institution Database'
          w='full'
        />
        <Writings
          size='sm'
          title='Justification for the ER Diagram Design'
          description='
        To create an ER diagram, understanding what kind of entities are involved in this web application and
        the relationship between the two entities.'
        />
        <Writings
          description="This web application aims to provide a platform where current and former students can
          share their experiences at their institutions while prospective students can red the experiences
        posted. The web application is set in a way that only the registered members can share experiences 
        and have favourite lists of institutions. Therefore, there are two entities which are the 'Users' 
        and 'Institution', and two relationships between the two entities are the 'Comment' and 'Favourite'"
        />
        <Writings
          description='These two distinctive entities: User and Institution, and the two relationships: Comment 
        Favourite grants distinctive features for members and non-members to favourite institutions, and read and
        post experiences.'
        />

        <Divider />

        {/* FRONT-END */}
        <Writings
          size='md'
          title='Frontend Development'
          description='After quick sketches and prototype on Figma on how I wanted the forms to look like for login
        and register page, I have decided to code with HTML, and CSS. Wanting the responsiveness in the login and 
        registration form, I used Bootstrap (CSS Framework) to have the form responsive. Instead of inventing a 
        unique form fields, I have used simple Bootstrap forms so user can focus on the task to login or register.  '
        />
        <WorkImage
          src={register}
          alt='Registration Form Page'
          caption='Registration form page for the web application'
          w='full'
        />

        <Writings
          size='sm'
          title='Validation of the forms'
          description='Registration validation is supported and done 
          using a jQuery Validation Plugin to check whether the forms 
          are filled correctly following a set rules. To satisfy the 
          requirement, such all fields must be filled, a user must 
          fill the username length between 5-25 characters, password 
          lengths between 5-30  characters and other rules. If the user
          do not complete any forms, it will output an informative error
          to the user to guide through the registration process. '
        />

        <WorkImage
          src={register_code}
          alt='Register User PHP Code'
          caption='PHP code for when the registration form fills are set'
          w='full'
        />
        <Writings
          size='sm'
          title='Backend Development'
          description='Once the user fill the form and satisfy the rules,
            it connects to MySQL database, and receive all the input value
            form from the user and check from the database whether the
            username or email value exists in the database because the
            username and email is a key value. Finally, if there is no error
            issues with the form, it encrypt password using message-digest 
            algorithm (MD5) to secure from SQL injection and insert the user 
            information into the database with the encrypted password'
        />

        <Writings
          description='Once registered as a member, user can use the username
          and password to login. Similarly like the registration, it receive from
          the value from the form filled and display error messages if
          not filled. When the forms are filled, it checks the database
          to see if the username and password exists, and if it exists,
          it grants login member functionalities, and if not, it prompts an
          error.'
        />

        <WorkImage
          src={register}
          alt='Registration Form Page'
          caption='Registration form page for the web application'
          w='full'
        />

        <Divider />

        <Writings
          size='md'
          title='Challenges'
          description='This project was very challenging so the group naturally led the
        focus to the backend functionalities and less on the frontend. Looking back on
        the project, there are many frontend mistakes that should have been avoided 
        such as not working on a design system and using a serif font instead of sans-serif
        because it reduces text visibility.  Due to new languages introduced which were 
        PHP, jQuery and SQL, my group struggled a little and we often found ourselves going 
        back to lecture and lab tutorials and StackOverflow. Surprisingly, AJAX to update 
        the frontend web page when the user filters and display favourite institutions were 
        easier than expected and was'
        />

        <Divider />

        <Writings
          size='md'
          title='Reflection'
          description='Through this project, I have seen myself grow as a developer in terms 
        of collaboration with a member and good understanding of backend development. I have
        learned how to organize the project in terms of timeline to ensure my group meet the
        deadline and how to organize the file structure and write clean code to ensure that
        the group can easily understand the code and find files. If I could change one thing
        about this project, it would mainly be the frontend development. Because the group 
        focused more on the backend development, we did not really put much effort in frontend
        design so it does not look good and responsive. I am currently redoing the frontend
        design as my own project to make better frontend experience using ReactJS as I do not
        want to change the backend, rather mainly the frontend '
        />

        <AspectRatio ratio='2'>
          <video controls>
            <source
              src={require('./universityDatabase.mp4')}
              type='video/mp4'
            />
          </video>
        </AspectRatio>
      </Container>
    </Box>
  )
}

export default WorldInstitutionDatabase

// My role in this project was the design of the Entity-Relationship (ER) Diagram, Schema Table based on the ER diagram, and
// front - end and back - end for the login and register form.This step was important because to understand the data that are needed
// for the web application, data requirement analysis is needed to establish, ideate and validates the datas that are needed to '

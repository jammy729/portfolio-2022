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
import { Writing, DescriptionText } from '../../layout'

import dbms from '../Images/er-diagram.png'
import cover from '../Images/image4.png'
import register from '../Images/register.png'
import register_code from '../Images/register_code.png'
import login_code from '../Images/login_code.png'
import image11 from '../Images/image11.png'

const WorldInstitutionDatabase = () => {
  return (
    <Box>
      <Container maxW='850px'>
        <Title>World Institution Database</Title>
        <WorkImage src={cover} alt='Entity Relationship Diagram' w='full' />
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
        <Writing size='md' title='Summary'>
          <DescriptionText>
            World Institution Database is a web application built with a team of
            two with the main focus around backend functionalities. It is a
            functional web application that allows users to browse through a
            populated list of institutions from the database around the world to
            gain insights.
          </DescriptionText>
        </Writing>
        <Divider />
        <Writing size='md' title='Contribution'>
          <DescriptionText>
            My role in this project divided into two parts, the design of the
            Entity-Relationship diagram and schema table, and the frontend and
            backend development of the login and register form.
          </DescriptionText>
        </Writing>
        <WorkImage
          src={image11}
          alt='MySQL Database set up'
          caption='Database structure in MySQL'
          w='full'
        />
        <Divider />
        <Writing size='md' title='Database Analysis'>
          <DescriptionText>
            I created an entity-relationship diagram (ER) diagram to illustrate
            how entities relate to each other in a system. This step was one of
            the most important steps because it is the foundation of modelling
            the data stored in the database and how the database is built.
          </DescriptionText>
        </Writing>
        <WorkImage
          src={dbms}
          alt='Entity Relationship Diagram'
          caption='Entity-Relationship diagram for the web application World Institution Database'
          w='full'
        />
        <Writing size='sm' title='Justification for the ER Diagram Design'>
          <DescriptionText>
            To create an ER diagram, understanding what kind of entities are
            involved in this web application and the relationship between the
            two entities.'
          </DescriptionText>
        </Writing>
        <Writing>
          <DescriptionText>
            This web application aims to provide a platform where current and
            former students can share their experiences at their institutions
            while prospective students can red the experiences posted. The web
            application is set in a way that only the registered members can
            share experiences and have favourite lists of institutions.
            Therefore, there are two entities which are the 'Users' and
            'Institution', and two relationships between the two entities are
            the 'Comment' and 'Favourite'
          </DescriptionText>
        </Writing>
        <Writing>
          <DescriptionText>
            These two distinctive entities: User and Institution, and the two
            relationships: Comment Favourite grants distinctive features for
            members and non-members to favourite institutions, and read and post
            experiences.
          </DescriptionText>
        </Writing>
        <Divider />
        {/* FRONT-END */}
        <Writing size='md' title='Frontend Development'>
          <DescriptionText>
            After quick sketches and prototype on Figma on how I wanted the
            forms to look like for login and register page, I have decided to
            code with HTML, and CSS. Wanting the responsiveness in the login and
            registration form, I used Bootstrap (CSS Framework) to have the form
            responsive. Instead of inventing a unique form fields, I have used
            simple Bootstrap forms so user can focus on the task to login or
            register.
          </DescriptionText>
        </Writing>
        <WorkImage
          src={register}
          alt='Registration Form Page'
          caption='Registration form page for the web application'
          w='full'
        />
        <Writing size='sm' title='Validation of the Forms'>
          <DescriptionText>
            Registration validation is supported and done using a jQuery
            Validation Plugin to check whether the forms are filled correctly
            following a set rules. To satisfy the requirement, such all fields
            must be filled, a user must fill the username length between 5-25
            characters, password lengths between 5-30 characters and other
            rules. If the user do not complete any forms, it will output an
            informative error to the user to guide through the registration
            process.
          </DescriptionText>
        </Writing>
        <WorkImage
          src={register_code}
          alt='Register User PHP Code'
          caption='PHP code for when the registration form fills are set'
          w='full'
        />
        <Writing size='msmd' title='Validation of the Forms'>
          <DescriptionText>
            Registration validation is supported and done using a jQuery
            Validation Plugin to check whether the forms are filled correctly
            following a set rules. To satisfy the requirement, such all fields
            must be filled, a user must fill the username length between 5-25
            characters, password lengths between 5-30 characters and other
            rules. If the user do not complete any forms, it will output an
            informative error to the user to guide through the registration
            process.
          </DescriptionText>
        </Writing>
        <Writing size='sm' title='Backend Development'>
          <DescriptionText>
            Once the user fill the form and satisfy the rules, it connects to
            MySQL database, and receive all the input value form from the user
            and check from the database whether the username or email value
            exists in the database because the username and email is a key
            value. Finally, if there is no error issues with the form, it
            encrypt password using message-digest algorithm (MD5) to secure from
            SQL injection and insert the user information into the database with
            the encrypted password
          </DescriptionText>
        </Writing>
        <Writing>
          <DescriptionText>
            Once registered as a member, user can use the username and password
            to login. Similarly like the registration, it receive from the value
            from the form filled and display error messages if not filled. When
            the forms are filled, it checks the database to see if the username
            and password exists, and if it exists, it grants login member
            functionalities, and if not, it prompts an error.
          </DescriptionText>
        </Writing>

        <WorkImage
          src={login_code}
          alt='Login Form Page'
          caption='Login form PHP code for the web application'
          w='full'
        />
        <Divider />
        <Writing
          size='md'
          title='Challenges'>
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
        design so it does not look good and responsive. Overall, this project was successful
        and achieved final grade of 93% for this project. I am currently redoing the frontend
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

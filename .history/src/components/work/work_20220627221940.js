import React from 'react'
import { WorkGrid } from '../layouts/work-grid'
import { SimpleGrid, Box, Container } from '@chakra-ui/react'
import Layout from '../layouts/layout'
import worldThumb from './Development/Images/cover-worldinstitution.png'
const Work = () => {

  return (
    <Box>
      <Container maxW="850px">
        <Layout title='Development' id='development'>
          <SimpleGrid columns='1' spacing={2} py={3}>
            <WorkGrid
              id='worldinstitutiondatabase'
              title='World Institution Database'
              thumbnail={worldThumb}
            >
              A functional web application that allows users to browse through a
              list of institutions around the world to gain insights. Used PHP,
              HTML, jQuery, and MySQL.
            </WorkGrid>
            <WorkGrid
                id='educationvisualanalytics'
                title='Educational Visual Analytics'
                thumbnail='https://via.placeholder.com/150'
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                error. Quis, excepturi laboriosam debitis voluptate
              </WorkGrid>
           
          </SimpleGrid>

          <Layout title='Other worthy projects' id='design'>
            <SimpleGrid columns='1' spacing={2} py={3}>
              <WorkGrid
                id='experiencedesign'
                title='Be My Eyes'
                thumbnail='https://via.placeholder.com/150'
              >
                A redesign of a mobile app that's aimed towards better
                connection for visually-impaired users
              </WorkGrid>
        
            </SimpleGrid>
          </Layout>
        </Layout>
      </Container>
    </Box>
  )
}

export default Work

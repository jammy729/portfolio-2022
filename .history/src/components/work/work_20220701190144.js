import React from 'react'
import { WorkGrid } from '../layouts/work-grid'
import { SimpleGrid, Box, Container } from '@chakra-ui/react'
import Layout from '../layouts/layout'
import worldThumb from './Development/Images/cover-worldinstitution.png'
import evaThumb from './Development/Images/cover2.png'
const Work = () => {
  return (
    <Box>
      <Container maxW='850px'>
        <Layout title='Development' id='development'>
          <SimpleGrid columns='1' spacing={2} py={3}>
            <WorkGrid
              id='world-institution-database'
              title='World Institution Database'
              thumbnail={worldThumb}
            >
              A functional web application that allows users to browse through a
              list of institutions around the world to gain insights. Used PHP,
              HTML, jQuery, and MySQL.
            </WorkGrid>
            <WorkGrid
              id='education-visuala-nalytics'
              title='Educational Visual Analytics'
              thumbnail={evaThumb}
            >
              Designed and implemented an interactive visualization for
              multidimensional data using ObservableHQ and D3JS (Visualization
              Library)
            </WorkGrid>
          </SimpleGrid>
        </Layout>
      </Container>
    </Box>
  )
}

export default Work

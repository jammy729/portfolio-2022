import React from 'react'
import { WorkGrid } from '../layouts/work-grid'
import thumbInkDrop from '../../contents/portfolio.jpg'
import { SimpleGrid, Box, Center, Stack } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/media-query'
import Layout from '../layouts/layout'
import worldThumb from './Development/Images/cover-worldinstitution.png'
const Work = () => {
  const [isLargeScreen] = useMediaQuery('(min-width:750px)')

  return (
    <Stack direction='column'>
      <Box width={isLargeScreen ? '850px' : '80} margin='auto'>
        <Center>
          <Layout title='Development' id='development'>
            <SimpleGrid columns='1' spacing={2} py={3}>
              <WorkGrid
                id='worldinstitutiondatabase'
                title='World Institution Database'
                thumbnail={worldThumb}
              >
                A functional web application that allows users to browse through
                a list of institutions around the world to gain insights. Used
                PHP, HTML, jQuery, and MySQL.
              </WorkGrid>
              <WorkGrid
                id='geomemories'
                title='Geomemories'
                thumbnail='https://via.placeholder.com/150'
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt eveniet laudantium sint, officia ad ipsam vitae tenetur
              </WorkGrid>
            </SimpleGrid>

            <Layout title='Design' id='design'>
              <SimpleGrid columns='1' spacing={2} py={3}>
                <WorkGrid
                  id='experiencedesign'
                  title='Be My Eyes'
                  thumbnail='https://via.placeholder.com/150'
                >
                  A redesign of a mobile app that's aimed towards better
                  connection for visually-impaired users
                </WorkGrid>
                <WorkGrid
                  id='finestcup'
                  title='Finest Cup'
                  thumbnail='https://via.placeholder.com/150'
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, error. Quis, excepturi laboriosam debitis voluptate
                </WorkGrid>
              </SimpleGrid>
            </Layout>
          </Layout>
        </Center>
      </Box>
    </Stack>
  )
}

export default Work

import React from 'react'
import { Stack, Text, Center, Box } from '@chakra-ui/react'
import { HeroSection, About } from './work/layout'
import { useMediaQuery } from '@chakra-ui/media-query'

const Home = () => {
  const [isLargeScreen] = useMediaQuery('(min-width:750px)')

  return (
    <Stack direction='column'>
      <HeroSection
        name='James Yoo'
        role='Front-end Developer | UX Designer'
        work='See Work'
        contact='Contact Me'
      />

      <About
        title='About'
        bio='I am a fourth year undergraduate student in Simon Fraser
      University (SFU) majoring in BSc Interactive Arts and Technology. 
      I am an user-centered front-end developer mainly working with
      React/React Native JS framework. I love problem solving and designing
      with code.'
      />

      <Center>
        <Box width={isLargeScreen ? '600px' : '80%'} margin='auto'>
          <Text textAlign='justify' fontSize={{ sm: 'lg', md: 'lg', lg: 'md' }}>
            This website is built using
            <a href='https://reactjs.org/'>
              <span style={"text-decoration:'underline'"}>ReactJS</span>
            </a>
            , Chakra-UI (CSS Framework), EmailJS and hosted on Vercel.
          </Text>
        </Box>
      </Center>
    </Stack>
  )
}

export default Home

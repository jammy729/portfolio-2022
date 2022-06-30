import React from 'react'
import { Stack, Text, Centre, Box } from '@chakra-ui/react'
import { HeroSection, About } from './work/layout'

const Home = () => {
  return (
    <Stack direction='column'>
      <Center>
        <HeroSection
          name='James Yoo'
          role='Front-end Developer | UX Designer'
          work='See Work'
          contact='Contact Me'
        />

        <About
          title='About'
          bio='I am a fourth year undergraduate student in Simon Fraser
      University (SFU) majoring in BSc Interactive Arts and Technology
      with double concentration in Interactive Systems and Design. I am an 
      UX oriented front-end web and mobile developer mainly working with
      React/React Native JS framework. I love problem solving and designing
      with code. When I am not coding, I play and teach golf.'
        />

        <Text>This website is built using ReactJS and Chakra-UI</Text>
      </Center>
    </Stack>
  )
}

export default Home

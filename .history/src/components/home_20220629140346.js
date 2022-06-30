import React from 'react'
import { Stack, Text, Center } from '@chakra-ui/react'
import { HeroSection, About } from './work/layout'

const Home = () => {
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
        <Text text>
          This website is built using ReactJS, Chakra-UI (CSS Framework) and
          hosted on Vercel
        </Text>
      </Center>
    </Stack>
  )
}

export default Home

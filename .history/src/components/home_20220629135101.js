import React from 'react'

import { useMediaQuery } from '@chakra-ui/media-query'
import {
  Stack,
} from '@chakra-ui/react'
import { HeroSection, About } from './work/layout'
const Home = () => {

  return (
    <Stack direction='column'>
      <HeroSection
        name='James Yoo'
        role='Front-end Developer | UX Designer'
        work='See Work'
        contact='Contact Me'
        src='profile'
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
    </Stack>
  )
}

export default Home

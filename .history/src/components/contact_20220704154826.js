import React from 'react'
import {
  Container,
  Text,
  Heading,
  Divider,
  Center,
  Icon,
  Box
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Title } from './layouts/work-grid'

import { MdEmail } from 'react-icons/md'
const Contact = () => {
  return (
    <Box>
      <Container maxW='850px'>
        <Center></Center>
        <Heading size='md' centerContent>
          Contact Me
        </Heading>

        <Container>
          <Icon as={FaGithub} w={12} h={12} />
        </Container>
      </Container>
    </Box>
  )
}

export default Contact

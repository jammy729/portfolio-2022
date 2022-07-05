import React from 'react'
import {
  Container,
  Text,
  Heading,
  Divider,
  Center,
  Icon
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
const Contact = () => {
  return (
    <Container>
      <Center>
        <Heading size='md' fontWeight='semibold'>
          Contact Me
        </Heading>
        <Container></Container>
      </Center>
    </Container>
  )
}

export default Contact

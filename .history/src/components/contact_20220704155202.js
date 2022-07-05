import React from 'react'
import {
  Container,
  Text,
  Heading,
  Divider,
  Center,
  Icon,
  Box,
  Stack,
  Link
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Title } from './layouts/work-grid'

import { MdEmail } from 'react-icons/md'
const Contact = () => {
  return (
    <Box>
      <Container maxW='850px'>
        <Center>
          <Heading size='md' centerContent mb={8}>
            Contact Me
          </Heading>
        </Center>

        <Stack direction='column'>
          <Icon justifyContent='center' as={FaGithub} w={12} h={12} />
          <Link>GitHub</Link>
        </Stack>
        <Stack direction='column'>
          <Icon justifyContent='center' as={FaGithub} w={12} h={12} />
          <Link>GitHub</Link>
        </Stack>
      </Container>
    </Box>
  )
}

export default Contact

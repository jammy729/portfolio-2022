import React, { useRef } from 'react'
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
import emailjs from '@emailjs/browser'
import { MdEmail } from 'react-icons/md'
const Contact = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'MlWnv73jh5_sjtIRS'
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }
  return (
    <Box>
      <Container maxW='550px'>
        <Center>
          <Heading size='md' centerContent mb={8}>
            Contact Me
          </Heading>
        </Center>

        <Stack direction='row' justifyContent='space-between'>
          <Stack>
            <Icon justifyContent='center' as={FaGithub} w={12} h={12} />
            <Link href='https://github.com/jammy729' target='_blank'>
              GitHub
            </Link>
          </Stack>
          <Stack>
            <Icon justifyContent='center' as={FaLinkedin} w={12} h={12} />
            <Link
              href='https://www.linkedin.com/in/james-yoo-b4a1231a5/'
              target='_blank'
            >
              LinkedIn
            </Link>
          </Stack>
          <Stack>
            <Icon justifyContent='center' as={MdEmail} w={12} h={12} />
            <Link>LinkedIn</Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Contact

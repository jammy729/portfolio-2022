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
  Link,
  FormControl,
  FormLabel,
  Input,
  TextArea
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { MdEmail } from 'react-icons/md'
const Contact = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_oltp1k9',
        'template_4q435ac',
        form.current,
        'MlWnv73jh5_sjtIRS'
      )
      .then(
        result => {
          console.log(result.text)
          console.log('email successful')
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
        <Stack direction='column'>
          <form ref={form} onSubmit={sendEmail}>
            <Input
              placeholder='name'
              type='text'
              name='user_name'
            />
             <Input
              placeholder='email'
              type='text'
              name='user_email'
            />
            <TextArea
          </form>
        </Stack>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type='text' name='user_name' />
          <label>Email</label>
          <input type='email' name='user_email' />
          <label>Message</label>
          <textarea name='message' />
          <input type='submit' value='Send' />
        </form>
      </Container>
    </Box>
  )
}

export default Contact

import React, { useRef, useState } from 'react'
import {
  Container,
  Heading,
  Center,
  Icon,
  Box,
  Stack,
  Link,
  Input,
  Textarea,
  useToast,
  Button,
  Text
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { MdEmail } from 'react-icons/md'
const Contact = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const form = useRef()
  const toast = useToast()
  const handleEmail = event => {
    setEmail(event.target.value)
  }
  const handleName = event => {
    setName(event.target.value)
  }
  const handleMessage = event => {
    setMessage(event.target.value)
  }
  const sendEmail = e => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_oltp1k9',
        'template_br1d57i',
        form.current,
        'MlWnv73jh5_sjtIRS'
      )
      .then(
        result => {
          console.log(result.text)
          console.log('email successful')
          toast({
            title: 'Email Sent.',
            description: 'Email has been sent successfully',
            status: 'success',
            duration: 9000,
            isClosable: true
          })
        },
        error => {
          console.log(error.text)
          toast({
            title: 'Email not sent',
            description: 'Email has been failed to send',
            status: 'fail',
            duration: 9000,
            isClosable: true
          })
        }
      )
    e.target.reset()
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
        <Stack direction='column' mt='5rem'>
          <Text>Get In Touch </Text>
          <form ref={form} onSubmit={sendEmail}>
            Name
            <Input
              placeholder='name'
              type='text'
              name='from_name'
              value={name}
              onChange={handleName}
              mb={2}
            />
            <Input
              placeholder='email'
              type='email'
              name='from_email'
              value={email}
              onChange={handleEmail}
              mb={2}
            />
            <Textarea
              name='message'
              value={message}
              onChange={handleMessage}
              mb={2}
            />
            <Button
              id='btn'
              type='submit'
              value='Send'
              disabled={!email || !name || !message}
              colorScheme='red'
              mb={2}
              size='md'
            >
              Send Email
            </Button>
          </form>
        </Stack>
      </Container>
    </Box>
  )
}

export default Contact

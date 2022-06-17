import React from 'react'
import { Link } from 'react-router-dom'
import { useColorMode } from '@chakra-ui/color-mode'
import { useMediaQuery } from '@chakra-ui/media-query'

import {
  Center,
  Flex,
  Box,
  Text,
  Button,
  Stack,
  Heading
} from '@chakra-ui/react'

export const HeroSection = ({ name, role, link, contact }) => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  const [isLargeScreen] = useMediaQuery('(min-width:750px)')
  return (
    <Center>
      <Flex my={3} mx={5}>
        <Box align='flex-start'>
          <Text fontSize='3xl' fontWeight='semibold'>
            {name}
          </Text>
          <Text color={isDark ? 'gray.200' : 'black'} mb={4}>
            {role}
          </Text>
          <Stack direction={isLargeScreen ? 'row' : 'column'}>
            <Button
              colorScheme='teal'
              cursor='pointer'
              variant='solid'
              size={isLargeScreen ? 'lg' : 'md'}
            >
              <Link to='/work'>{contact}</Link>
            </Button>

            <Button
              colorScheme='teal'
              cursor='pointer'
              variant='outline'
              size={isLargeScreen ? 'lg' : 'md'}
            >
              <Link to='/contact'>{contact}</Link>
            </Button>
            {/* <CTA primary>asdf</CTA> */}
          </Stack>
        </Box>
      </Flex>
    </Center>
  )
}

export const About = ({ title, bio }) => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [isLargeScreen] = useMediaQuery('(min-width:750px)')

  return (
    <Center>
      <Box width={isLargeScreen ? '600px' : '80%'} margin='auto'>
        <Heading size={isLargeScreen ? 'md' : 'lg'} as='u'>
          {title}
        </Heading>
        <Text
          textAlign='justify'
          py='10px'
          fontSize={{ sm: 'lg', md: 'lg', lg: 'md' }}
        >
          {bio}
        </Text>
      </Box>
    </Center>
  )
}

export const Writings = ({ title, description }) => {
  return (
    <Box pb={3}>
      <Heading size='md' mt={3} mb={1} fontWeight='semibold'>
        {title}
      </Heading>
      <Text fontSize='lg'>{description}</Text>
    </Box>
  )
}

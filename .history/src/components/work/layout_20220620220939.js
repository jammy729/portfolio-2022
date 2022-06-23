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
  Heading,
  Image
} from '@chakra-ui/react'
import profile from '../work/Home/profile.JPG'
export const HeroSection = ({ name, role, work, contact, src }) => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  const [isLargeScreen] = useMediaQuery('(min-width:750px)')
  return (
    <Center>
      <Flex>
        <Box>
          <Center>
            <Image
              boxSize={isLargeScreen ? '300px' : '250px'}
              src={profile}
              objectFit='cover'
              borderRadius='lg'
            />
          </Center>

          <Text fontSize='3xl' fontWeight='semibold'>
            {name}
          </Text>
          <Text color={isDark ? 'gray.200' : 'black'} mb={4}>
            {role}
          </Text>
          <Stack direction={isLargeScreen ? 'row' : 'column'}>
            <Link to='./work'>
              <Button
                colorScheme='teal'
                cursor='pointer'
                variant='solid'
                w='100%'
              >
                {work}
              </Button>
            </Link>

            <Link to='./contact'>
              <Button
                colorScheme='teal'
                cursor='pointer'
                variant='outline'
                w='100%'
              >
                {contact}
              </Button>
            </Link>
          </Stack>
        </Box>
      </Flex>
    </Center>
  )
}

export const About = ({ title, bio }) => {
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
    <Box pb={3} w="80%" justify="center">>
      <Heading size='md' mt={3} mb={1} fontWeight='semibold'>
        {title}
      </Heading>
      <Text fontSize='lg' textAlign="justify">{description}</Text>
    </Box>
  )
}

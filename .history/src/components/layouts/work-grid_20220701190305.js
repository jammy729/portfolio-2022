import React from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  LinkBox,
  LinkOverlay,
  Text,
  Image,
  Heading,
  Badge,
  Center
} from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useColorMode } from '@chakra-ui/color-mode'

export const WorkGrid = ({ children, id, title, thumbnail }) => {
  const [isLargeScreen] = useMediaQuery('(min-width:750px)')

  return (
    <Box maxW='100%' maxH='auto' pb={6} textAlign='center' position='relative'>
      <Link to={`/work/${id}`}>
        <LinkBox cursor='pointer'>
          <Image
            objectFit='cover'
            margin='auto'
            src={thumbnail}
            alt={title}
            placeholder='blur'
            w='100%'
            h={isLargeScreen ? '300px' : '270px'}
            borderRadius='lg'
            fallbackSrc='https://via.placeholder.com/150'
            border=
          />
          <LinkOverlay to={`/work/${id}`}>
            <Text mt={2} fontSize={20} fontWeight='semibold'>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14} px={5}>
            {children}
          </Text>
        </LinkBox>
      </Link>
    </Box>
  )
}

export const Title = ({ children }) => (
  <Box mt={5}>
    <Link to='/work'>Works</Link>
    <span>
      <ChevronRightIcon />
    </span>
    <Heading display='inline-block' as='h3' fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt, caption, w }) => {
  const { colorMode } = useColorMode()

  const isDark = colorMode === 'dark'
  return (
    <Box mb={3}>
      <Image borderRadius='2xl' w={w} src={src} alt={alt} mt={4} />
      <Center>
        <Text color={isDark ? 'gray.300' : 'gray.500'}>{caption}</Text>
      </Center>
    </Box>
  )
}

export const Tag = ({ children }) => (
  <Badge colorScheme='green' mr={2}>
    {children}
  </Badge>
)

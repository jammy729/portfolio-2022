import React from 'react'
import { Box, Center, Image, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useColorMode } from '@chakra-ui/color-mode'
import styled from '@emotion/styled'
import HippoImg from '../contents/hippo.png'
import HippoImgDark from '../contents/hippo-dark.png'
import { useMediaQuery } from '@chakra-ui/react'

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;

  &:hover img {
    transform: rotate(-10deg);
  }
`
const Logo = () => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [isLargeScreen] = useMediaQuery('(min-width:750px)')
  return (
    <Box>
      <Center>
        <LogoBox>
          <Image
            src={isDark ? HippoImgDark : HippoImg}
            w={{ base: '50px' }}
            pr={2}
          />
          <Heading
            size={isLargeScreen ? 'md' : 'md'}
            fontWeight='semibold'
            color={isDark ? 'white' : 'black'}
            mt='5px'
          >
            <Link to='/'>
              <Text fontSize='md'>James Yoo</Text>
            </Link>
          </Heading>
        </LogoBox>
      </Center>
    </Box>
  )
}

export default Logo

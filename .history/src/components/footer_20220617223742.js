import { Box, Icon, Text, Container, HStack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { GoMarkGithub } from 'react-icons/go'

const Bottom = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
`

const Footer = () => {
  return (
    <Box as='footer' minHeight="100vh" direction="column"/>
      <Container opacity={0.5}>
        <Bottom>
          &copy; {new Date().getFullYear()} James Yoo. All Rights Reserved.
        </Bottom>
      </Container>

      <HStack>
        <Bottom>
          <a
            href='https://github.com/jammy729/portfolio-2022'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Text
              opacity={0.7}
              _hover={{
                opacity: '1'
              }}
            >
              <Icon as={GoMarkGithub} mr={1} />
              Github Source
            </Text>
          </a>
        </Bottom>
      </HStack>
    </Box>
  )
}

export default Footer

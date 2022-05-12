import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.5} fontSize="sm" position='absolute'
         left='0' bottom='0' right='0' pt={6} m={3}>
      &copy; {new Date().getFullYear()} James Yoo. All Rights Reserved.
    </Box>
  )
}

export default Footer
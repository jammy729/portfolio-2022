import React from 'react'
import { WorkGrid } from '../layouts/work-grid'
import thumbInkDrop from '../../contents/portfolio.jpg'
import { SimpleGrid, Box, Center, Stack } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/media-query'
import Layout from '../layouts/layout'
import worldThumb from './Development/Images/cover-worldinstitution.png'
const Work = () => {
  const [isLargeScreen] = useMediaQuery('(min-width:750px)')

  return (
    <Box>
      <Continer>
      </Continer>
      </Box>
    
  )
}

export default Work

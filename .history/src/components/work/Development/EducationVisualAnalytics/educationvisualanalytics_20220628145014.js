import React from 'react'
import { Title, WorkImage, Tag } from '../../../layouts/work-grid'
import { Box, Container, List, ListItem } from '@chakra-ui/react'
import { Writing, DescriptionText } from '../../layout'

const EducationVisualAnalytics = () => {
  return (
    <Box>
      <Container>
        <Title>Education Visual Analytics</Title>

        {/* BADGES  */}
        <List>
          <ListItem>
            <Tag> Type </Tag> Analyzing Visualizations, Research Dataset,
            Dataset Cleaning
          </ListItem>
          <ListItem>
            <Tag> Stack </Tag> JavaScript D3JS (Visualization Library)
          </ListItem>
          <ListItem>
            <Tag> Source </Tag>
            <a href='https://observablehq.com/@jamesyoo/iat-355-final-project-spring-2021/2'>
              ObservableHQ Link
            </a>
          </ListItem>
        </List>

        {/* SUMMARY   */}
        <Writing size='md' title='Summary' />
        <DescriptionText>
          Implemented two datasets to investigate and question the impact of
          parental levels of education and income on the student's performance
          in school and graduation rate.
        </DescriptionText>
      </Container>
    </Box>
  )
}

export default EducationVisualAnalytics

/* <Center>
<Container>
  <Title>Education Visual Analytic</Title>
  <Text fontSize={isLargeScreen ? "lg" : "lg"} py={3}>
    Designed and implemented an interactive visualization for
    multidimensional data using Observable.{" "}
  </Text>
  <Text fontSize={isLargeScreen ? "lg" : "lg"} py={3}>
    Implemented two datasets to investigate and question the impact of
    parental levels of education and income on the student's performance
    in school and graduation rate.
  </Text>
  <List py={2}>
    <ListItem>
      <Tag>Type</Tag> Academic Project
    </ListItem>
    <ListItem>
      <Tag>Stack</Tag> JavaScript and D3JS (visualization library)
    </ListItem>
    <ListItem>
      <Tag>Website</Tag>{" "}
      <a href="https://observablehq.com/@jamesyoo/iat-355-final-project-spring-2021/2">
        https://observablehq.com/@jamesyoo/iat-355-final-project-spring-2021/2
      </a>
    </ListItem>
  </List>
</Container>
</Center> */

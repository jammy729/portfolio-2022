import React from 'react'
import { Title, WorkImage, Tag } from '../../../layouts/work-grid'
import {
  Box,
  Container,
  List,
  ListItem,
  OrderedList,
  Divider
} from '@chakra-ui/react'
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
            <a
              target='blank'
              href='https://observablehq.com/@jamesyoo/iat-355-final-project-spring-2021/2'
            >
              ObservableHQ Link
            </a>
          </ListItem>
        </List>

        {/* OVERVIEW   */}
        <Writing size='md' title='Overview' />
        <DescriptionText>
          The right to education is one of the key principles in our life and
          everyone should have the same opportunity to receive the education
          they need. Using data visualization, we will explore if there are
          parental levels of education and parental income can have an influence
          on a student's performance in school and graduation rate. And if these
          are factors, identify the patterns and address the issue.
        </DescriptionText>

        <Divider />

        {/* SCOPE  */}
        <Writing size='md' title='Scope' />
        <DescriptionText>
          I choose this data visualization because I was interested in how
          parental level of education and income can influence child performance
          in school and years to graduate. I have the amazing privilege of
          living in Canada and receive education as well as In this data
          visualization, we are focusing on whether parental level of education
          and income can influence child performance in school and years to
          graduate.
        </DescriptionText>

        <Divider />

        {/* DOMAIN QUESTIONS  */}
        <Writing size='md' title='Domain Questions' />
        <DescriptionText>
          I used data visualizations that are interactive using these four
          domain questions.
        </DescriptionText>
        <OrderedList>
          <ListItem>
            Do parental level of education have any influence on the
            child's/student performance
          </ListItem>
          <ListItem>
            Do students with the resource or opportunity to have the test
            preparation score higher on exams?
          </ListItem>
          <ListItem>
            Do parental income influence student's GPA in high school and
            college
          </ListItem>
          <ListItem>
            How does parental income and level of education influence student’s
            years to graduate?
          </ListItem>
        </OrderedList>

        {/* THE DATASET  */}
        <Writing size='md' title='The Dataset' />
        <DescriptionText>
          I have used two datasets from Royce Kimmons and the datasets are
          called: <br />
          <a
            href='http://roycekimmons.com/tools/generated_data/exams'
            target='blank'
          >
            <u>Exam Scores</u>
          </a>
          &
          <a
            href='http://roycekimmons.com/tools/generated_data/graduation_rate'
            target='blank'
          >
            <u> Graduation Rate</u>
          </a>
        </DescriptionText>
      </Container>
    </Box>
  )
}

export default EducationVisualAnalytics

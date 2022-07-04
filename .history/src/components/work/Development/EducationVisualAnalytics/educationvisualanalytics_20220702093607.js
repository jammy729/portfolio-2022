import React from 'react'
import { Title, WorkImage, Tag } from '../../../layouts/work-grid'
import {
  Box,
  Container,
  List,
  ListItem,
  OrderedList,
  Divider,
  Link
} from '@chakra-ui/react'
import { Writing, DescriptionText } from '../../layout'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import data1 from '../Images/data11.png'
import data2 from '../Images/q2.png'
import pdf from '../Images/eva.pdf'

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
            <Link
              color='blue.500'
              href='https://observablehq.com/@jamesyoo/iat-355-final-project-spring-2021/2'
              isExternal
              target='blank'
            >
              ObservableHQ Link
              <ExternalLinkIcon mx='2px' />
            </Link>
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
          living in Canada and receive education and I am very thankful. I
          wanted to explore to see whether parental level of education and
          income can influence child performance in school and years to
          graduate using data visualization. 
        </DescriptionText>

        <Divider />
        
        {/* DOMAIN QUESTIONS  */}
        <Writing size='md' title='Domain Questions' />
        <DescriptionText>
          I used data visualizations that are interactive using these four
          domain questions.
        </DescriptionText>
        <OrderedList mb={3}>
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
            How does parental income and level of education influence student's
            years to graduate?
          </ListItem>
        </OrderedList>

        <Divider />
        
        {/* THE DATASET  */}
        <Writing size='md' title='The Dataset' />
        <DescriptionText>
          I have used two datasets from Royce Kimmons and the datasets are
          called:
          <Box my={2}>
            <Container>
              <Link
                color='blue.500'
                href='http://roycekimmons.com/tools/generated_data/exams'
                isExternal
                target='blank'
              >
                Exam Scores
                <ExternalLinkIcon mx='2px' />
              </Link>
            </Container>
            <Container>
              <Link
                color='blue.500'
                href='http://roycekimmons.com/tools/generated_data/graduation_rate'
                isExternal
                target='blank'
              >
                Graduation Rate
                <ExternalLinkIcon mx='2px' />
              </Link>
            </Container>
          </Box>
          The two dataset had some dimensions that were not needed in this
          visualization or to answer the domain questions so I cleaned dataset
          so only the data that I needed to use were there.
        </DescriptionText>
        <Writing size='md' title='Visualization Design' />
        1. Do parental level of education have any influence on the
        child's/student performance
        <WorkImage
          src={data1}
          alt='Histogram chart'
          caption='Histogram chart to show relationship between parental level of education and the children score'
          w='full'
        />
        <DescriptionText>
          I have used histogram to discover the relationship between parental
          level of education and the student score on the writing, reading and
          math test. The histogram shows the median value of individual tests
          divided into sections of parental level of education. The interaction
          in this visualization is the ability to sort histogram from ascending
          to descending. This allows the user to easily identify the extremum
          and also sort the data cases.
        </DescriptionText>
        <DescriptionText>
          The interactivity in this is the ability for user to ascend or descend
          the orders in which they prefer. Through this interactivity, we can
          see that higher the education, the median value of subject score is
          generally much higher.
        </DescriptionText>
        2. Do students with the resource or opportunity to have the test
        preparation score higher on exams?
        <WorkImage
          src={data2}
          alt='Histogram chart'
          caption='Histogram chart showing test preparation course and the median of each class subject grade'
          w='full'
        />
        <DescriptionText>
          This visualization is using histogram to discover whether the test
          preparation course aided students in getting better marks on the exam.
          Although test preparation has nothing to do with parental involvement
          or their background, it may be an indication that the family is
          wealthy or financially stable enough to afford the student in test
          preparation course or academy while other households may not be able
          to afford to do so.
        </DescriptionText>
        <Link
          color='blue.500'
          href={pdf}
          isExternal
          target='blank'
          download='DataViz-Report.pdf'
        >
          To see more, click here <ExternalLinkIcon mx='2px' />
        </Link>
      </Container>
    </Box>
  )
}

export default EducationVisualAnalytics

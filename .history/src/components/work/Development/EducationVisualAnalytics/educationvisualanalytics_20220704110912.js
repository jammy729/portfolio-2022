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
import data3 from '../Images/data3.png'
import data4 from '../Images/data4.png'
import datacode from '../Images/datacode.png'

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
          income can influence child performance in school and years to graduate
          using data visualization.
        </DescriptionText>
        <Divider />
        {/* DOMAIN QUESTIONS  */}
        <Writing size='md' title='Domain Questions' />
        <DescriptionText>
          I used data visualizations using these four domain questions in hopes
          to find patterns:
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
        <Divider />
        <Writing size='md' title='Data Visualization' />
        <DescriptionText>
          With varieties type of variables, I explored different types of charts
          and different dimensions to approach the domain questions. Using
          Tableau (an interactive data visualization software) as a guide, I
          went through many types of charts and visualize what kind of data
          could work to answer the domain questions.
        </DescriptionText>

        <DescriptionText>
          After rough idea of how I want the visualization to look like, I used
          D3JS, a Javascript library interactive data visualization to create
          charts. It was essential to understand the relationship between the 
          dependent and independent variable relationship and what the result
          could impl
        </DescriptionText>
        <WorkImage
          src={datacode}
          alt='D3JS coding '
          caption='An interactive scatter plot using D3JS'
          w='full'
        />
        <WorkImage
          src={data1}
          alt='Histogram chart'
          caption='Histogram chart to show relationship between parental level of education and the children score'
          w='full'
        />

        <WorkImage
          src={data2}
          alt='Histogram chart'
          caption='Histogram chart showing test preparation course and the median of each class subject grade'
          w='full'
        />

        <WorkImage
          src={data3}
          alt='Histogram chart'
          caption='Histogram chart to show relationship between parental level of education and the children score'
          w='full'
        />

        <WorkImage
          src={data4}
          alt='Histogram chart'
          caption='Histogram chart to show relationship between parental level of education and the children score'
          w='full'
        />
        <Link
          color='blue.500'
          href={pdf}
          isExternal
          target='blank'
          download='DataViz-Report.pdf'
        >
          Click here to see download my Data Visualization Report (PDF)
          <ExternalLinkIcon mx='2px' />
        </Link>
      </Container>
    </Box>
  )
}

export default EducationVisualAnalytics

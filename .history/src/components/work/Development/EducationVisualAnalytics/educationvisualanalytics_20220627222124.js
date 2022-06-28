import React from "react";
import { Title, WorkImage, Tag } from "../../../layouts/work-grid";
import { Center, Container, List, ListItem, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";

const EducationVisualAnalytics = () => {
  const [isLargeScreen] = useMediaQuery("(min-width:750px)");

  return (
    <Box>
      <Container>
       <Title>Education Visual Analytics</Title>
      </Container>
    </Box>
  );
};

export default EducationVisualAnalytics;

{/* <Center>
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
</Center> */}
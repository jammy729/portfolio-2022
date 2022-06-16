import React from "react";
import {
  Center,
  Container,
  Box,
  List,
  ListItem,
  Text,
  Heading,
  AspectRatio,
} from "@chakra-ui/react";
import { Title, WorkImage, Tag } from "../../../layouts/work-grid";
import { useMediaQuery } from "@chakra-ui/media-query";
import video from "./universityDatabase.mp4";
const WorldInstitutionDatabase = () => {
  const [isLargeScreen] = useMediaQuery("(min-width:750px)");

  return (
    <Box>
      <Container>
        <Title>World Institution Database</Title>
      </Container>
      <Container maxW={isLargeScreen ? "70%" : "100%"}>
        <AspectRatio ratio={isLargeScreen ? 2 : 1}>
          <video controls>
            <source
              src={require("./universityDatabase.mp4")}
              type="video/mp4"
            />
          </video>
        </AspectRatio>
      </Container>
      <Container>
        <Text fontSize={isLargeScreen ? "xl" : "lg"} py={3}>
          A functional web application that allows users to browse through a
          list of institutions around the world to gain insights. Used PHP,
          HTML, jQuery, and MySQL.
        </Text>
        <List py={2}>
          <ListItem>
            <Tag>Type</Tag> Web Development
          </ListItem>
          <ListItem>
            <Tag>Partner</Tag> Ha Thu N.
          </ListItem>
          <ListItem>
            <Tag>Stack</Tag> HTML, CSS, PHP, MySQL, jQuery
          </ListItem>
          <ListItem>
            <Tag>Source</Tag>
            <a href="https://github.com/rubik516/iat352-institution-reviews-web-app">
              https://github.com/rubik516/iat352-institution-reviews-web-app
            </a>
          </ListItem>
        </List>

        <Heading size="md" mt={3} mb={1} fontWeight="semibold">
          Summary
        </Heading>
        <Text fontSize="lg">
          World Institution Database is a web application built with a team of
          two including myself with the focus of backend functionalities. 
        </Text>
      </Container>
    </Box>
  );
};

export default WorldInstitutionDatabase;

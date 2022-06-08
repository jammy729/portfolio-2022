import React from "react";
import {
  Center,
  Container,
  List,
  ListItem,
  Text,
  Heading,
  AspectRatio
} from "@chakra-ui/react";
import { Title, WorkImage, Tag } from "../../../layouts/work-grid";
import { useMediaQuery } from "@chakra-ui/media-query";
import video from "./universityDatabase.mp4"
const WorldInstitutionDatabase = () => {
  const [isLargeScreen] = useMediaQuery("(min-width:750px)");

  return (
    <Center>
      <Container>
        <Title>World Institution Database</Title>
        <AspectRatio ratio={1}>
          <video controls>
            <source src={require('./universityDatabase.mp4')} type="video/mp4" />
          </video>
        </AspectRatio>
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
          Choosing a higher education, studying abroad to experience and earn a
          degree, going on a short exchange or field school overseas have been
          popular choices among students. Being able to choose a good
          institution to spend for the rest of the higher education years can be
          one of the biggest life decisions of a student and can influence its
          experience.
        </Text>
      </Container>
    </Center>
  );
};

export default WorldInstitutionDatabase;

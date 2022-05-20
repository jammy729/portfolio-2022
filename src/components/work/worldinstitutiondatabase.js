import React from "react";
import { Center, Container, List, ListItem, Text } from "@chakra-ui/react";
import { Title, WorkImage, Tag } from "../layouts/work-grid";
import { useMediaQuery } from "@chakra-ui/media-query";

const WorldInstitutionDatabase = () => {

  const [isLargeScreen] = useMediaQuery("(min-width:750px)");

  return (
    <Center>
      <Container>
        <Title>World Institution Database</Title>
        <Text fontSize={ isLargeScreen ? 'xl' : 'lg'} py={3}>
          A functional web application that allows users to browse through a
          list of institutions around the world to gain insights. Used PHP,
          HTML, jQuery, and MySQL.
        </Text>
        <List py={2}>
          <ListItem>
            <Tag>Type</Tag> Academic Project
          </ListItem>
          <ListItem>
            <Tag>Stack</Tag> HTML, CSS, PHP, MySQL, jQuery
          </ListItem>
          <ListItem>
            <Tag>Source</Tag>{" "}
            <a href="https://github.com/rubik516/iat352-institution-reviews-web-app">
              https://github.com/rubik516/iat352-institution-reviews-web-app
            </a>
          </ListItem>
        </List>
      </Container>
    </Center>
  );
};

export default WorldInstitutionDatabase;

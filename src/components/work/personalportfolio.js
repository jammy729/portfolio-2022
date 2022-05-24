import React from "react";
import {
  Center,
  Container,
  List,
  ListItem,
  Text,
  SimpleStack,
} from "@chakra-ui/react";
import { Title, WorkImage, Tag } from "../layouts/work-grid";
import { useMediaQuery } from "@chakra-ui/media-query";

const PersonalPortfolio = () => {
  const [isLargeScreen] = useMediaQuery("(min-width:750px)");

  return (
    <Center>
      <Container>
        <Title>Personal Portfolio</Title>
        <Text fontSize={isLargeScreen ? "xl" : "lg"} py={3}>
          Created a responsive personal portfolio website to showcase portfolio
          pieces using ReactJS and Chakra-UI (CSS Framework)
        </Text>

        <List py={2}>
          <ListItem>
            <Tag>Type</Tag> Web Development
          </ListItem>
          <ListItem>
            <Tag>Stack</Tag> ReactJS, and Chakra-UI
          </ListItem>
          <ListItem>
            <Tag>Source</Tag>
            <a href="https://github.com/jammy729/portfolio-2022">
              https://github.com/jammy729/portfolio-2022
            </a>
          </ListItem>
        </List>
      </Container>
    </Center>
  );
};

export default PersonalPortfolio;

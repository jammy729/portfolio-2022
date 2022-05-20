import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  LinkBox,
  LinkOverlay,
  Text,
  Image,
  Heading,
  Badge,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const WorkGrid = ({ children, id, title, thumbnail }) => {
  const [isLargeScreen] = useMediaQuery("(min-width:750px)");

  return (
    <Box
      maxW={isLargeScreen ? "sm" : "lg"}
      maxH="auto"
      pb={6}
      mb={6}
      textAlign="center"
      position="relative"
    >
      <Link to={`/work/${id}`}>
        <LinkBox cursor="pointer">
          <Image
            margin="auto"
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
            w={isLargeScreen ? "300px" : "500px"}
            h={isLargeScreen ? "200px" : "270px"}
            borderRadius="lg"
          />
          <LinkOverlay to={`/work/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14} px={5}>
            {children}
          </Text>
        </LinkBox>
      </Link>
    </Box>
  );
};

export const Title = ({ children }) => (
  <Box>
    <Link to=".work">Works</Link>
    <span>
      <ChevronRightIcon />
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);

export const Tag = ({ children }) => (
    <Badge colorScheme='green' mr={2}>
      { children }
    </Badge>
);


import React from "react";
import { Link } from "react-router-dom";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import {
  Stack,
  Flex,
  Box,
  Text,
  Button,
  Heading,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import { WorkGrid } from "../components/layouts/work-grid";
import thumbInkDrop from "../contents/portfolio.jpg";
import { useEffect } from "react";
const Home = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isLargeScreen] = useMediaQuery("(min-width:750px)");

  // const CTA = styled.button`
  //   border: 1px solid #319795;
  //   cursor: pointer;
  //   border-radius: 5px;
  //   padding: 0.25em 1em;
  //   background: ${props => props.primary ? "#319795" : "#81E6D9"};
  //   color: ${props => props.primary ? "black" : "white"};

  // `;

  return (
    <Stack direction="column">
      <Center>
        <Flex my={3} mx={5}>
          <Box align="flex-start">
            <Text fontSize="3xl" fontWeight="semibold">
              James Yoo
            </Text>
            <Text color={isDark ? "gray.200" : "black"} mb={4}>
              Front-end Developer | UX & UI Designer
            </Text>
            <Stack direction={isLargeScreen ? "row" : "column"}>
              <Button
                colorScheme="teal"
                variant="solid"
                cursor="pointer"
                size={isLargeScreen ? "lg" : "md"}
                onClick={() => console.log("clicked")}
              >
                <Link to="/work">See Work</Link>
              </Button>

              <Button
                colorScheme="teal"
                cursor="pointer"
                variant="outline"
                size={isLargeScreen ? "lg" : "md"}
              >
                <Link to="/contact">Contact Me</Link>
              </Button>
              {/* <CTA primary>asdf</CTA> */}
            </Stack>
          </Box>
        </Flex>
      </Center>

      <Center>
        <Box width={isLargeScreen ? "600px" : "80%"} margin="auto">
          <Heading size={isLargeScreen ? "md" : "lg"} as="u">
            About
          </Heading>
          <Text
            textAlign="justify"
            py="10px"
            fontSize={{ sm: "lg", md: "lg", lg: "md" }}
          >
            I am a fourth year undergraduate student in Simon Fraser
            University (SFU) majoring in BSc Interactive Arts and Technology
            with double concentration in Interactive Systems and Design. I am an 
            UX oriented front-end web and mobile developer mainly working with
            React/React Native JS framework. I love problem solving and designing
            with code. When I am not coding, I play and teach golf.
          </Text>
        </Box>
      </Center>

      <Center>
        <Box width={isLargeScreen ? "600px" : "80%"}>
          <Heading size={isLargeScreen ? "md" : "lg"} as="u">
            Development
          </Heading>
          <SimpleGrid columns='1' spacing={2} py={3}>
            <WorkGrid
              id="personalportfolio"
              title="Personal Portfolio"
              thumbnail='https://via.placeholder.com/150'
              >
              A portfolio created using React JS, Chakra-UI as style framework
              and Vercel to host.
            </WorkGrid>
            <WorkGrid
              id="worldinstitutiondatabase"
              title="World Institution Database"
              thumbnail='https://via.placeholder.com/150'
              >
              A functional web application that allows users to browse through a
              list of institutions around the world to gain insights. Used PHP,
              HTML, jQuery, and MySQL.
            </WorkGrid>
            <WorkGrid
              id="educationvisualanalytics"
              title="Education Visual Analytics"
              thumbnail='https://via.placeholder.com/150'
              >
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkGrid>
            <WorkGrid
              id="geomemories"
              title="Geomemories"
              thumbnail='https://via.placeholder.com/150'
              >
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkGrid>
          </SimpleGrid>
        </Box>
      </Center>

      <Center>
        <Box width={isLargeScreen ? "600px" : "80%"}>
          <Heading size={isLargeScreen ? "md" : "lg"} as="u">
            Design
          </Heading>
          <SimpleGrid columns='1' spacing={2} py={3}>
            <WorkGrid
              id="experiencedesign"
              title="Experience Design"
              thumbnail='https://via.placeholder.com/150'
              >
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkGrid>
            <WorkGrid
              id="finestcup"
              title="Finest Cup"
              thumbnail='https://via.placeholder.com/150'
              >
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkGrid>
          </SimpleGrid>
        </Box>
      </Center>
    </Stack>
  );
};

export default Home;

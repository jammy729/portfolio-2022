import React from "react";
import { Link } from "react-router-dom";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import {
  VStack,
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
import data from "../components/work/work-experience/data.json";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    console.log(data[0].key["1"]);
  }, []);
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
    <VStack>
      <Center>
        <Flex
          direction={isLargeScreen ? "row" : "column"}
          pt={isLargeScreen ? "28" : "0"}
          pb={5}
          alignSelf="flex-start"
        >
          <Box mt={isLargeScreen ? -20 : 16} align="flex-start">
            <Text fontSize="3xl" fontWeight="bold">
              Jaehyung Yoo
            </Text>
            <Text color={isDark ? "gray.200" : "black"} mb={4}>
              Mobile and Web Developer | UX & UI Designer
            </Text>
            {/* <Image src={PortfolioImg} boxSize="100px" borderRadius="full" /> */}
            <Stack direction={isLargeScreen ? "row" : "column"} zIndex="999">
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

      <Box pt={isLargeScreen ? "0" : "0"} position="relative">
        <Box
          height="40px"
          width={isLargeScreen ? "600px" : "300px"}
          margin="auto"
        >
          <Heading size={isLargeScreen ? "md" : "lg"} as="u">
            About
          </Heading>
          <Text
            textAlign="justify"
            py="10px"
            fontSize={{ sm: "xl", md: "xl", lg: "3lg" }}
          >
            James is a fourth year undergraduate student in Simon Fraser
            University (SFU) majoring in BSc Interactive Arts and Technology
            with double concentration in Interactive Systems and Design. He is a
            UX oriented front-end web and mobile developer mainly working with
            React/React Native JS framework. He loves planning and designing
            with code. When he is not coding, he loves to play and teach golf.
          </Text>
        </Box>
      </Box>

      <Box pt={["280px", "230px", "230px", "230px", "230px"]}>
        <Box width={isLargeScreen ? "600px" : "80%"} margin="auto">
          <Heading size={isLargeScreen ? "md" : "lg"} as="u">
            Development
          </Heading>
          <SimpleGrid columns={isLargeScreen ? "2" : "1"} spacing={2} py={5}>
            <WorkGrid
              id="personalportfolio"
              title="Personal Portfolio"
              thumbnail={thumbInkDrop}
            >
              A portfolio created using React JS, Chakra-UI as style framework
              and Vercel to host.
            </WorkGrid>
            <WorkGrid
              id="worldinstitutiondatabase"
              title="World Institution Database"
              thumbnail={thumbInkDrop}
            >
              A functional web application that allows users to browse through a
              list of institutions around the world to gain insights. Used PHP,
              HTML, jQuery, and MySQL.
            </WorkGrid>
            <WorkGrid
              id="educationvisualanalytics"
              title="Education Visual Analytics"
              thumbnail={thumbInkDrop}
            >
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkGrid>
            <WorkGrid
              id="geomemories"
              title="Geomemories"
              thumbnail={thumbInkDrop}
            >
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkGrid>
          </SimpleGrid>
        </Box>
      </Box>

      <Box pt={2}>
        <Box width={isLargeScreen ? "600px" : "80%"} margin="auto">
          <Heading size={isLargeScreen ? "md" : "lg"} as="u">
            Design
          </Heading>
          <SimpleGrid columns={isLargeScreen ? "2" : "1"} spacing={2} py={5}>
            <WorkGrid
              id="experiencedesign"
              title="Experience Design"
              thumbnail={thumbInkDrop}
            >
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkGrid>
            <WorkGrid
              id="finestcup"
              title="Finest Cup"
              thumbnail={thumbInkDrop}
            >
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkGrid>
          </SimpleGrid>
        </Box>
      </Box>
    </VStack>
  );
};

export default Home;

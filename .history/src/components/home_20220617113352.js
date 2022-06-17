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
import { HeroSection, About } from "./work/layout";
import { Tag } from "../components/layouts/work-grid";
import cover_wwi from "../components/work/Development/Images/cover-worldinstitution.png"
const Home = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isLargeScreen] = useMediaQuery("(min-width:750px)");

  return (
    <Stack direction="column">
      <HeroSection
        name="James Yoo"
        role="Front-end Developer | UX Designer"
        link="See Work"
        contact="Contact Me"
      />

      <About
        title="About"
        bio="I am a fourth year undergraduate student in Simon Fraser
      University (SFU) majoring in BSc Interactive Arts and Technology
      with double concentration in Interactive Systems and Design. I am an 
      UX oriented front-end web and mobile developer mainly working with
      React/React Native JS framework. I love problem solving and designing
      with code. When I am not coding, I play and teach golf."
      />

      <Center id="development">
        <Box width={isLargeScreen ? "600px" : "80%"}>
          <Heading size={isLargeScreen ? "md" : "lg"} as="u">
            See Recent Work
          </Heading>
          <SimpleGrid columns="1" spacing={2} py={3}>
            <WorkGrid
              id="personalportfolio"
              title="Personal Portfolio"
              thumbnail="https://via.placeholder.com/150"
            >
              <Tag>Development</Tag>A portfolio created using React JS,
              Chakra-UI as style framework and Vercel to host.
            </WorkGrid>
            <WorkGrid
              id="worldinstitutiondatabase"
              title="World Institution Database"
              thumbnail={cover_wwi}
            >
              <Tag>Development</Tag>A functional web application that allows
              users to browse through a list of institutions around the world to
              gain insights. Used PHP, HTML, jQuery, and MySQL.
            </WorkGrid>
            <WorkGrid
              id="experiencedesign"
              title="Be My Eyes"
              thumbnail="https://via.placeholder.com/150"
            >
              <Tag>Design</Tag>A redesign of a mobile app that's aimed towards
              better connection for visually-impaired users
            </WorkGrid>
          </SimpleGrid>
          <Link to="/work">
            <Button
              colorScheme="teal"
              variant="solid"
              cursor="pointer"
              w="100%"
              h="12"
              onClick={() => console.log("clicked")}
            >
              See Work
            </Button>
          </Link>
        </Box>
      </Center>
    </Stack>
  );
};

export default Home;

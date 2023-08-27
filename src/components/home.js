import React from "react";
import { Stack, Text, Center, Box } from "@chakra-ui/react";
import { HeroSection, About } from "./work/layout";
import { useMediaQuery } from "@chakra-ui/media-query";

const Home = () => {
  const [isLargeScreen] = useMediaQuery("(min-width:750px)");

  return (
    <Stack direction="column">
      <HeroSection
        name="James Yoo"
        role="Front-end Developer | UX Designer"
        work="See Work"
        contact="Contact Me"
      />

      <About
        title="About"
        bio="I'm James, a Front-End Developer currently studying Interactive Arts and Technology 
        with Contentration in Interactive Systems at Simon Fraser University. I am an developer 
        mainly working with MERN stack. I love problem solving and designing with code.
      "
      />

      <Center>
        <Box width={isLargeScreen ? "600px" : "80%"} margin="auto">
          <Text textAlign="justify" fontSize={{ sm: "lg", md: "lg", lg: "md" }}>
            This website is built using ReactJS, Chakra-UI (CSS Framework),
            EmailJS and hosted on Vercel.
          </Text>
        </Box>
      </Center>
    </Stack>
  );
};

export default Home;

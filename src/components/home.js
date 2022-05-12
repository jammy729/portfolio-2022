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
} from "@chakra-ui/react";

const Home = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isLargeScreen] = useMediaQuery("(min-width:750px)");

  return (
    <Stack direction="column">
      <Center>
        <Flex
          direction={isLargeScreen ? "row" : "column"}
          spacing="200px"
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
            <Stack direction={isLargeScreen ? "row" : "column"}>
              <a href="https://github.com/jammy729/personal-portfolio">
                <Button
                  colorScheme="teal"
                  variant="solid"
                  size={isLargeScreen ? "lg" : "md"}
                >
                  <Link to="/work">See Work</Link>
                </Button>
              </a>

              <Button
                colorScheme="teal"
                variant="outline"
                size={isLargeScreen ? "lg" : "md"}
              >
                <Link to="/contact">Contact Me</Link>
              </Button>
            </Stack>
          </Box>
        </Flex>
      </Center>

      <Box pt={isLargeScreen ? "0" : "0"}>
        <Box
          height="40px"
          width={isLargeScreen ? "600px" : "80%"}
          margin="auto"
        >
          <Heading size={ isLargeScreen ? 'md' : 'lg'} as="u">
            About
          </Heading>
          <Text textAlign='justify' py='10px' fontSize={{ sm: 'xl', md: 'xl', lg:'lg'}}>
            Jaehyung (James) is a fourth year undergraduate student in Simon
            Fraser University (SFU) majoring in BSc Interactive Arts and
            Technology. He is a friendly ux oriented front-end web and mobile
            developer mainly working with React/React Native JS framework. He
            loves planning and designing with code. When he is not coding, he
            loves to play and teach golf.
          </Text>
        </Box>

        {/* <Center mt='150px' px={4}>
          <SimpleGrid
            mt={isLargeScreen ? 0 : 4}
            columns={isLargeScreen ? 2 : 1}
            spacing={2}
          >
            <Grid
              title={worldDatabase.title}
              description={worldDatabase.description}
            />
            <Grid
              title={worldDatabase.title}
              description={worldDatabase.description}
            />
            <Grid
              title={worldDatabase.title}
              description={worldDatabase.description}
            />
            <Grid
              title={worldDatabase.title}
              description={worldDatabase.description}
            />
          </SimpleGrid>
        </Center> */}
      </Box>
    </Stack>
  );
};

export default Home;

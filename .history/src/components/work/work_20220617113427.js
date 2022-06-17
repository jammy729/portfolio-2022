import React from "react";
import { WorkGrid } from "../layouts/work-grid";
import thumbInkDrop from "../../contents/portfolio.jpg";
import { SimpleGrid, Box, Center, Stack } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import Layout from "../layouts/layout";
import world
const Work = () => {
  const [isLargeScreen] = useMediaQuery("(min-width:750px)");

  return (
    <Stack direction="column">
      <Box width={isLargeScreen ? "600px" : "80%"} margin="auto">
        <Center>
          <Layout title="Development" id="development">
            <SimpleGrid columns="1" spacing={2} py={3}>
              <WorkGrid
                id="personalportfolio"
                title="Personal Portfolio"
                thumbnail="https://via.placeholder.com/150"
              >
                A portfolio created using React JS, Chakra-UI as style framework
                and Vercel to host.
              </WorkGrid>
              <WorkGrid
                id="worldinstitutiondatabase"
                title="World Institution Database"
                thumbnail="https://via.placeholder.com/150"
              >
                A functional web application that allows users to browse through
                a list of institutions around the world to gain insights. Used
                PHP, HTML, jQuery, and MySQL.
              </WorkGrid>
              <WorkGrid
                id="educationvisualanalytics"
                title="Education Visual Analytics"
                thumbnail="https://via.placeholder.com/150"
              >
                A Markdown note-taking app with 100+ plugins, cross-platform and
                encrypted data sync support
              </WorkGrid>
              <WorkGrid
                id="geomemories"
                title="Geomemories"
                thumbnail="https://via.placeholder.com/150"
              >
                A Markdown note-taking app with 100+ plugins, cross-platform and
                encrypted data sync support
              </WorkGrid>
            </SimpleGrid>

            <Layout title="Design" id="design">
              <SimpleGrid columns="1" spacing={2} py={3}>
                <WorkGrid
                  id="experiencedesign"
                  title="Experience Design"
                  thumbnail="https://via.placeholder.com/150"
                >
                  A Markdown note-taking app with 100+ plugins, cross-platform
                  and encrypted data sync support
                </WorkGrid>
                <WorkGrid
                  id="finestcup"
                  title="Finest Cup"
                  thumbnail="https://via.placeholder.com/150"
                >
                  A Markdown note-taking app with 100+ plugins, cross-platform
                  and encrypted data sync support
                </WorkGrid>
              </SimpleGrid>
            </Layout>
          </Layout>
        </Center>
      </Box>
    </Stack>
  );
};

export default Work;

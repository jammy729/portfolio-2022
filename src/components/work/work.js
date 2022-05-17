import React from "react";
import { WorkGrid } from "../layouts/work-grid";
import thumbInkDrop from "../../contents/portfolio.jpg";
import { SimpleGrid, Box, Center } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import Layout from "../layouts/layout";

const Work = () => {
  const [isLargeScreen] = useMediaQuery("(min-width:750px)");

  return (
    <Box m={6}>
      <Center>
        <Layout title="Development">
          <SimpleGrid columns={isLargeScreen ? "2" : "1"} spacing="">
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

          <Layout title="UX Design">
            <SimpleGrid columns={isLargeScreen ? "2" : "1"}>
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
          </Layout>
        </Layout>
      </Center>
    </Box>
  );
};

export default Work;

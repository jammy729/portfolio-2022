import React from "react";
import { WorkGrid } from "../layouts/work-grid";
import thumbInkDrop from "../../contents/portfolio.jpg";
import { SimpleGrid, Center } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import Layout from "../layouts/layout";

const Work = () => {
  const [isLargeScreen] = useMediaQuery("(min-width:750px)");

  return (
      // <Center px={6} mt='200px'>
        <Layout title="Development">
          <SimpleGrid columns={isLargeScreen ? "2" : "1"} spacing='0'>
            <WorkGrid
              id="personalportfolio"
              title="Personal Portfolio"
              thumbnail={thumbInkDrop}
            >
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkGrid>
            <WorkGrid
              id="worldinstitutiondatabase"
              title="World Institution Database"
              thumbnail={thumbInkDrop}
            >
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
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

      // </Center>
  );
};

export default Work;

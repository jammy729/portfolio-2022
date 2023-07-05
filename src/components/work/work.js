import React from "react";
import { WorkGrid } from "../layouts/work-grid";
import { SimpleGrid, Box, Container } from "@chakra-ui/react";
import Layout from "../layouts/layout";
import worldThumb from "./Development/Images/cover-worldinstitution.png";
import evaThumb from "./Development/Images/cover2.png";
import brixThumb from "./Development/Brixwork/cover.png";
import homestayCanadaThumb from "./Development/Images/homestay-canada-cover.png";
const Work = () => {
  return (
    <Box>
      <Container maxW="850px">
        <Layout title="Work" id="development">
          <SimpleGrid columns="1" spacing={2} py={3}>
            <WorkGrid
              id="homestay-canada"
              title="[Full Stack Development] Homestay Canada"
              thumbnail={homestayCanadaThumb}
            >
              Developed customized website that connects homewoners with
              individuals seeking homestay opportunities with custom CMS
              architecture that empowers admins with complete control over
              content management
            </WorkGrid>
            <WorkGrid
              id="brixwork"
              title="[Full Stack Development] Brixwork Real Estate Marketing"
              thumbnail={brixThumb}
            >
              Developed custom websites for realtors that are perfect for
              working with the brand guidelines and implemented on-site SEO
              engineering to optimize website crawlers.
            </WorkGrid>
            <WorkGrid
              id="world-institution-database"
              title="[Full Stack Development] World Institution Database"
              thumbnail={worldThumb}
            >
              A functional web application that allows users to browse through a
              list of institutions around the world to gain insights. Used PHP,
              HTML, jQuery, and MySQL.
            </WorkGrid>
            <WorkGrid
              id="education-visual-analytics"
              title="[Visual Analyst] Educational Visual Analytics"
              thumbnail={evaThumb}
            >
              Designed and implemented an interactive visualization for
              multidimensional data using ObservableHQ and D3JS (Visualization
              Library)
            </WorkGrid>
          </SimpleGrid>
        </Layout>
      </Container>
    </Box>
  );
};

export default Work;

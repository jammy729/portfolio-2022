import React from "react";
import { WorkGrid } from "./work-grid";
import thumbInkDrop from "../../contents/portfolio.jpg";
import {
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import Layout from "../layouts/article";
const Work = () => {
  const [isLargeScreen] = useMediaQuery("(min-width:750px)");

  return (
    <Center px={4} mt={6}>
      <Layout title="Works">
        <SimpleGrid columns={isLargeScreen ? "2" : "1"}>
          <WorkGrid id="worldinstitutiondatabase" title="World Institution Database" thumbnail={thumbInkDrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGrid>
          <WorkGrid id="experiencedesign" title="Experience Design" thumbnail={thumbInkDrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGrid>
          <WorkGrid id="geomemories" title="Geomemories" thumbnail={thumbInkDrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGrid>
          <WorkGrid id="finestcup" title="Finest Cup" thumbnail={thumbInkDrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGrid>
          <WorkGrid id="educationvisualanalytics" title="Education Visual Analytics" thumbnail={thumbInkDrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGrid>
        </SimpleGrid>
      </Layout>
    </Center>

    // <Container>
    // <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} gap={6}>
    //   <Box
    //     height="40px"
    //     width={isLargeScreen ? "600px" : "80%"}
    //     margin="auto"
    //   >
    //     <WorkGrid id="inkdrop" title="Inkdrop" thumbnail={thumbInkDrop}>
    //       A Markdown note-taking app with 100+ plugins, cross-platform and
    //       encrypted data sync support
    //     </WorkGrid>
    //     <WorkGrid id="inkdrop" title="Inkdrop" thumbnail={thumbInkDrop}>
    //       A Markdown note-taking app with 100+ plugins, cross-platform and
    //       encrypted data sync support
    //     </WorkGrid>
    //     <WorkGrid id="inkdrop" title="Inkdrop" thumbnail={thumbInkDrop}>
    //       A Markdown note-taking app with 100+ plugins, cross-platform and
    //       encrypted data sync support
    //     </WorkGrid>
    //   </Box>
    // </SimpleGrid>
    // </Container>
  );
};

export default Work;

// function Grid({ title, description, ...rest }) {
//   return (
//     <Box
//       bg="gray.50"
//       p={7}
//       shadow="md"
//       borderWidth="md"
//       {...rest}
//       maxW="sm"
//       maxH="sm"
//       borderRadius="lg"
//     >
//       <Heading fontSize="xl" color="black">
//         {title}
//       </Heading>
//       <Text color="black" mt={4}>
//         {description}
//       </Text>
//     </Box>
//   );
// }

import { Box, Icon, Text, Container, HStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FaGithub } from "react-icons/fa";

const Bottom = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
`;

const Footer = () => {
  return (
    <Box
      as="footer"
      w="100%"
      position="absolute"
      justifyContent="space-between"
      mt="2rem"
    >
      <Container opacity={0.5}>
        <Bottom>
          &copy; {new Date().getFullYear()} James Yoo. All Rights Reserved.
        </Bottom>
      </Container>

      <HStack>
        <Bottom>
          <a
            href="https://github.com/jammy729/portfolio-2022"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text
              opacity={0.7}
              _hover={{
                opacity: "1",
              }}
            >
              <Icon as={FaGithub} mr={1} />
              Github Source
            </Text>
          </a>
        </Bottom>
        <div></div>
        <div></div>
      </HStack>
    </Box>
  );
};

export default Footer;

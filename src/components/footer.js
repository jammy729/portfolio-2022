import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Bottom = styled.div`
  position: relative;
  width: 100%;
  bottom: 0;
  color: black;
  text-align: center;
`;
const Footer = () => {
  return (
    // <Box align="center" opacity={0.5} fontSize="sm" position='absolute'
    //      left='0' bottom='0' right='0' pt={6} m={3}>
    //   &copy; {new Date().getFullYear()} James Yoo. All Rights Reserved.
    // </Box>

    <Box opacity={0.5} >
      <Bottom>
        &copy; {new Date().getFullYear()} James Yoo. All Rights Reserved.
      </Bottom>
    </Box>
  );
};

export default Footer;

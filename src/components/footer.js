import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Bottom = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
`;

const Footer = () => {
  return (
    <Box opacity={0.5}>
      <Bottom>
        &copy; {new Date().getFullYear()} James Yoo. All Rights Reserved.
      </Bottom>
    </Box>
  );
};

export default Footer;

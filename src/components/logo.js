import React from "react";
import { Box, Center, Image, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useColorMode } from "@chakra-ui/color-mode";
import styled from "@emotion/styled";
import HippoImg from "../contents/hippo.png";
import HippoImgDark from "../contents/hippo-dark.png";
import { useMediaQuery } from "@chakra-ui/react";

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;

  &:hover img {
    transform: rotate(-10deg);
  }
`;
const Logo = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isLargeScreen] = useMediaQuery("(min-width:750px)");
  return (
    <Box>
      <Center>
        <LogoBox>
          <Image
            src={isDark ? HippoImgDark : HippoImg}
            w={{ sm: "70px", md: "60px", lg: "40px" }}
          />
          <Heading
            justifyContent="center"
            size={ isLargeScreen ? 'md' : 'lg'}
            fontWeight="semibold"
            color={isDark ? "white" : "black"}
          >
            <Link to="/">James Yoo</Link>
          </Heading>
        </LogoBox>
      </Center>
    </Box>
  );
};

export default Logo;

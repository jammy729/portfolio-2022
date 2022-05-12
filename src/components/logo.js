import React from "react";
import { Box, Center, Image, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useColorMode } from "@chakra-ui/color-mode";
import styled from "@emotion/styled";
import HippoImg from "../contents/hippo.png";
import HippoImgDark from "../contents/hippo-dark.png";


const LogoBox = styled.span`
  display: inline-flex;
  align-items:center;

  &:hover img {
    transform: rotate(-10deg);
  }
`
const Logo = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box>
      <Center>
        <LogoBox>
          <Image src={isDark ? HippoImgDark : HippoImg} />
          <Heading
            justifyContent="center"
            size="md"
            ml="3"
            fontWeight="semibold"

            color={isDark ? "white" : "black"}
            mr="12"
          >
            <Link to="/">James Yoo</Link>
          </Heading>
        </LogoBox>
      </Center>
    </Box>
  );
};

export default Logo;

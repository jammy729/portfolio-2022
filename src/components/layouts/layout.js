import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";

const Layout = ({ children, title }) => {
  const [isLargeScreen] = useMediaQuery("(min-width:750px)");

  return (
    <Box>
      <Heading
        size={ isLargeScreen ? 'md' : 'xl'}
        fontWeight="bold"
        mb={6}
        px={isLargeScreen ? 10 : 1}
      >
        {title}
      </Heading>
      {children}
    </Box>
  );
};

export default Layout;

import { Link } from "react-router-dom";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { HamburgerIcon } from "@chakra-ui/icons";
import { GoMarkGithub } from "react-icons/go";
import {
  Flex,
  Stack,
  HStack,
  Spacer,
  MenuItem,
  MenuButton,
  Menu,
  MenuList,
  Box,
  MenuGroup,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";

import Logo from "./logo";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Stack direction={"row"} p={5}>
      <Flex w="100%" mx={7}>
        <Logo />

        <HStack ml="auto" display={{ base: "none", lg: "flex" }}>
          <Box px={3}>
            <Link to="./work">
              <Text _hover={{ textDecoration: "u" }}>Work</Text>
            </Link>
          </Box>
          <Box px={3}>
            <Link to="/about">About</Link>
          </Box>
          <Box px={3}>
            <Link to="/contact">Contact me</Link>
          </Box>
          <Box px={3} alignItems="center" display="inline-flex">
            <Link to="/contact">
              <Icon as={GoMarkGithub} mr={1} /> Source
            </Link>
          </Box>
        </HStack>

        <Spacer />

        <Box flex={2} align="right">
          <Box ml={2} display={{ base: "inline-block", lg: "none" }}>
            <Menu isLazy id="navbar-menu">
              <IconButton
              boxSize='4rem'
                mx={2}
                icon={isDark ? <FaSun /> : <FaMoon />}
                onClick={toggleColorMode}
                colorScheme={isDark ? "orange" : "purple"}
              />
              <MenuButton
                boxSize="10rem"
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='outline'
                aria-label="Options"
              />
              <MenuList>
                <MenuGroup>
                  <MenuItem>
                    <Link to="./work">Work</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="./about">About</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="./contact">Contact</Link>
                  </MenuItem>
                  <MenuItem>
                    <Icon as={GoMarkGithub} mr={1} /> Source
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Box>
        </Box>

        <Box display={{ base: "none", lg: "flex" }}>
          <a
            href="https://www.linkedin.com/in/james-yoo-b4a1231a5/"
            target="blank"
          >
            <IconButton
              icon={<FaLinkedin />}
              isRound="true"
              linkButton={true}
              mx={2}
            />
          </a>
          <a href="https://github.com/jammy729" target="blank">
            <IconButton icon={<FaGithub />} isRound="true" linkButton={true} />
          </a>
          <IconButton
            ml={8}
            icon={isDark ? <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
            colorScheme={isDark ? "orange" : "purple"}
          />
        </Box>
      </Flex>
    </Stack>
  );
};

export default Navbar;

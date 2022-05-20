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
import {
  FaSun,
  FaMoon,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";

import Logo from "./logo";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Stack direction={"row"} p={5}>
      <Flex w="full" mx={3}>
        <Logo />

        <HStack ml={5} mt='-10px' display={{ base: "none", lg: "flex" }}>
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
          <Box flex={1} display={{ base: "inline-block", lg: "none" }}>
            <Menu isLazy id="navbar-menu">
              <IconButton
                boxSize="3.5rem"
                mx={2}
                icon={isDark ? <FaSun /> : <FaMoon />}
                onClick={toggleColorMode}
                colorScheme={isDark ? "orange" : "purple"}
              />
              <MenuButton
                boxSize="3.5rem"
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList w={["80vw", "50vw"]}>
                <MenuGroup>
                  <MenuItem ml={3}>
                    <Link to="./work">Work</Link>
                  </MenuItem>
                  <MenuItem ml={3}>
                    <Link to="./about">About</Link>
                  </MenuItem>
                  <MenuItem ml={3}>
                    <Link to="./contact">Contact</Link>
                  </MenuItem>
                  <MenuItem ml={3}>
                    <a
                      href="https://github.com/jammy729/portfolio-2022"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon as={GoMarkGithub} mr={1} /> Source
                    </a>
                  </MenuItem>
                </MenuGroup>
                <MenuGroup title="Contact" textAlign="left" fontWeight="bold">
                  <MenuItem ml={3}>
                    <a
                      href="https://www.linkedin.com/in/james-yoo-b4a1231a5/"
                      target="blank"
                    >
                      <IconButton
                        icon={<FaLinkedinIn />}
                        arial-label='LinkedIn Icon'
                        w={2}
                        linkButton={true}
                        mr={1}
                      />
                      LinkedIn
                    </a>
                  </MenuItem>
                  <MenuItem ml={3}>
                    <a href="https://github.com/jammy729" target="blank">
                      <IconButton
                        icon={<FaGithub />}
                        arial-label='GitHub Icon'
                        linkButton={true}
                        mr={1}
                      />
                      GitHub
                    </a>
                  </MenuItem>{" "}
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

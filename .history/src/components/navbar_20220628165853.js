import { Link } from 'react-router-dom'
import { IconButton } from '@chakra-ui/button'
import { useColorMode } from '@chakra-ui/color-mode'
import { HamburgerIcon } from '@chakra-ui/icons'
import { GoMarkGithub } from 'react-icons/go'
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
  Icon
} from '@chakra-ui/react'
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa'

import Logo from './logo'
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Stack direction={'row'} p={5}>
      <Flex w='full' mx={2}>
        <Logo />

        <HStack
          ml={7}
          justifyContent='center'
          display={{ base: 'none', lg: 'flex' }}
        >
          <Menu justifyContent='center'>
            <Box px={3}>
              <Link to='./work'>
                <Text>Work</Text>
              </Link>
            </Box>
            <Box px={3}>
              <Link to='/contact'>Contact me</Link>
            </Box>
            {/* <Box px={3} alignItems='center' display='inline-flex'>
              <a
                href='https://github.com/jammy729/portfolio-2022'
                target='blank'
              >
                <Icon as={GoMarkGithub} mr={1} /> Source
              </a>
            </Box> */}
          </Menu>
        </HStack>

        <Spacer />

        <Box flex={3} align='right' fontSize='md' fontWeight='semibold'>
          <Box flex={1} display={{ base: 'inline-block', lg: 'none' }}>
            <Menu isLazy id='navbar-menu'>
              <IconButton
                boxSize='3rem'
                mx={1}
                icon={isDark ? <FaSun /> : <FaMoon />}
                onClick={toggleColorMode}
                colorScheme={isDark ? 'orange' : 'purple'}
              />
              <MenuButton
                boxSize='3rem'
                as={IconButton}
                icon={<HamburgerIcon />}
                aria-label='Options'
                colorScheme={isDark ? 'blue' : 'blackAlpha'}
              />
              <MenuList w={['80vw', '50vw']}>
                <MenuGroup>
                  <MenuItem pl={5}>
                    <Link to='./work'>Work</Link>
                  </MenuItem>
                  <MenuItem pl={5}>
                    <Link to='./contact'>Contact</Link>
                  </MenuItem>
                  <MenuItem pl={5}>
                    <a
                      href='https://www.linkedin.com/in/james-yoo-b4a1231a5/'
                      target='blank'
                    >
                      <Icon as={FaLinkedin} mr={1} />
                      LinkedIn
                    </a>
                  </MenuItem>
                  <MenuItem pl={5}>
                    <a href='https://github.com/jammy729' target='blank'>
                      <Icon as={GoMarkGithub} mr={1} />
                      GitHub
                    </a>
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Box>
        </Box>

        <Box display={{ base: 'none', lg: 'flex' }}>
          <a
            href='https://www.linkedin.com/in/james-yoo-b4a1231a5/'
            target='blank'
          >
            <IconButton
              icon={<FaLinkedin />}
              isRound='true'
              linkButton={true}
              mx={2}
            />
          </a>
          <a href='https://github.com/jammy729' target='blank'>
            <IconButton icon={<FaGithub />} isRound='true' linkButton={true} />
          </a>
          <IconButton
            ml={8}
            icon={isDark ? <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
            colorScheme={isDark ? 'orange' : 'purple'}
          />
        </Box>
      </Flex>
    </Stack>
  )
}

export default Navbar

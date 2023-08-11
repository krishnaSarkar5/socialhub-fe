'use client'

import {
    Box,
    Flex,
    Avatar,
    Text,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Input,
    Spacer
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, SearchIcon,EmailIcon,BellIcon} from '@chakra-ui/icons'
import logo from '../../assets/logo.png'
import profilepic from '../../assets/profilepic.jpg'

interface Props {
    children: React.ReactNode
}

const NavLink = (props: Props) => {
    const { children } = props

    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={'#'}>
            {children}
        </Box>
    )
}

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} pos="fixed" w="100%" zIndex={2} top="0" left="0">
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    {/* <Box>Logo</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex> */}
                    <Flex justifyContent={'flex-start'}>
                        <Box pt={"1%"}>
                            <Avatar name='Ryan Florence' size='sm' src={logo} />
                        </Box>
                        <Flex ml="5%">
                            <Box bg={useColorModeValue('white', '#3B3B3B')} pt="3%" pl="10%" color={"#6A6A6A"} borderRadius={"50px 0 0 50px"}><SearchIcon /></Box>
                            <Input variant='Unstyled' placeholder='Search SocialHub' borderRadius={"0 50px 50px 0"} />
                        </Flex>

                    </Flex>

                    <Flex >
                        <Button size='md' onClick={toggleColorMode} mr={"8%"} rounded={"50%"}  bg={useColorModeValue('gray.200', '#3B3B3B')}>
                            {colorMode === 'light' ? <MoonIcon fontSize={"20px"} /> : <SunIcon fontSize={"20px"} />}
                        </Button>
                        <Button pt={"1%"} mr={"8%"}  rounded={"50%"}  bg={useColorModeValue('gray.200', '#3B3B3B')}>
                           
                            <EmailIcon fontSize={"20px"}/>
                        </Button>

                        <Button pt={"1%"} mr={"8%"}  rounded={"50%"}  bg={useColorModeValue('gray.200', '#3B3B3B')}>
                           
                            <BellIcon fontSize={"20px"}/>
                        </Button>

                        <Button pt={"1%"} mr={"8%"} rounded={"50%"}  bg={useColorModeValue('gray.200', '#3B3B3B')}>
                            <Avatar  name='Ryan Florence' size='sm' src={profilepic} />
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}
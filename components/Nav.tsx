import { NextChakraLink } from "./NextChakraLink";
import { Flex } from "@chakra-ui/core";
import { ColorModeToggle } from "./ColorModeToggle";

export const Nav = () => (
  <Flex
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
    maxWidth="900px"
    width="100%"
    as="nav"
    // border={'2px'}
    borderColor="gray.700"
    // background='yellow.100'
    px={12}
    // p={12}
    // mt={[0, 8]}
    // mb={8}
    // mx='auto'
  >
    <NextChakraLink href="/">Home</NextChakraLink>
    <NextChakraLink href="/about">About</NextChakraLink>
    <NextChakraLink href="/users">Users List</NextChakraLink>
    <a href="/api/users">Users API</a>
    <ColorModeToggle />
  </Flex>
);

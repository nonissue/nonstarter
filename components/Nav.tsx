import { Flex, Button, Box } from "@chakra-ui/core";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { NextChakraLink } from "./NextChakraLink";
import { ColorModeToggle } from "./ColorModeToggle";

export const Nav: React.FunctionComponent = () => {
  const shown = useBreakpointValue({ base: false, sm: true });
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="900px"
      width="100%"
      as="nav"
      // border={"1px"}
      borderColor="gray.100"
    >
      {shown ? (
        <Flex width="100%" justifyContent="space-evenly" alignItems="center">
          <NextChakraLink href="/">Home</NextChakraLink>
          <NextChakraLink href="/about">About</NextChakraLink>
          <NextChakraLink href="/users">Users List</NextChakraLink>
          <a href="/api/users">Users API</a>
          <ColorModeToggle />
        </Flex>
      ) : (
        <Flex justifyContent="flex-end" alignItems="center" width="100%">
          <ColorModeToggle />
          <Button size="sm" ml={[2, 2, 0, 0]}>
            ☰
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

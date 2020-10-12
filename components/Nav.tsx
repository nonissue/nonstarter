import { useState } from "react";
// import Link from "next/link";
import { Flex, Box, Stack } from "@chakra-ui/core";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { NextChakraLink } from "./NextChakraLink";
import { ColorModeToggle } from "./ColorModeToggle";

export const Nav: React.FunctionComponent = () => {
  const showBurger = useBreakpointValue({ base: false, sm: true });
  const [showMenuItems, setShowMenuItems] = useState(false);
  return (
    // <Flex
    //   flexDirection="column"
    //   justifyContent="space-between"
    //   alignItems="center"
    //   // maxWidth="900px"
    //   // width="100%"
    //   as="nav"
    //   // border={"1px"}
    //   borderColor="gray.100"
    //   fontWeight="bold"
    // >
    // <Box display={["none", "none", "none", "block"]}>
    <Box>
      <Stack isInline spacing={4} alignItems="center">
        {showMenuItems && "HI!"}
        {showBurger ? (
          <Stack isInline spacing={6} alignItems="center" fontWeight="semibold">
            <NextChakraLink href="/">Home</NextChakraLink>
            <NextChakraLink href="/posts">Posts</NextChakraLink>
            <NextChakraLink href="/users">Users</NextChakraLink>
            <NextChakraLink href="/about">About</NextChakraLink>

            <ColorModeToggle />
          </Stack>
        ) : (
          <Flex justifyContent="flex-end" alignItems="center" width="100%">
            <ColorModeToggle />
            <Box
              // size="sm"
              ml={[2, 2, 0, 0]}
              as="button"
              _hover={{
                background: "gray.100",
                color: "teal.500",
                borderRadius: 3
              }}
              // background="#Ccc"
              p="1"
              px="2"
              // border="1px"
              // borderRadius={6}
              onClick={() => setShowMenuItems(!showMenuItems)}
            >
              ☰
            </Box>
          </Flex>
        )}
        {/* </Flex> */}
      </Stack>
    </Box>
  );
};

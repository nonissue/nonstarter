import { Box, Stack, Text } from "@chakra-ui/core";
import Head from "next/head";

import { Nav } from "./Nav";

export const Header: React.FunctionComponent = () => (
  <>
    <Head>
      <title>nonstarter</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Box shadow="md" mb="6" as="header">
      <Box maxW="700px" mx="auto">
        <Stack
          isInline
          justifyContent="space-between"
          alignItems="center"
          py={4}
        >
          <Box>
            <Stack
              isInline
              spacing={0}
              fontSize={["xl", "xl", "2xl", "2xl"]}
              fontFamily={"mono"}
              fontWeight="300"
              mr={12}
            >
              <Text fontFamily="DM Sans" fontWeight="700">
                non
              </Text>
              <Text fontFamily="DM Sans" fontStyle="">
                starter
              </Text>
            </Stack>
          </Box>
          <Box>
            <Nav />
          </Box>
        </Stack>
      </Box>
    </Box>
    {/* </Flex> */}
    {/* </header> */}
  </>
);

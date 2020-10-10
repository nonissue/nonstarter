import Head from "next/head";
import { Nav } from "./Nav";
import { Flex, Heading } from "@chakra-ui/core";

export const Header: React.FunctionComponent = () => (
  <>
    <Head>
      <title>NONSTARTER</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Flex
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        // p={[0, 6]}
        p={[6, 6, 6, 6]}
        px={[6, 6, 3, 0]}
        // px={0}
        mt={[0, 8]}
        mb={8}
        // border='2px'
        mx="auto"
        // maxWidth='900px'
      >
        <Heading fontSize={["xl", "xl", "3xl", "3xl"]} mr={12}>
          nonstarter
        </Heading>
        <Nav />
      </Flex>
    </header>
  </>
);

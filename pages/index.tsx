// import Link from 'next/link';
import { Box, Heading, Text, Stack } from "@chakra-ui/core";

// import { Chakra } from '../Chakra';
import { Layout } from "../components/Layout";
import { NextChakraLink } from "../components/NextChakraLink";

// interface IndexProps {
//   cookies?: string;
// }

// const IndexPage = ({ cookies }: IndexProps) => (
const IndexPage: React.FunctionComponent = () => (
  // <Chakra cookies={cookies}>
  <Layout>
    <Box fontSize="md">
      {/* <Grid minH='100vh' p={0}> */}
      <Stack spacing={3}>
        <Heading size="md">nonstarter</Heading>
        <Text>
          A modern starting point for web dev, featuring next.js, chakra-ui,
          prisma and more.
        </Text>
        <Text>
          <NextChakraLink href="/about" color="teal.500">
            Features
          </NextChakraLink>
        </Text>
        <Text>
          <NextChakraLink href="/about" color="teal.500">
            Docs
          </NextChakraLink>
        </Text>
      </Stack>
      {/* </Grid> */}
    </Box>
  </Layout>
  // </Chakra>
);

export default IndexPage;

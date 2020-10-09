import { Heading, Text } from "@chakra-ui/core";
import { Layout } from "../components/Layout";
import { NextChakraLink } from "../components/NextChakraLink";

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | nonstarter">
    <Heading size="sm">About</Heading>
    <Text>This is the about page</Text>
    <Text>
      <NextChakraLink href="/">Go home</NextChakraLink>
    </Text>
  </Layout>
);

export default AboutPage;

import { Heading, Text, Grid, Divider } from "@chakra-ui/core";

import { Layout } from "../components/Layout";
import { NextChakraLink } from "../components/NextChakraLink";

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | nonstarter">
    <Grid
      templateColumns={`1fr min(65ch, 100%) 1fr`}
      sx={{
        "& > *": {
          gridColumn: 2
        }
      }}
      rowGap={3}
    >
      <Heading size="lg">About</Heading>
      {/* <Text sx={{ "&": { gridColumn: "-1 / 1" } }}>This is the about page</Text> */}
      <Text>This is the about page</Text>

      <Divider />

      <Text>
        <NextChakraLink href="/" fontFamily="mono" color="blue.800">
          Home
        </NextChakraLink>
      </Text>
    </Grid>
  </Layout>
);

export default AboutPage;

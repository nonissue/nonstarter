import { Grid, Heading, Text } from "@chakra-ui/core";
import { Layout } from "../../components/Layout";
import { Post } from "../../interfaces";

// Move to interfaces

const post: React.FunctionComponent<Post> = () => {
  return (
    <Layout>
      <Grid templateColumns={`1fr min(65ch, 100%) 1fr`}>
        <Grid column="2">
          <Heading>Post 1</Heading>
        </Grid>
        <Grid column="2">
          <Text>This is a post!</Text>
        </Grid>
        <Grid column="-1 / 1" w="100%">
          <Text>This text is full-bleed</Text>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default post;

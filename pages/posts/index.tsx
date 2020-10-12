import { Grid, Heading, Text } from "@chakra-ui/core";

import { Layout } from "../../components/Layout";
import { PostProps } from "./[slug]";

// Move to interfaces
type PostsProps = {
  id: number;
  title: string;
  posts: PostProps[];
};

const posts: React.FunctionComponent<PostsProps> = () => {
  return (
    <Layout>
      <Grid templateColumns={`1fr min(65ch, 100%) 1fr`} px="2">
        <Grid column="2" my="2">
          <Heading>Post 1</Heading>
          <Text>
            A modern starting point for web dev, featuring next.js, chakra-ui,
            prisma and more. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ut a mollis lorem. In fringilla lorem aliquet odio posuere
            scelerisque. Sed ornare nunc vel ante consequat, in rutrum massa
            tincidunt. Mauris quis ex vel enim facilisis tincidunt. In hac
            habitasse platea dictumst. Donec sodales ultrices urna, sed bibendum
            elit lacinia id. Morbi sed neque ante. Etiam ligula dui, congue sed
            malesuada sed, accumsan nec sem.
          </Text>
        </Grid>
        <Grid column="2" my="2">
          <Heading>Post 2</Heading>
          <Text>
            A modern starting point for web dev, featuring next.js, chakra-ui,
            prisma and more. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ut a mollis lorem. In fringilla lorem aliquet odio posuere
            scelerisque. Sed ornare nunc vel ante consequat, in rutrum massa
            tincidunt. Mauris quis ex vel enim facilisis tincidunt. In hac
            habitasse platea dictumst. Donec sodales ultrices urna, sed bibendum
            elit lacinia id. Morbi sed neque ante. Etiam ligula dui, congue sed
            malesuada sed, accumsan nec sem.
          </Text>
        </Grid>
        <Grid
          column="-1 / 1"
          w="100%"
          textColor="gray.100"
          background="gray.900"
          p="4"
          maxW="90%"
          m="auto"
          my="2"
          pt="2"
        >
          <Heading>Full-bleed Post 3</Heading>
          <Text>
            A modern starting point for web dev, featuring next.js, chakra-ui,
            prisma and more. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ut a mollis lorem. In fringilla lorem aliquet odio posuere
            scelerisque. Sed ornare nunc vel ante consequat, in rutrum massa
            tincidunt. Mauris quis ex vel enim facilisis tincidunt. In hac
            habitasse platea dictumst. Donec sodales ultrices urna, sed bibendum
            elit lacinia id. Morbi sed neque ante. Etiam ligula dui, congue sed
            malesuada sed, accumsan nec sem.
          </Text>
        </Grid>
        <Grid column="2" my="2">
          <Heading>Post 4</Heading>
          <Text>
            A modern starting point for web dev, featuring next.js, chakra-ui,
            prisma and more. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ut a mollis lorem. In fringilla lorem aliquet odio posuere
            scelerisque. Sed ornare nunc vel ante consequat, in rutrum massa
            tincidunt. Mauris quis ex vel enim facilisis tincidunt. In hac
            habitasse platea dictumst. Donec sodales ultrices urna, sed bibendum
            elit lacinia id. Morbi sed neque ante. Etiam ligula dui, congue sed
            malesuada sed, accumsan nec sem.
          </Text>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default posts;

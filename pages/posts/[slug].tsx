import { PrismaClient } from "@prisma/client";
import { Grid, Heading, Text } from "@chakra-ui/core";
import { Layout } from "../../components/Layout";
// import { Post } from "../../interfaces";

/* @FIXME: Fix typings -> getServerSideProps, post 
Maybe fixed? Since getServerSideProps is just returning JSON...
Ugly though, and no typesafety
*/

const PostPage: React.FunctionComponent<{ post: string }> = ({ post }) => {
  if (!post) {
    return <Layout>Loading...</Layout>;
  }

  const postData = JSON.parse(post);

  return (
    <Layout>
      <Grid templateColumns={`1fr min(65ch, 100%) 1fr`} rowGap={4}>
        <Grid column="2" px={[4, 4, 2, 2]}>
          <Heading>{postData.title}</Heading>
        </Grid>
        <Grid column="-1 / 1" w="100%">
          <img
            alt="Users Hero"
            src="https://picsum.photos/seed/non/2000/700?grayscale"
          />
        </Grid>
        <Grid column="2" px={[4, 4, 2, 2]}>
          <Heading size="sm" fontWeight="normal" fontFamily="body">
            — {postData.author.name}
          </Heading>
        </Grid>
        <Grid column="2" px={[4, 4, 2, 2]}>
          <Text>{postData.content}</Text>
        </Grid>
      </Grid>
    </Layout>
  );
};

export const getServerSideProps = async (): Promise<{
  props: { post: string };
}> => {
  const prisma = new PrismaClient();

  const postResponse = await prisma.post.findOne({
    where: { id: 1 },
    include: { author: true }
  });

  const json = await JSON.stringify(postResponse);

  return {
    props: { post: json }
  };
};

export default PostPage;

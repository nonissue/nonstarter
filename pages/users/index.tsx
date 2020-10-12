import { GetStaticProps } from "next";
import Link from "next/link";
import { Heading, Grid, Text } from "@chakra-ui/core";

import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import { Layout } from "../../components/Layout";
import List from "../../components/List";

type Props = {
  items: User[];
};

const WithStaticProps: React.FunctionComponent<Props> = ({ items }) => (
  <Layout title="Users">
    <Grid
      templateColumns={`1fr min(65ch, 100%) 1fr`}
      sx={{
        "& > *": {
          gridColumn: 2
        }
      }}
    >
      <Heading size="lg">Users List</Heading>

      <Text sx={{ "&": { gridColumn: "-1 / 1", width: "100%" } }}>
        Example fetching data from inside <code>getStaticProps()</code>. <br />
        THIS IS FULL BLEED
      </Text>
      <Text>You are currently on: /users</Text>
      <List items={items} />
      <Text>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </Text>
    </Grid>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData;
  return { props: { items } };
};

export default WithStaticProps;

import {
  Box,
  Heading,
  Stack,
  Text,
  Divider,
  Alert,
  AlertIcon
} from "@chakra-ui/core";

import { Layout } from "../components/Layout";
import { NextChakraLink } from "../components/NextChakraLink";

const IndexPage: React.FunctionComponent = () => (
  // <Chakra cookies={cookies}>
  <Layout>
    <Box maxW="min(65ch, 100%)" mx="auto">
      <Stack spacing={3}>
        <Heading size="lg">Info</Heading>
        <Alert status="warning">
          <AlertIcon />
          This project is in its infancy.
        </Alert>
        <Text fontFamily={"body"}>
          A modern starting point for web dev, featuring next.js, chakra-ui,
          prisma and more. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Ut a mollis lorem. In fringilla lorem aliquet odio posuere
          scelerisque. Sed ornare nunc vel ante consequat, in rutrum massa
          tincidunt. Mauris quis ex vel enim facilisis tincidunt. In hac
          habitasse platea dictumst. Donec sodales ultrices urna, sed bibendum
          elit lacinia id. Morbi sed neque ante. Etiam ligula dui, congue sed
          malesuada sed, accumsan nec sem.
        </Text>
        <Divider />
        <Stack isInline fontFamily="mono">
          <Text>
            <NextChakraLink href="/about">Features</NextChakraLink>
          </Text>
          <Text>•</Text>
          <Text>
            <NextChakraLink href="/about">Docs</NextChakraLink>
          </Text>
          <Text>•</Text>
          <Text>
            <NextChakraLink href="/about">Changelog</NextChakraLink>
          </Text>
        </Stack>
      </Stack>
      {/* </Grid> */}
      {/* </Box> */}
    </Box>
  </Layout>
  // </Chakra>
);

export default IndexPage;

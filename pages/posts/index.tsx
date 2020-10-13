import { Grid, Heading, Text } from "@chakra-ui/core";

import { Layout } from "../../components/Layout";
import { Posts } from "../../interfaces";

// Move to interfaces

const posts: React.FunctionComponent<Posts> = () => {
  return (
    <Layout>
      <Grid templateColumns={`1fr min(65ch, 100%) 1fr`}>
        <Grid column="2" my="4" px={["4", "4", "2", "2"]}>
          <Heading size="lg" mb="2">
            It Was a Dark and Stormy Night
          </Heading>
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
        <Grid column="2" my="2" px={["4", "4", "2", "2"]}>
          <Heading size="lg" mb="2">
            The first time Yossarian saw the chaplain, he fell madly in love
            with him.
          </Heading>
          <Text>
            There was only one catch and that was Catch-22, which specified that
            a concern for one&apos;s safety in the face of dangers that were
            real and immediate was the process of a rational mind. Orr was crazy
            and could be grounded. All he had to do was ask; and as soon as he
            did, he would no longer be crazy and would have to fly more
            missions. Orr would be crazy to fly more missions and sane if he
            didn&apos;t, but if he was sane he had to fly them. If he flew them
            he was crazy and didn&apos;t have to; but if he didn&apos;t want to
            he was sane and had to. Yossarian was moved very deeply by the
            absolute simplicity of this clause of Catch-22 and let out a
            respectful whistle.
            <br />
            <br />
            <p>
              &quot;That&apos;s some catch, that Catch-22,&quot; he observed.
            </p>
            <br />
            <p>&quot;It&apos;s the best there is,&quot; Doc Daneeka agreed.</p>
          </Text>
        </Grid>
        <Grid
          column="-1 / 1"
          w="100%"
          textColor="white"
          background="gray.900"
          p={["4", "4", "3", "3"]}
          pt={["3", "3", "3", "2"]}
          pb={["3", "3", "5", "4"]}
          m="auto"
          my="4"
          maxW={["100%", "100%", "100%", "75%"]}
        >
          <Heading size="lg" mb="2">
            It was octarine, the colour of magic.
          </Heading>
          <Text>
            It was alive and glowing and vibrant and it was the undisputed
            pigment of the imagination, because wherever it appeared it was a
            sign that mere matter was a servant of the powers of the magical
            mind. It was enchantment itself. But Rincewind always thought it
            looked a sort of greenish-purple. It was all very well going on
            about pure logic and how the universe was ruled by logic and the
            harmony of numbers, but the plain fact of the matter was that the
            Disc was manifestly traversing space on the back of a giant turtle
            and the gods had a habit of going round to atheists&apos; houses and
            smashing their windows.
          </Text>
        </Grid>
        <Grid column="2" my="2" px={["4", "4", "2", "2"]}>
          <Heading size="lg" mb="2">
            He was an old man who fished alone in a skiff in the Gulf Stream and
            he had gone eighty-four days now without taking a fish.
          </Heading>
          <Text>
            In the first forty days a boy had been with him. But after forty
            days without a fish the boy’s parents had told him that the old man
            was now definitely and finally salao, which is the worst form of
            unlucky, and the boy had gone at their orders in another boat which
            caught three good fish the first week. It made the boy sad to see
            the old man come in each day with his skiff empty and he always went
            down to help him carry either the coiled lines or the gaff and
            harpoon and the sail that was furled around the mast. The sail was
            patched with flour sacks and, furled, it looked like the flag of
            permanent defeat.
          </Text>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default posts;

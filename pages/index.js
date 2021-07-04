import Head from "next/head";
import { useColorMode, Heading, Text, Flex, Stack } from "@chakra-ui/react";

import Container from "../components/Container";

export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  return (
    <Container>
      <Head>
        <title>Home - Restu Fauzi</title>
        <link rel="shortcut icon" href="/logo.png"></link>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Hi, I'm Restu Fauzi</Heading>
          <Text color={colorSecondary[colorMode]}>
            a self-taught junior front-end developer. I primarily focus on
            writing clean and efficient code also proficient in HTML, CSS,
            JavaScript and React.
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}

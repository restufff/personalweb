import Head from "next/head";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
} from "@chakra-ui/react";

import Container from "../components/Container";

export default function About() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  return (
    <Container>
      <Head>
        <title>About Me - Restu Fauzi</title>
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
          <Heading mb={3}>About Me</Heading>
          <Text color={colorSecondary[colorMode]}>
            A self taught who trying to focusing the front-end journey, hoping
            someday will be mastering all the front-end skills.
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={3}>Education</Heading>
          <Heading as="h2" size="md" fontWeight="medium" mb={1}>
            Universitas Nasional
          </Heading>
          <Text mb={5} color={colorSecondary[colorMode]}>
            Informatics Engineering · 2018 - Present
          </Text>
          <Heading as="h2" size="md" fontWeight="medium" mb={1}>
            SMAN 64 JKT
          </Heading>
          <Text color={colorSecondary[colorMode]}>IPS · 2013 - 2016</Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={3}>Contact</Heading>
          <Heading as="h2" size="md" fontWeight="medium" mb={1}>
            Email
          </Heading>
          <Link mb={5} color={colorSecondary[colorMode]}>
            restuff222@gmail.com
          </Link>
          <Heading as="h2" size="md" fontWeight="medium" mb={1}>
            Github
          </Heading>
          <Link
            href="https://github.com/restufff "
            color={colorSecondary[colorMode]}
          >
            https://github.com/restufff
          </Link>
        </Flex>
      </Stack>
    </Container>
  );
}

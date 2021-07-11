import React from "react";
import Head from "next/head";
import { useColorMode, Heading, Flex, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";

import Container from "../components/Container";

export default function BlogLayout({ children, frontMatter }) {
  const { colorMode } = useColorMode();
  const textColor = {
    light: "gray.700",
    dark: "gray.400",
  };
  const router = useRouter();
  const slug = router.asPath.replace("/works", "");
  return (
    <Container>
      <Head>
        <title>${slug} - Works - Restu Fauzi</title>
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <Stack
        as="article"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="680px"
        w="100%"
        px={5}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          w="100%"
        >
          <Heading letterSpacing="wide" mb={2} as="h1" size="xl">
            {frontMatter.title}
          </Heading>
        </Flex>
        {children}
      </Stack>
    </Container>
  );
}

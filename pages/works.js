import React, { useState } from "react";
import Head from "next/head";
import {
  Heading,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Link,
} from "@chakra-ui/react";

import Container from "../components/Container";
import { getAllFilesFrontMatter } from "../lib/mdx";
import WorksPost from "../components/BlogPost";

import { SearchIcon } from "@chakra-ui/icons";

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");

  const filteredWorksPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <link rel="shortcut icon" href="/logo.png" />
        <title>Home - Restu Fauzi</title>
        <meta
          name="description"
          content="A self-taught junior Front-End developer. Focusing Front-End journey
          and crafting beautiful apps with React and ❤️"
        />
        <meta property="og:title" content="Restu Fauzi | Front-end Developer" />
        <meta property="og:url" content={`https://restufauzi.netlify.app/`} />
      </Head>
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            px={4}
          >
            <Heading mb={4}>Works ({posts.length} posts)</Heading>
            <InputGroup mb={4} mr={4} w="100%" pr={1}>
              <Input
                aria-label="Search by title"
                placeholder="Search by title"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <InputRightElement mr={2}>
                <SearchIcon color="gray.300" />
              </InputRightElement>
            </InputGroup>
            {!filteredWorksPosts.length && "No posts found :("}
            {filteredWorksPosts.map((frontMatter) => (
              <WorksPost key={frontMatter.title} {...frontMatter} />
            ))}
            <Text fontSize="lg" mb={5}>
              See more on{" "}
              <Link href="https://github.com/restufff" fontWeight="medium">
                Github
              </Link>
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}

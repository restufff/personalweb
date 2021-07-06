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
        <title>Works - Restu Fauzi</title>
        <link rel="shortcut icon" href="/logo.png" />
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
            <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
              Works ({posts.length} posts)
            </Heading>
            <InputGroup mb={4} mr={4} w="100%">
              <Input
                aria-label="Search by title"
                placeholder="Search by title"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <InputRightElement>
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

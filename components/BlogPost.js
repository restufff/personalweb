import React from "react";
import NextLink from "next/link";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Box,
  Link,
  Tag,
} from "@chakra-ui/react";

const BlogPost = ({ title, summary, slug, tag }) => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <NextLink href={`works/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: "none" }}>
        <Box mb={10} display="block" width="100%">
          <Flex
            width="100%"
            align="flex-start"
            justifyContent="space-between"
            flexDirection={["column", "row"]}
          >
            <Flex
              flexDirection="column"
              align="flex-start"
              justifyContent="start"
              width="100%"
            >
              <Heading size="md" as="h3" mb={1} fontWeight="medium">
                {title}
              </Heading>
            </Flex>
          </Flex>
          <Text mb={1} color={secondaryTextColor[colorMode]}>
            {summary}
          </Text>
          <Tag variant="solid" color="white" colorScheme="teal">
            {tag}
          </Tag>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPost;

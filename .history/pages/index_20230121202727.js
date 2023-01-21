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
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={4}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Hi, I am Restu Fauzi</Heading>
          <Text color={colorSecondary[colorMode]}>
            A self-taught junior Front-End developer & QA Engineer. Currently
            working as QA especially Quality Assurance Automation Engineer who
            has responsibility to provide test script for running testing such
            smoke testing, regression testing, sanity testing, functional
            testing In many platforms etc; Mobile Apps, Web Apps, and Restful
            API using Katalon Studio, Cypress, and Selenium Web Driver.
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}

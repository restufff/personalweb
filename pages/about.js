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
import { LinkIcon } from "@chakra-ui/icons";
import { IoLogoLinkedin, IoMail } from "react-icons/io5";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Icon } from "@chakra-ui/react";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";

export default function About() {
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
          <Heading mb={3}>About Me</Heading>
          <Text color={colorSecondary[colorMode]}>
            As a self-taught individual, I'm concurrently mastering both front-end development and software testing. 
            Why? Because I believe understanding both perspectives—building software and ensuring its quality—is essential for delivering top-notch products.
            <br />
            Currently, I work as a Quality Assurance Automation Engineer, where I craft test scripts for various platforms like Mobile Apps, Web Apps, and Restful APIs. I utilize tools like Katalon Studio, Cypress, and Selenium WebDriver to execute tests such as smoke testing, regression testing, and functional testing.
             <br />
            Learning front-end development alongside QA engineering enables me to grasp the full picture of software development. This knowledge not only helps me identify potential issues early but also enhances collaboration with developers.
            <br />
            In essence, my journey aims to blend front-end development skills with testing proficiency to deliver high-quality software that exceeds user expectations.
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={3}>Working Experience</Heading>
          <Heading as="h2" size="md" fontWeight="medium" mb={1}>
          <Link
            mb={5}
            href="https://www.linkedin.com/company/asa-r%C3%A9n/"
            isExternal
          >
            Asa Rén
          </Link>
          </Heading>
          <Text color={colorSecondary[colorMode]}>
            QA Engineer · May 2024 - Present
            {/* <Text color={colorSecondary[colorMode]}></Text> */}
          </Text>
          <Heading as="h2" size="md" fontWeight="medium" mt={4} mb={1}>
          <Link
            mb={5}
            href="https://www.linkedin.com/company/pt.-federal-international-finance/"
            isExternal
          >
            FIFGROUP
          </Link>
          </Heading>
          <Text color={colorSecondary[colorMode]}>
            QA Engineer · April 2022 - May 2024
            {/* <Text color={colorSecondary[colorMode]}></Text> */}
          </Text>
          <Heading as="h2" size="md" fontWeight="medium" mt={4} mb={1}>
          <Link
            mb={5}
            href="https://www.linkedin.com/company/smartfren-telecom/"
            isExternal
          >
            Smartfren
          </Link>
          </Heading>
          <Text color={colorSecondary[colorMode]}>
            QA Automation · April 2021 - April 2022
            {/* <Text color={colorSecondary[colorMode]}></Text> */}
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
          <Text mb={1} color={colorSecondary[colorMode]}>
            Computer Science · 2018 - 2022
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={3}>Contacts</Heading>
          <Heading as="h2" size="md" fontWeight="medium" mb={1}>
            Email
          </Heading>
          <Link
            mb={5}
            color={colorSecondary[colorMode]}
            href="mailto: restuff222@gmail.com"
            isExternal
          >
            <Icon as={IoMail} /> restuff222@gmail.com
          </Link>
          <Heading as="h2" size="md" fontWeight="medium" mb={1}>
            Github
          </Heading>
          <Link
            mb={5}
            href="https://github.com/restufff"
            isExternal
            color={colorSecondary[colorMode]}
          >
            <Icon as={SiGithub} /> https://github.com/restufff
          </Link>
          <Heading as="h2" size="md" fontWeight="medium" mb={1}>
            Linkedin
          </Heading>
          <Link
            color={colorSecondary[colorMode]}
            href="https://www.linkedin.com/in/restufauzi/"
            isExternal
          >
            <Icon as={SiLinkedin} /> Restu Fauzi
          </Link>
        </Flex>
      </Stack>
    </Container>
  );
}

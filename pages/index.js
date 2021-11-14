import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Hola! I&apos;m a developer from VietNam!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Nghi Nguyen
            </Heading>
            <p>( Developer / Esports / {' '}
              <Link href="https://chess.com/member/nomalguy" target="_blank">
                Chess
              </Link> )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/avatar.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I am a full-stack developer based in Vietnam with a
            passion for building digital &quot;thing&quot; for life. I am joining
            with my co-worker anywhere to solve anyone&apos;s problems.
            In the free time, I ♥ playing sports with my homies.
            Currently, I am building my {' '}
            <NextLink href="./works">
              <Link>Metaverse</Link>
            </NextLink> on my own.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1998</BioYear>
            Born in Binh Phuoc, VietNam.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Internship at DEK Technologies
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed the Bachelor&apos;s Program
            in the Ho Chi Minh City University of
            Foreign Languages and Information Technology
          </BioSection>
          <BioSection>
            <BioYear>Also in 2020</BioYear>
            Worked at Portt.com VietNam
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            Also Full-stack developer at: (Update later)
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Movie, {' '}
            <Link href="https://chess.com/member/nomalguy" target="_blank">
              Chess
            </Link>,
            Badminton, Music, Playing Esports,{' '}
            <Link href="https://instagram.com/phatnghi/" target="_blank">
              Photography
            </Link>
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the cloud
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/NP712N" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @np712n
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/Nghi62349089" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @np712n
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/phatnghi/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @np712n
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://discord.gg/JvYcC9W7" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoDiscord} />}
                >
                  Discord
                </Button>
              </Link>
            </ListItem>
          </List>

          <Box align="center" my={4}>
            <NextLink href="/posts">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Popular posts
              </Button>
            </NextLink>
          </Box>
        </Section>

      </Container>
    </Layout>
  )
}

export default Page
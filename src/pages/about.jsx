import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Tag,
  TagLabel,
  SimpleGrid,
  Icon,
  useColorMode,
  Container,
  Grid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  HStack,
  useBreakpointValue,
  usePrefersReducedMotion
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import {
  FaCode,
  FaHeart,
  FaLaptopCode,
  FaArrowRight,
  FaBrain,
  FaCogs,
  FaCloud,
  FaPuzzlePiece,
  FaPalette,
  FaDatabase,
  FaTools,
  FaRobot,
  FaPencilRuler,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFileDownload
} from 'react-icons/fa';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import img from '../public/image.jpg';

const About = () => {
  const { colorMode } = useColorMode();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useBreakpointValue({ base: true, lg: false });

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
      direction: 'vertical',
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const skillCategories = [
    {
      icon: FaBrain,
      title: 'Programming Languages',
      items: ['TypeScript', 'JavaScript', 'PHP', 'Java', 'HTML5', 'CSS3'],
      color: 'purple'
    },
    {
      icon: FaCogs,
      title: 'Backend Frameworks',
      items: ['Node.js', 'Express.js', 'NestJS', 'Spring Boot'],
      color: 'blue'
    },
    {
      icon: FaCloud,
      title: 'Cloud Platforms',
      items: ['AWS', 'Azure', 'OpenStack', 'Firebase', 'Supabase'],
      color: 'cyan'
    },
    {
      icon: FaPuzzlePiece,
      title: 'Frontend Frameworks',
      items: ['React', 'Angular.js', 'Next.js'],
      color: 'teal'
    },
    {
      icon: FaPalette,
      title: 'UI Libraries',
      items: ['Chakra UI', 'TailwindCSS'],
      color: 'pink'
    },
    {
      icon: FaDatabase,
      title: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
      color: 'orange'
    },
    {
      icon: FaTools,
      title: 'DevOps Tools',
      items: ['Jenkins', 'GitHub', 'GitHub Actions'],
      color: 'yellow'
    },
    {
      icon: FaRobot,
      title: 'AI/ML Frameworks',
      items: ['TensorFlow'],
      color: 'green'
    },
    {
      icon: FaPencilRuler,
      title: 'Design Tools',
      items: ['Figma'],
      color: 'red'
    }
  ];


  const alltexts = [


    "Crafting Digital Experiences",
    "I architect immersive digital solutions that blend cutting-edge technology with elegant design.",
    "Kebsi Montassar",
    "Full Stack Developer",

    "Professional Journey",
    "I'm a passionate full-stack developer with expertise in creating performant, accessible, and visually stunning web applications.",
    "My approach combines modern development practices with user-centered design principles to deliver exceptional digital experiences.",
    "Explore my work",
    "Technical Expertise",
    skillCategories,
    "Beyond the Code",
    "when I'm not architecting digital experiences, you'll find me exploring the intersection of technology and creativity through photography, contributing to open-source projects, or experimenting with generative art.",
    "I'm passionate about sustainable technology practices and mentoring the next generation of developers through tech community initiatives.",


  ]






  const gradientShift = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  `;

  const gradientAnimation = `${gradientShift} 15s ease infinite`;

  return (
    <>
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={0}
        opacity={0.05}
        bgImage={colorMode === 'light' ?
          "linear-gradient(to right, gray.200 1px, transparent 1px), linear-gradient(to bottom, gray.200 1px, transparent 1px)" :
          "linear-gradient(to right, gray.700 1px, transparent 1px), linear-gradient(to bottom, gray.700 1px, transparent 1px)"}
        backgroundSize="40px 40px"
      />

      <Box
        pt="100px"
        position="relative"
        overflow="hidden"
        minH="100vh"
        bg={colorMode === 'light' ? 'gray.50' : 'gray.900'}
      >

        {!prefersReducedMotion && (
          <>
            <Box
              position="absolute"
              top="10%"
              left="5%"
              w="300px"
              h="300px"
              borderRadius="full"
              bgGradient="linear(to-br, purple.400, blue.400)"
              filter="blur(80px)"
              opacity={0.15}
            />
            <Box
              position="absolute"
              bottom="20%"
              right="10%"
              w="400px"
              h="400px"
              borderRadius="full"
              bgGradient="linear(to-br, pink.400, purple.400)"
              filter="blur(100px)"
              opacity={0.15}
            />
          </>
        )}



        <Container
          maxW="container.xl"
          py={20}
          position="relative"
          zIndex={1}
        >
          <Box mb={16}>
            <Heading
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              lineHeight="1.1"
              mb={6}
            >
              <Box
                as="span"
                bgGradient="linear(to-r, purple.500, blue.500, pink.500)"
                bgClip="text"
                backgroundSize="200% auto"
                animation={!prefersReducedMotion ? gradientAnimation : undefined}
              >
                {alltexts[0]}
              </Box>
            </Heading>
            <Text
              fontSize="xl"
              color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
              maxW="2xl"
            >
              {alltexts[1]}
            </Text>
          </Box>

          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={8}
            mb={16}
          >
            {!isMobile && (
              <Box
                position="sticky"
                top="20px"
                height="fit-content"
              >
                <Box
                  position="relative"
                  h="600px"
                  borderRadius="3xl"
                  overflow="hidden"
                  boxShadow="2xl"
                  border="1px solid"
                  borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
                >
                  <Image
                    src={img}
                    alt="Professional profile"
                    objectFit="cover"
                    w="100%"
                    h="100%"
                  />

                  <Box
                    position="absolute"
                    bottom={4}
                    right={4}
                    bg={colorMode === 'light' ? 'whiteAlpha.900' : 'blackAlpha.800'}
                    backdropFilter="blur(8px)"
                    borderRadius="xl"
                    p={4}
                    boxShadow="lg"
                    border="2px solid"
                    borderColor={colorMode === 'light' ? 'purple.200' : 'purple.700'}
                    transform="rotate(-2deg)"
                    _hover={{
                      transform: "rotate(0deg)",
                    }}
                    transition="transform 0.3s ease"
                  >
                    <Heading size="md" mb={1}>
                      {alltexts[2]}
                    </Heading>
                    <Text
                      fontSize="sm"
                      color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
                      fontWeight="500"
                    >
                      {alltexts[3]}
                    </Text>
                    <Box
                      position="absolute"
                      top={-2}
                      right={-2}
                      w={3}
                      h={3}
                      bg="purple.500"
                      borderRadius="full"
                      border="2px solid"
                      borderColor={colorMode === 'light' ? 'white' : 'gray.800'}
                    />
                  </Box>
                </Box>
                {!prefersReducedMotion && (
                  <>
                    <Box
                      position="absolute"
                      top="-40px"
                      right="-40px"
                      w="120px"
                      h="120px"
                      borderRadius="full"
                      bgGradient="linear(to-br, purple.500, pink.500)"
                      filter="blur(20px)"
                      opacity={0.6}
                    />
                    <Box
                      position="absolute"
                      bottom="-30px"
                      left="-30px"
                      w="80px"
                      h="80px"
                      borderRadius="full"
                      bgGradient="linear(to-br, blue.500, teal.500)"
                      filter="blur(15px)"
                      opacity={0.6}
                    />
                  </>
                )}
              </Box>
            )}


            <Box>
              <Box
                bg={colorMode === 'light' ? 'white' : 'gray.800'}
                borderRadius="2xl"
                p={8}
                boxShadow="xl"
                border="1px solid"
                borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
                position="relative"
                overflow="hidden"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  bgGradient: 'linear(to-r, purple.500, blue.500)'
                }}
              >
                <Flex align="center" mb={4}>
                  <Icon
                    as={FaCode}
                    mr={3}
                    color="purple.500"
                    boxSize={6}
                  />
                  <Heading as="h2" size="lg" fontWeight="700">
                    {alltexts[4]}
                  </Heading>
                </Flex>
                <VStack spacing={4} align="stretch">
                  <Text fontSize="lg" lineHeight="tall">
                    {alltexts[5]}
                  </Text>
                  <Text fontSize="lg" lineHeight="tall">
                    {alltexts[6]}
                  </Text>
                  <Flex
                    align="center"
                    color="purple.500"
                    fontWeight="600"
                    mt={4}
                    _hover={{ transform: 'translateX(5px)' }}
                    transition="transform 0.2s ease"
                  >
                    <Text mr={2}>
                      {alltexts[7]}
                    </Text>
                    <Icon as={FaArrowRight} />
                  </Flex>
                </VStack>
              </Box>
            </Box>
          </Grid>

          <Box mb={16}>
            <Heading size="xl" mb={8} fontWeight="800">
              <Box
                as="span"
                bgGradient="linear(to-r, blue.500, teal.500)"
                bgClip="text"
              >
                {alltexts[8]}
              </Box>
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {alltexts[9].map((category) => (
                <Box
                  key={category.title}
                  bg={colorMode === 'light' ? 'white' : 'gray.800'}
                  borderRadius="2xl"
                  p={6}
                  border="1px solid"
                  borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
                  position="relative"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: 'xl',
                    borderColor: `${category.color}.400`,
                  }}
                  overflow="hidden"
                  _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    bgGradient: `linear(to-r, ${category.color}.400, ${category.color}.600)`,
                  }}
                >
                  <Flex align="center" mb={4}>
                    <Box
                      p={3}
                      borderRadius="xl"
                      bg={colorMode === 'light' ? `${category.color}.50` : `${category.color}.900`}
                      color={`${category.color}.500`}
                    >
                      <Icon as={category.icon} boxSize={6} />
                    </Box>
                    <Heading size="md" ml={3}>
                      {category.title}
                    </Heading>
                  </Flex>
                  <Flex flexWrap="wrap" gap={2}>
                    {category.items.map((skill) => (
                      <Tag
                        key={skill}
                        size="lg"
                        borderRadius="full"
                        px={4}
                        py={2}
                        bg={colorMode === 'light'
                          ? `${category.color}.50`
                          : `${category.color}.900`}
                        color={colorMode === 'light'
                          ? `${category.color}.700`
                          : `${category.color}.200`}
                        border="1px solid"
                        borderColor={colorMode === 'light'
                          ? `${category.color}.100`
                          : `${category.color}.800`}
                        _hover={{
                          bg: colorMode === 'light'
                            ? `${category.color}.100`
                            : `${category.color}.800`,
                          transform: 'scale(1.05)',
                        }}
                        transition="all 0.2s ease"
                        cursor="pointer"
                      >
                        <TagLabel fontWeight="600">{skill}</TagLabel>
                      </Tag>
                    ))}
                  </Flex>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Box mb={16}>
            <Box
              bg={colorMode === 'light' ? 'white' : 'gray.800'}
              borderRadius="2xl"
              p={8}
              boxShadow="xl"
              border="1px solid"
              borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
            >
              <Flex align="center" mb={4}>
                <Icon
                  as={FaHeart}
                  mr={3}
                  color="pink.500"
                  boxSize={6}
                />
                <Heading as="h2" size="lg" fontWeight="700">
                  {alltexts[10]}
                </Heading>
              </Flex>
              <VStack spacing={4} align="stretch">
                <Text fontSize="lg" lineHeight="tall">
                  {alltexts[11]}
                </Text>
                <Text fontSize="lg" lineHeight="tall">
                  {alltexts[12]}
                </Text>
              </VStack>
            </Box>
          </Box>

          <Box>
            <Flex justify="center" gap={6} mt={8}>
              <Box
                as="a"
                href="#"
                p={3}
                borderRadius="full"
                bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
                _hover={{
                  bg: colorMode === 'light' ? 'gray.200' : 'gray.600',
                  transform: 'translateY(-3px)'
                }}
                transition="all 0.2s ease"
              >
                <Icon as={FaGithub} boxSize={6} />
              </Box>
              <Box
                as="a"
                href="#"
                p={3}
                borderRadius="full"
                bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
                _hover={{
                  bg: colorMode === 'light' ? 'blue.100' : 'blue.700',
                  transform: 'translateY(-3px)'
                }}
                transition="all 0.2s ease"
              >
                <Icon as={FaLinkedin} boxSize={6} color="blue.500" />
              </Box>
              <Box
                as="a"
                href="#"
                p={3}
                borderRadius="full"
                bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
                _hover={{
                  bg: colorMode === 'light' ? 'cyan.100' : 'cyan.700',
                  transform: 'translateY(-3px)'
                }}
                transition="all 0.2s ease"
              >
                <Icon as={FaTwitter} boxSize={6} color="cyan.500" />
              </Box>
              <Box
                as="a"
                href="#"
                p={3}
                borderRadius="full"
                bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
                _hover={{
                  bg: colorMode === 'light' ? 'purple.100' : 'purple.700',
                  transform: 'translateY(-3px)'
                }}
                transition="all 0.2s ease"
              >
                <Icon as={FaFileDownload} boxSize={6} color="purple.500" />
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default About;
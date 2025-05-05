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
  FaPencilRuler
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import img from '../../public/image.jpg';

const About = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();

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

  const allTextsGrouped = {
    skills: {
      programmingLanguages: {
        icon: FaBrain,
        title: 'Programming Languages',
        items: ['TypeScript', 'JavaScript', 'PHP', 'Java', 'HTML5', 'CSS3']
      },
      backend: {
        icon: FaCogs,
        title: 'Backend Frameworks / Runtime',
        items: ['Node.js', 'Express.js', 'NestJS', 'Spring Boot']
      },
      cloud: {
        icon: FaCloud,
        title: 'Cloud & Hosting Platforms',
        items: ['AWS', 'Azure', 'OpenStack', 'Firebase', 'Supabase']
      },
      frontend: {
        icon: FaPuzzlePiece,
        title: 'Frontend Frameworks & Libraries',
        items: ['React', 'Angular.js', 'Next.js']
      },
      ui: {
        icon: FaPalette,
        title: 'UI Libraries & Styling',
        items: ['Chakra UI', 'TailwindCSS']
      },
      databases: {
        icon: FaDatabase,
        title: 'Databases',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
      },
      devops: {
        icon: FaTools,
        title: 'DevOps & CI/CD Tools',
        items: ['Jenkins', 'GitHub','GitHub Actions']
      },
      ai: {
        icon: FaRobot,
        title: 'AI/ML Frameworks',
        items: ['TensorFlow']
      },
      design: {
        icon: FaPencilRuler,
        title: 'Design & Prototyping',
        items: ['Figma']
      }
    },
    headings: [
      'aboutTitle', 'Crafting Digital Experiences',
      'professionalBio', 'Professional Journey',
      'skillsTitle', 'Skills & Expertise',
      'personalInterests', 'Beyond Coding'
    ],
    bio: [
      "I'm a passionate web developer with a keen eye for design and a love for creating seamless user experiences. With several years of experience in front-end development, I specialize in building responsive, accessible, and performant web applications.",
      'View my resume'
    ],
    personalInterests: [
      "When I'm not coding, you can find me exploring hiking trails, experimenting with new recipes in the kitchen, or diving into a good book. I'm passionate about sustainable technology and how it can be used to make a positive impact on our world."
    ],
    profile: [
      'profileImageAlt', 'Professional Profile Photo',
      'Kebsi Montassar',
      'Full Stack Web Developer'
    ]
  };

  const float = keyframes`
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  `;

  const glowingShadow = keyframes`
    0% { box-shadow: 0 0 30px 5px rgba(147, 51, 234, 0.6); }
    33% { box-shadow: 0 0 30px 5px rgba(59, 130, 246, 0.6); }
    66% { box-shadow: 0 0 30px 5px rgba(236, 72, 153, 0.6); }
    100% { box-shadow: 0 0 30px 5px rgba(147, 51, 234, 0.6); }
  `;

  const floatAnimation = `${float} 6s ease-in-out infinite`;
  const shadowGlow = `${glowingShadow} 6s ease-in-out infinite`;

  return (
    <Box
      position="relative"
      overflow="hidden"
      minH="100vh"
      bg={colorMode === 'light' ? 'gray.50' : 'gray.900'}
    >
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={0}
        opacity={0.1}
        bgImage="radial-gradient(circle at 20px 20px, rgba(130, 90, 230, 0.1) 2px, transparent 0)"
        backgroundSize="40px 40px"
      />

      <Box
        position="absolute"
        top="10%"
        left="5%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="linear-gradient(45deg, purple.400, blue.400)"
        filter="blur(80px)"
        opacity={0.15}
        animation={floatAnimation}
      />
      <Box
        position="absolute"
        bottom="20%"
        right="10%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="linear-gradient(45deg, pink.400, purple.400)"
        filter="blur(100px)"
        opacity={0.15}
        animation={floatAnimation}
        style={{ animationDelay: '-3s' }}
      />

      <Container maxW="1400px" py={20} position="relative" zIndex={1}>
        <Grid
          templateColumns={{ base: '1fr', lg: '1fr 0.8fr' }}
          gap={{ base: 10, lg: 20 }}
        >
          <Box>
            <Heading
              fontSize={{ base: '4xl', lg: '6xl' }}
              bgGradient="linear(to-r, purple.400, blue.500)"
              bgClip="text"
              lineHeight="1.2"
              mb={8}
              className="glass-text"
            >
              {t('aboutTitle')}
            </Heading>

            <Box
              bg={colorMode === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(26, 32, 44, 0.8)'}
              backdropFilter="blur(10px)"
              borderRadius="2xl"
              p={8}
              boxShadow="xl"
              border="1px solid"
              borderColor={colorMode === 'light' ? 'purple.100' : 'purple.700'}
              mb={8}
              transform="translateY(0)"
              transition="all 0.3s ease"
              _hover={{ transform: 'translateY(-5px)' }}
            >
              <Flex align="center" mb={4}>
                <Icon 
                  as={FaCode} 
                  mr={3} 
                  color={colorMode === 'light' ? 'purple.600' : 'purple.300'} 
                  boxSize={6}
                />
                <Heading as="h2" size="lg" fontWeight="700">
                  {t('professionalBio', 'Professional Journey')}
                </Heading>
              </Flex>
              <Text fontSize="lg" mb={4} lineHeight="tall">
                {allTextsGrouped.bio[0]}
              </Text>
              <Flex align="center" color={colorMode === 'light' ? 'purple.600' : 'purple.300'} fontWeight="600">
                <Text mr={2}>View my resume</Text>
                <Icon as={FaArrowRight} />
              </Flex>
            </Box>

            <Box mb={8}>
              <Accordion allowMultiple>
                {Object.entries(allTextsGrouped.skills).map(([key, category]) => (
                  <AccordionItem 
                    key={key} 
                    mb={2}
                    border="1px solid"
                    borderColor={colorMode === 'light' ? 'purple.200' : 'purple.700'}
                    borderRadius="xl"
                    overflow="hidden"
                  >
                    <AccordionButton
                      p={4}
                      _hover={{
                        bg: colorMode === 'light' ? 'purple.50' : 'purple.900'
                      }}
                    >
                      <Flex align="center" flex="1">
                        <Icon 
                          as={category.icon} 
                          mr={3} 
                          color={colorMode === 'light' ? 'purple.600' : 'purple.300'} 
                          boxSize={5}
                        />
                        <Heading size="md">{category.title}</Heading>
                      </Flex>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
                        {category.items.map((skill, index) => (
                          <Tag
                            key={index}
                            size="lg"
                            borderRadius="xl"
                            p={3}
                            bg={colorMode === 'light' 
                              ? `linear-gradient(135deg, ${['purple.50', 'blue.50', 'pink.50'][index % 3]}, white)`
                              : `linear-gradient(135deg, ${['purple.900', 'blue.900', 'pink.900'][index % 3]}, gray.800)`
                            }
                            border="1px solid"
                            borderColor={colorMode === 'light' ? 'purple.200' : 'purple.700'}
                            boxShadow="md"
                            _hover={{
                              transform: 'translateY(-2px) scale(1.05)',
                              boxShadow: 'lg',
                            }}
                            transition="all 0.2s ease"
                          >
                            <TagLabel fontWeight="600" textAlign="center" w="100%">{skill}</TagLabel>
                          </Tag>
                        ))}
                      </SimpleGrid>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>

            <Box
              bg={colorMode === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(26, 32, 44, 0.8)'}
              backdropFilter="blur(10px)"
              borderRadius="2xl"
              p={8}
              boxShadow="xl"
              border="1px solid"
              borderColor={colorMode === 'light' ? 'purple.100' : 'purple.700'}
              transform="translateY(0)"
              transition="all 0.3s ease"
              _hover={{ transform: 'translateY(-5px)' }}
            >
              <Flex align="center" mb={4}>
                <Icon 
                  as={FaHeart} 
                  mr={3} 
                  color={colorMode === 'light' ? 'pink.600' : 'pink.300'} 
                  boxSize={6}
                />
                <Heading as="h2" size="lg" fontWeight="700">
                  {t('personalInterests', 'Beyond Coding')}
                </Heading>
              </Flex>
              <Text fontSize="lg" lineHeight="tall">
                {allTextsGrouped.personalInterests[0]}
              </Text>
            </Box>
          </Box>

          <Box
            display={{ base: 'none', lg: 'block' }}
            position="fixed"
            right="10%"
            top="50vh"
            transform="translateY(-50%)"
            width="500px"
            zIndex={2}
          >
            <Box
              position="relative"
              className="image-container"
              h="600px"
              transition="all 0.3s ease"
            >
              <Image
                src={img}
                alt={t('profileImageAlt')}
                objectFit="cover"
                w="100%"
                h="100%"
                borderRadius="2xl"
                animation={shadowGlow}
                boxShadow="0 0 30px 5px rgba(147, 51, 234, 0.6)"
              />
              
              <Box
                position="absolute"
                bottom="30px"
                right="-20px"
                bg={colorMode === 'light' ? 'white' : 'gray.800'}
                p={4}
                borderRadius="xl"
                boxShadow="xl"
                maxW="280px"
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor={colorMode === 'light' ? 'purple.100' : 'purple.700'}
                transform="translateY(0)"
                transition="all 0.3s ease"
                _hover={{ transform: 'translateY(-5px)' }}
              >
                <Text fontWeight="bold" fontSize="xl" mb={2}>
                  {allTextsGrouped.profile[2]}
                </Text>
                <Text color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
                  {allTextsGrouped.profile[3]}
                </Text>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
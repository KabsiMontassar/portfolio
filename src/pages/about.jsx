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
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { FaCode, FaHeart, FaLaptopCode, FaArrowRight } from 'react-icons/fa';
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
    skills: [
      'React', 'JavaScript', 'TypeScript', 'Node.js', 'HTML/CSS',
      'Chakra UI', 'Figma', 'Git', 'Python', 'UI/UX Design'
    ],
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

  const floatAnimation = `${float} 6s ease-in-out infinite`;

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
          alignItems="center"
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

            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4} mb={8}>
              {allTextsGrouped.skills.map((skill, index) => (
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
            position="relative"
            className="image-container"
            h={{ base: '400px', lg: '600px' }}
          >
            <Box
              position="relative"
              h="100%"
              transform="perspective(1000px) rotateY(-5deg)"
              transition="transform 0.5s ease"
              _hover={{ transform: 'perspective(1000px) rotateY(0deg)' }}
            >
              <Image
                src={img}
                alt={t('profileImageAlt')}
                objectFit="cover"
                w="100%"
                h="100%"
                borderRadius="2xl"
                boxShadow="2xl"
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
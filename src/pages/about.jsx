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
} from '@chakra-ui/react';
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








  return (
    <Container 
      maxW="container.xl" 
      py={12}
    >
      <Flex 
        direction={{ base: "column", lg: "row" }}
        align="center"
        pt={{ base: "100px", lg: "150px" }}
        justify="space-between"
        gap={10}
        position="relative"
      >
        {/* Decorative elements */}
        <Box
          position="absolute"
          top="10%"
          left="5%"
          w="200px"
          h="200px"
          borderRadius="full"
          bg={colorMode === 'light' ? 'purple.100' : 'purple.900'}
          opacity={0.3}
          filter="blur(60px)"
          zIndex="-1"
        />
        <Box
          position="absolute"
          bottom="10%"
          right="5%"
          w="300px"
          h="300px"
          borderRadius="full"
          bg={colorMode === 'light' ? 'blue.100' : 'blue.900'}
          opacity={0.3}
          filter="blur(80px)"
          zIndex="-1"
        />

        {/* Left side - Bio and Skills */}
        <Box flex="1" w={{ base: "100%", lg: "55%" }} zIndex="1">
          <Heading 
            as="h1" 
            size="2xl" 
            mb={8}
            bgGradient={colorMode === 'light' ? 'linear(to-r, purple.600, blue.600)' : 'linear(to-r, purple.300, blue.300)'}
            bgClip="text"
            fontWeight="800"
            letterSpacing="tight"
          >
            {t('aboutTitle', 'Crafting Digital Experiences')}
          </Heading>
          
          {/* Bio Section */}
          <Box 
            mb={12} 
            p={6}
            borderRadius="xl"
            bg={colorMode === 'light' ? 'whiteAlpha.600' : 'blackAlpha.400'}
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
            boxShadow="lg"
            transition="all 0.3s ease"
            _hover={{
              boxShadow: 'xl',
              transform: 'translateY(-5px)'
            }}
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
          
       
          <Box 
            mb={12} 
            p={6}
            borderRadius="xl"
            bg={colorMode === 'light' ? 'whiteAlpha.600' : 'blackAlpha.400'}
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
            boxShadow="lg"
            transition="all 0.3s ease"
            _hover={{
              boxShadow: 'xl',
              transform: 'translateY(-5px)'
            }}
          >
            <Flex align="center" mb={4}>
              <Icon 
                as={FaLaptopCode} 
                mr={3} 
                color={colorMode === 'light' ? 'blue.600' : 'blue.300'} 
                boxSize={6}
              />
              <Heading as="h2" size="lg" fontWeight="700">
                {allTextsGrouped.headings[5]}
              </Heading>
            </Flex>
            <SimpleGrid columns={{ base: 2, md: 3, lg: 3 }} spacing={3}>
              {allTextsGrouped.skills.map((skill, index) => (
                <Tag 
                  key={index} 
                  size="lg" 
                  borderRadius="full" 
                  variant="solid" 
                  bg={colorMode === 'light' ? 'white' : 'gray.800'}
                  color={colorMode === 'light' ? 'gray.800' : 'white'}
                  boxShadow="md"
                  py={3}
                  px={4}
                  border="1px solid"
                  borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
                  transition="all 0.2s ease"
                  _hover={{
                    transform: 'translateY(-3px)',
                    boxShadow: 'lg',
                    bg: colorMode === 'light' ? 'purple.100' : 'purple.900'
                  }}
                >
                  <TagLabel fontWeight="600">{skill}</TagLabel>
                </Tag>
              ))}
            </SimpleGrid>
          </Box>
          
          <Box 
            p={6}
            borderRadius="xl"
            bg={colorMode === 'light' ? 'whiteAlpha.600' : 'blackAlpha.400'}
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
            boxShadow="lg"
            transition="all 0.3s ease"
            _hover={{
              boxShadow: 'xl',
              transform: 'translateY(-5px)'
            }}
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
        
        {/* Right side - Professional Photo */}
        <Box 
          flex="1" 
          w={{ base: "100%", lg: "45%" }}
          display="flex"
          justifyContent="center"
          position="relative"
        >
          <Box
            position="relative"
            w={{ base: "300px", md: "400px", lg: "450px" }}
            h={{ base: "400px", md: "550px", lg: "600px" }}
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="2xl"
            transform="rotate(-2deg)"
            transition="transform 0.5s ease"
            _hover={{
              transform: 'rotate(0deg)'
            }}
          >
            <Box
              w="100%"
              h="100%"
              bg={colorMode === 'light' ? 'purple.200' : 'purple.900'}
              display="flex"
              alignItems="center"
              justifyContent="center"
              color={colorMode === 'light' ? 'purple.600' : 'purple.200'}
              fontSize="lg"
              fontWeight="bold"
            >
              <Image
                src={img}
                alt={t('profileImageAlt', 'Professional Profile Photo')}
                objectFit="cover"
                w="100%"
                h="100%"
                filter={colorMode === 'light' ? "brightness(0.9)" : "brightness(1.1)"}
                _hover={{ filter: colorMode === 'light' ? "brightness(1)" : "brightness(1.2)" }}
                transition="filter 0.3s ease"
              />
            </Box>
            
            <Box
              position="absolute"
              bottom="8%"
              right="-5%"
              bg={colorMode === 'light' ? 'white' : 'gray.800'}
              p={4}
              borderRadius="xl"
              boxShadow="xl"
              border="1px solid"
              borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
              transform="rotate(5deg)"
              w="60%"
            >
              <Text fontWeight="bold" fontSize="lg">
                {allTextsGrouped.profile[2]}
              </Text>
              <Text fontSize="sm" opacity={0.8} mt={1}>
                {allTextsGrouped.profile[3]}
              </Text>
              <Box
                position="absolute"
                top="-10px"
                left="20px"
                w="20px"
                h="20px"
                bg={colorMode === 'light' ? 'white' : 'gray.800'}
                transform="rotate(45deg)"
                borderLeft="1px solid"
                borderTop="1px solid"
                borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
                zIndex="-1"
              />
            </Box>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default About;
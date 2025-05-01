import React from 'react'
import { Box, Flex, Text, Heading, Badge, Link, Icon, useColorModeValue } from '@chakra-ui/react'
import { FiBriefcase, FiMapPin, FiCalendar, FiExternalLink } from 'react-icons/fi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const data = [
  {
    title: 'Full Stack Web Developer Intern',
    company: 'FIDNESS',
    location: 'La Marsa, Tunisia',
    startDate: '2023-2-01',
    endDate: '2023-6-31',
    Description : [
      'Designed and developed a web application for managing partner contracts, implementing encryption and other security measures to protect sensitive data.',
      'Designed and implemented data visualization features to improve data presentation, enabling efficient management and enhancing client retention.'
    ],
    Technologies: [
       'HTML',
      'CSS',
      'JavaScript',
      'ReactJS',
      'NodeJS',
      'RESTful APIs',
      'Full Stack Development',
      'Cross-Browser Compatibility',
      'Security Best Practices',
      'Encryption',
      'Data Visualization',
      'ChartJs',
      'MongoDB',
      'Mongoose',
      'Postman',
      'Git'
    ],
    linkToCompany: 'https://www.linkedin.com/company/fidness-company/',
   
  },
  {
    title: 'Full Stack Web Developer Intern',
    company: 'ESPRIT',
    location: 'Ariana, Tunisia',
    startDate: '2024-6-01',
    endDate: '2024-7-31',
    Description : [
      'Developed an e-commerce platform for plant sales with category filtering and Algolia search.',
      'Implemented stateless authentication using JWT.',
      'Built AI models for plant disease diagnosis and plant recognition with care recommendations.',
      'Designed a user-friendly interface with Chakra UI and Figma.',
      'Utilized Firebase for backend services and tested APIs with Postman.'
    ],
    Technologies: [
      'Full Stack Development',
      'E-commerce',
      'AI',
      'JWT Authentication',
      'Firebase',
      'Algolia API',
      'Chakra UI',
      'Figma',
      'Cross-Browser Compatibility',
      'ReactJS',
      'Postman',
      'Security Best Practices'
    ],
    linkToCompany: `https://www.linkedin.com/school/ecole-supérieure-privée-d'ingénierie-et-de-technologies---esprit/`
 },
  {
    title: 'Full Stack Web Developer Intern',
    company: 'Mood and Food',
    location: 'Ariana, Tunisia',
    startDate: '2024-8-01',
    endDate: '2025-1-31',
    Description : [
      'Designed and developed a full-stack e-commerce web application for diet products, gym accessories, and nutritional documentation, featuring AI-based product recommendations using TensorFlow and OpenAI.',
      'Created modern, responsive UI/UX designs using Figma and implemented them with ReactJS and Chakra UI.',
      'Built the back-end using Node.js and Express, with RESTful APIs for secure data handling and JWT for authentication.',
      'Implemented real-time data management using Firebase Firestore and Firebase Extensions.',
      'Conducted API testing and debugging using Postman.'
    ],
    Technologies: [
      'Full Stack Development',
      'E-commerce',
      'RESTful APIs',
      'Firebase',
      'Firebase Extensions',
      'Security Best Practices',
      'AI (OpenAI)',
      'Recommendations',
      'HTML',
      'CSS',
      'JavaScript',
      'ReactJS',
      'Cross-Browser Compatibility',
      'Chakra UI',
      'Figma',
      'Postman'
    ],
    linkToCompany: `https://www.linkedin.com/company/mood-and-food/`
  }

]

const ExperienceCard = ({ experience, index }) => {
  const cardRef = React.useRef(null)

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.fromTo(cardRef.current,
      { 
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top bottom-=100',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [index])

  const bgColor = useColorModeValue('blue.50', 'gray.700')
  const borderColor = useColorModeValue('blue.200', 'blue.500')
  const timelineDotColor = useColorModeValue('blue.500', 'blue.200')

  return (
    <Flex 
      ref={cardRef}
      position="relative"
      mb={12}
      _before={{
        content: '""',
        position: 'absolute',
        left: { base: '20px', md: '50%' },
        height: 'calc(100% + 50px)',
        width: '2px',
        bg: borderColor,
        transform: { md: 'translateX(-50%)' }
      }}
      minHeight="600px"
    >
      <Box
        position="absolute"
        left={{ base: '12px', md: '50%' }}
        top="0"
        w="16px"
        h="16px"
        borderRadius="full"
        bg={timelineDotColor}
        transform={{ md: 'translateX(-50%)' }}
        zIndex={2}
        boxShadow={`0 0 0 4px ${bgColor}`}
      />

      <Flex
      
        direction="column"
        ml={{ base: '40px', md: index % 2 === 0 ? '0' : '50%' }}
        mr={{ base: '0', md: index % 2 === 0 ? '50%' : '0' }}
        pr={{ base: '4', md: index % 2 === 0 ? '8' : '0' }}
        pl={{ base: '4', md: index % 2 === 0 ? '0' : '8' }}
        position="relative"
        width={{ base: 'calc(100% - 40px)', md: '50%' }}
      >
        <Box
        
          bg={bgColor}
          p={6}
          borderRadius="2xl"
          boxShadow="lg"
          border="1px solid"
          borderColor={borderColor}
          transition="transform 0.3s ease"
          _hover={{ transform: 'translateY(-5px)' }}
        >
          <Flex align="center" mb={4}>
            <Icon as={FiBriefcase} boxSize={6} color={timelineDotColor} />
            <Heading size="md" ml={3}>{experience.title}</Heading>
          </Flex>

          <Flex direction="column" gap={3}>
            <Flex align="center">
              <Icon as={FiMapPin} color={timelineDotColor} />
              <Text ml={2}>{experience.company} - {experience.location}</Text>
            </Flex>

            <Flex align="center">
              <Icon as={FiCalendar} color={timelineDotColor} />
              <Text ml={2}>
                {new Date(experience.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - 
                {new Date(experience.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
              </Text>
            </Flex>
          </Flex>

          <Box mt={4}>
            <Text fontWeight="bold" mb={2}>Key Achievements:</Text>
            {experience.Description.map((desc, idx) => (
              <Text key={idx} mb={2} fontSize="sm">{desc}</Text>
            ))}
          </Box>

          <Box mt={4}>
            <Text fontWeight="bold" mb={2}>Technologies:</Text>
            <Flex wrap="wrap" gap={2}>
              {experience.Technologies.map((tech, idx) => (
                <Badge key={idx} colorScheme="blue" variant="subtle">
                  {tech}
                </Badge>
              ))}
            </Flex>
          </Box>

          <Link 
            href={experience.linkToCompany} 
            isExternal 
            mt={4} 
            display="inline-flex" 
            alignItems="center" 
            color={timelineDotColor}
            _hover={{ textDecoration: 'none', opacity: 0.8 }}
          >
            Visit Company <Icon as={FiExternalLink} ml={2} />
          </Link>
        </Box>
      </Flex>
    </Flex>
  )
}

const Experience = () => {
  return (
    <Box 
      pt="120px" 
      px={4} 
      maxW="1200px" 
   
      mx="auto"
      position="relative"
      overflow="hidden"
    >
      <Box 
        position="absolute"
        top="15%"
        right="10%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg={useColorModeValue("blue.100", "blue.900")}
        filter="blur(80px)"
        opacity={0.3}
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="10%"
        left="5%"
        w="500px"
        h="500px"
        borderRadius="full"
        bg={useColorModeValue("purple.100", "purple.900")}
        filter="blur(100px)"
        opacity={0.2}
        zIndex={0}
      />

      <Heading 
        textAlign="center" 
        mb={16}
        fontSize={{ base: "4xl", md: "5xl" }}
        bgGradient={useColorModeValue(
          'linear(to-r, blue.600, purple.600)',
          'linear(to-r, blue.200, purple.200)'
        )}
        bgClip="text"
      >
        Professional Experience
      </Heading>

      <Box position="relative" zIndex={1}>
        {data.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </Box>
    </Box>
  )
}

export default Experience
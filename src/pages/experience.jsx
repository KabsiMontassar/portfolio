import React, { useEffect } from 'react'
import { Box, Flex, Text, Heading, Badge, Link, Icon, useColorModeValue } from '@chakra-ui/react'
import { FiBriefcase, FiMapPin, FiExternalLink } from 'react-icons/fi'
import { AiOutlineCalendar } from 'react-icons/ai'
import Lenis from '@studio-freight/lenis'
import { useTranslation } from 'react-i18next'

const data = [
  {
    title: 'Full Stack Web Developer Intern',
    company: 'FIDNESS',
    location: 'La Marsa, Tunisia',
    startDate: '2023-2-01',
    endDate: '2023-6-31',
    Description: [
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
    Description: [
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
    Description: [
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

const getCardColor = (index) => {
  const colors = [
    { light: 'teal', dark: 'cyan' },
    { light: 'purple', dark: 'pink' },
    { light: 'orange', dark: 'yellow' }
  ]
  return colors[index % colors.length]
}

const ExperienceCard = ({ experience, index, nextColor }) => {
  const { t } = useTranslation()
  const cardRef = React.useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  const colorScheme = getCardColor(index)
  const nextColorScheme = nextColor || colorScheme
  const bgColor = useColorModeValue(`${colorScheme.light}.50`, 'gray.800')
  const borderColor = useColorModeValue(`${colorScheme.light}.200`, `${colorScheme.dark}.400`)
  const timelineDotColor = useColorModeValue(`${colorScheme.light}.500`, `${colorScheme.dark}.200`)
  const nextTimelineDotColor = useColorModeValue(
    `${nextColorScheme.light}.500`, 
    `${nextColorScheme.dark}.200`
  )
  const dateColor = useColorModeValue(`${colorScheme.light}.700`, `${colorScheme.dark}.300`)
  const colorMode = useColorModeValue('light', 'dark')
  const textColor = useColorModeValue('gray.700', 'gray.200')

  return (
    <Flex
      ref={cardRef}
      position="relative"
      mb={16}
      minH="300px"
      _before={{
        content: '""',
        position: 'absolute',
        left: { base: '20px', md: '50%' },
        height: 'calc(100% + 50px)',
        width: '4px',
        background: `linear-gradient(180deg, 
          ${timelineDotColor} 0%, 
          ${nextTimelineDotColor} 100%)`,
        transform: { md: 'translateX(-50%)' },
        opacity: colorMode === 'light' ? 1 : 0.7,
        borderRadius: 'full',
        boxShadow: colorMode === 'light' 
          ? `0 0 20px ${timelineDotColor}90`
          : `0 0 20px ${timelineDotColor}40`
      }}
      _after={{
        content: '""',
        position: 'absolute',
        left: { base: '22px', md: '50%' },
        height: '100%',
        width: '1px',
        background: 'white',
        transform: { md: 'translateX(-50%)' },
        opacity: 0.3,
      }}
    >
      {[...Array(3)].map((_, i) => (
        <Box
          key={i}
          position="absolute"
          left={{ base: '18px', md: '50%' }}
          top={`${(i + 1) * 25}%`}
          w="8px"
          h="8px"
          borderRadius="full"
          bg={timelineDotColor}
          transform={{ md: 'translateX(-50%)' }}
          opacity={0.3}
          zIndex={1}
        />
      ))}

      <Box
        position="absolute"
        left={{ base: '40px', md: index % 2 === 0 ? '52%' : '38%' }}
        top="0"
        transform={{ md: 'translateX(-50%)' }}
        bg={bgColor}
        p={3}
        borderRadius="xl"
        border="1px solid"
        borderColor={borderColor}
        boxShadow="lg"
        zIndex={3}
        _before={{
          content: '""',
          position: 'absolute',
          top: '50%',
          left: index % 2 === 0 ? '-10px' : 'auto',
          right: index % 2 === 0 ? 'auto' : '-10px',
          transform: 'translateY(-50%)',
          borderWidth: '10px',
          borderStyle: 'solid',
          borderColor: `transparent ${bgColor} transparent transparent`,
          display: { base: 'none', md: 'block' }
        }}
      >
        <Text
          fontSize="sm"
          fontWeight="bold"
          color={dateColor}
        >
          {new Date(experience.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} -
          {new Date(experience.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
        </Text>
      </Box>

      <Box
        position="absolute"
        left={{ base: '12px', md: '50%' }}
        top="0"
        transform={{ md: 'translateX(-50%)' }}
        zIndex={2}
      >
        <Box
          position="absolute"
          w="32px"
          h="32px"
          borderRadius="full"
          bg={`${timelineDotColor}20`}
          animation="pulse 2s infinite"
          sx={{
            '@keyframes pulse': {
              '0%': { transform: 'scale(1)', opacity: 0.5 },
              '70%': { transform: 'scale(2)', opacity: 0 },
              '100%': { transform: 'scale(1)', opacity: 0 }
            }
          }}
        />
        <Box
          w="20px"
          h="20px"
          borderRadius="full"
          bg={timelineDotColor}
          boxShadow={`0 0 0 4px ${bgColor}, 
                     0 0 0 8px ${borderColor}30,
                     0 0 20px ${timelineDotColor}60`}
        />
      </Box>

      <Flex
        direction="column"
        ml={{ base: '40px', md: index % 2 === 0 ? '0' : '50%' }}
        mr={{ base: '0', md: index % 2 === 0 ? '50%' : '0' }}
        pr={{ base: '4', md: index % 2 === 0 ? '8' : '0' }}
        pl={{ base: '4', md: index % 2 === 0 ? '0' : '8' }}
        position="relative"
        width={{ base: 'calc(100% - 40px)', md: '50%' }}
        mt={12}
      >
        <Box
          bg={bgColor}
          p={6}
          borderRadius="2xl"
          boxShadow={`lg, 0 4px 20px -8px ${timelineDotColor}`}
          border="1px solid"
          borderColor={borderColor}
          transition="all 0.3s ease"
          _hover={{
            transform: 'translateY(-5px)',
            boxShadow: `xl, 0 8px 30px -12px ${timelineDotColor}`
          }}
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

            <Flex align="center" gap={3}>
              <Flex align="center">
                <Icon 
                  as={AiOutlineCalendar} 
                  boxSize={5} 
                  color={timelineDotColor}
                  strokeWidth={0.4}
                />
                <Text ml={2}>
                  {new Date(experience.startDate).toLocaleDateString('en-US', { 
                    month: 'short', 
                    year: 'numeric' 
                  })} - 
                  {new Date(experience.endDate).toLocaleDateString('en-US', { 
                    month: 'short', 
                    year: 'numeric' 
                  })}
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Box mt={4}>
            <Text fontWeight="bold" mb={3} fontSize="lg">{t('keyAchievements')}:</Text>
            {experience.Description.map((desc, idx) => (
              <Text 
                key={idx} 
                mb={3} 
                fontSize="md" 
                lineHeight={1.7}
                color={textColor}
              >
                {desc}
              </Text>
            ))}
          </Box>

          <Box mt={6}>
            <Text fontWeight="bold" mb={3} fontSize="lg">{t('technologies')}:</Text>
            <Flex wrap="wrap" gap={2}>
              {experience.Technologies.map((tech, idx) => (
                <Badge
                  key={idx}
                  colorScheme={colorScheme.light}
                  variant="subtle"
                  px={3}
                  py={1}
                  borderRadius="full"
                >
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
            {t('visitCompany')} <Icon as={FiExternalLink} ml={2} />
          </Link>
        </Box>
      </Flex>
    </Flex>
  )
}

const Experience = () => {
  const { t } = useTranslation()
  
  return (
    <Box
      pt="120px"
      px={4}
      maxW="1400px"
      mx="auto"
      position="relative"
      overflow="hidden"
      css={{
        scrollBehavior: 'smooth',
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: useColorModeValue('blue.200', 'blue.700'),
          borderRadius: '24px',
        },
      }}
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
      <Box
        position="absolute"
        top="40%"
        left="25%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg={useColorModeValue("pink.100", "pink.900")}
        filter="blur(70px)"
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
        {t('experienceTitle')}
      </Heading>

      <Box position="relative" zIndex={1}>
        {data.map((exp, index) => (
          <ExperienceCard 
            key={index} 
            experience={exp} 
            index={index}
            nextColor={index < data.length - 1 ? getCardColor(index + 1) : null}
          />
        ))}
      </Box>
    </Box>
  )
}

export default Experience
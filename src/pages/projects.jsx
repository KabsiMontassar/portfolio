import { useRef } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Button,
  Flex,
  List,
  ListItem,
  ListIcon,
  chakra,
  SimpleGrid,
  Icon,
  Tag,
  TagLabel,
  Divider,
  useColorModeValue,
  usePrefersReducedMotion
} from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { keyframes } from '@emotion/react'
import { FiGithub, FiExternalLink, FiCheckCircle, FiCode, FiCpu } from 'react-icons/fi'
import { FaReact, FaAngular, FaNodeJs, FaDocker } from 'react-icons/fa'
import { SiTypescript, SiNestjs, SiSpringboot, SiSymfony, SiPostgresql, SiMongodb, SiKubernetes } from 'react-icons/si'
import { projectsData, certs } from '../data/projectsData' // Assuming you have a data.js file with the projects and certs data

// Motion components
const MotionBox = chakra(motion.div)
const MotionHeading = chakra(motion.h2)
const MotionText = chakra(motion.p)

// Floating animation
const floatingAnimation = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(3deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`


// Project card component
const ProjectCard = ({ project, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const accentColor = useColorModeValue('purple.500', 'purple.300')

  const techIcons = {
    'React': <Icon as={FaReact} color="#61DAFB" />,
    'Angular': <Icon as={FaAngular} color="#DD0031" />,
    'TypeScript': <Icon as={SiTypescript} color="#3178C6" />,
    'NestJS': <Icon as={SiNestjs} color="#E0234E" />,
    'Spring Boot': <Icon as={SiSpringboot} color="#6DB33F" />,
    'Symfony': <Icon as={SiSymfony} color="#000000" />,
    'PostgreSQL': <Icon as={SiPostgresql} color="#336791" />,
    'MongoDB': <Icon as={SiMongodb} color="#47A248" />,
    'Docker': <Icon as={FaDocker} color="#2496ED" />,
    'Kubernetes': <Icon as={SiKubernetes} color="#326CE5" />,
    'Node.js': <Icon as={FaNodeJs} color="#339933" />,
  }

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      mb={16}
    >
      <Box
        bg={cardBg}
        borderRadius="2xl"
        boxShadow="xl"
        border="1px solid"
        borderColor={borderColor}
        overflow="hidden"
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={0}>
          <Box
            bgGradient={`linear(to-br, ${useColorModeValue('purple.50', 'purple.900')}, ${useColorModeValue('blue.50', 'blue.900')})`}
            p={8}
            display="flex"
            alignItems="center"
            justifyContent="center"
            minH="400px"
            position="relative"
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bgImage="radial-gradient(circle at 50% 50%, rgba(0,0,0,0.1) 1px, transparent 1px)"
              backgroundSize="20px 20px"
              opacity={0.3}
            />
            <Box
              w="full"
              h="full"
              bg="white"
              borderRadius="lg"
              boxShadow="lg"
              overflow="hidden"
              position="relative"
              border="1px solid"
              borderColor={borderColor}
            >
              <Box
                w="full"
                h="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color={textColor}
                fontWeight="bold"
              >
                {project.title} Preview
              </Box>
            </Box>
          </Box>

          <Box p={8}>
            <Flex justify="space-between" align="center" mb={6}>
              <Heading size="xl" fontWeight="800" color={textColor}>
                {project.title}
              </Heading>
              <HStack spacing={2}>
                <Button
                  leftIcon={<FiGithub />}
                  variant="ghost"
                  size="sm"
                  color={textColor}
                  _hover={{ color: accentColor, transform: 'translateY(-2px)' }}
                >
                  Code
                </Button>
              </HStack>
            </Flex>

            <Text color={textColor} mb={6}>
              A comprehensive platform showcasing my expertise in full-stack development with modern technologies.
            </Text>

            <Divider my={6} borderColor={borderColor} />

            <VStack align="stretch" spacing={6}>
              <Box>
                <Heading size="md" mb={4} color={textColor} display="flex" alignItems="center">
                  <Icon as={FiCode} mr={2} color={accentColor} />
                  Key Features
                </Heading>
                <List spacing={3}>
                  {project.details.map((detail, idx) => (
                    <ListItem
                      key={idx}
                      display="flex"
                      alignItems="flex-start"
                      color={textColor}
                    >
                      <ListIcon as={FiCheckCircle} color={accentColor} mt={1} />
                      <Text>{detail}</Text>
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Box>
                <Heading size="md" mb={4} color={textColor} display="flex" alignItems="center">
                  <Icon as={FiCpu} mr={2} color={accentColor} />
                  Technology Stack
                </Heading>
                <Flex wrap="wrap" gap={3}>
                  {project.technologies.map((tech, idx) => (
                    <Tag
                      key={idx}
                      size="lg"
                      borderRadius="full"
                      variant="subtle"
                      colorScheme="purple"
                      px={4}
                      py={2}
                    >
                      {techIcons[tech] && (
                        <Box mr={2} display="inline-flex">
                          {techIcons[tech]}
                        </Box>
                      )}
                      <TagLabel>{tech}</TagLabel>
                    </Tag>
                  ))}
                </Flex>
              </Box>
            </VStack>
          </Box>
        </SimpleGrid>
      </Box>
    </MotionBox>
  )
}

// Certification card component
const CertificationCard = ({ cert, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const prefersReducedMotion = usePrefersReducedMotion()

  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const floating = prefersReducedMotion ? undefined : `${floatingAnimation} 8s ease-in-out infinite`

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Box
        bg={cardBg}
        p={6}
        borderRadius="2xl"
        boxShadow="xl"
        border="1px solid"
        borderColor={borderColor}
        position="relative"
        overflow="hidden"
        animation={floating}
        _hover={{
          transform: 'translateY(-5px)',
          transition: 'transform 0.3s ease'
        }}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          height="4px"
          bg={cert.color}
        />
        <VStack spacing={4} align="stretch" pt={2}>
          <Flex align="center">
            <Box
              p={2}
              borderRadius="lg"
              bg={`${cert.color}20`}
              color={cert.color}
              mr={4}
            >
              <Icon as={cert.icon} boxSize={6} />
            </Box>
            <VStack align="start" spacing={0}>
              <Heading size="md" color={textColor}>
                {cert.title}
              </Heading>
              <Text fontSize="sm" color={textColor} opacity={0.8}>
                {cert.issuer} • {cert.year}
              </Text>
            </VStack>
          </Flex>
          <Text color={textColor} fontSize="sm">
            {cert.description}
          </Text>
          <Button
            size="sm"
            variant="outline"
            colorScheme="purple"
            mt={2}
            rightIcon={<FiExternalLink />}
            alignSelf="flex-start"
          >
            View Credential
          </Button>
        </VStack>
      </Box>
    </MotionBox>
  )
}

// Projects page component
const Projects = () => {
  const headingGradient = useColorModeValue(
    'linear(to-r, purple.600, blue.600)',
    'linear(to-r, purple.300, blue.300)'
  )
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const prefersReducedMotion = usePrefersReducedMotion()

  // Background animation
  const moveBackground = keyframes`
    0% { transform: translate(0%, 0%) rotate(0deg); }
    25% { transform: translate(5%, 5%) rotate(5deg); }
    50% { transform: translate(10%, 0%) rotate(0deg); }
    75% { transform: translate(5%, -5%) rotate(-5deg); }
    100% { transform: translate(0%, 0%) rotate(0deg); }
  `

  return (
    <Box
      pt={{ base: '80px', md: '120px' }}
      minH="100vh"
      bg={bgColor}
      position="relative"
      overflow="hidden"
    >
      {/* Animated Background Elements */}
      <Box
        position="absolute"
        top="10%"
        right="10%"
        w={{ base: '300px', md: '600px' }}
        h={{ base: '300px', md: '600px' }}
        borderRadius="full"
        bgGradient="linear(to-br, purple.400, blue.400)"
        filter="blur(120px)"
        opacity={0.15}
        zIndex={0}
        animation={!prefersReducedMotion ? `${moveBackground} 20s ease infinite` : undefined}
      />
      <Box
        position="absolute"
        bottom="15%"
        left="10%"
        w={{ base: '250px', md: '500px' }}
        h={{ base: '250px', md: '500px' }}
        borderRadius="full"
        bgGradient="linear(to-br, pink.400, purple.400)"
        filter="blur(130px)"
        opacity={0.15}
        zIndex={0}
        animation={!prefersReducedMotion ? `${moveBackground} 25s ease infinite 5s` : undefined}
      />
      <Box
        position="absolute"
        top="40%"
        left="30%"
        w={{ base: '200px', md: '400px' }}
        h={{ base: '200px', md: '400px' }}
        borderRadius="full"
        bgGradient="linear(to-br, blue.300, teal.300)"
        filter="blur(100px)"
        opacity={0.1}
        zIndex={0}
        animation={!prefersReducedMotion ? `${moveBackground} 30s ease infinite 10s` : undefined}
      />

      {/* Grid Pattern */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage={useColorModeValue(
          "linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)",
          "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)"
        )}
        backgroundSize="40px 40px"
        zIndex={0}
      />

      <Container maxW="container.xl" position="relative" zIndex={1} py={12}>
        <VStack spacing={16} align="stretch">
          {/* Projects Header */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            textAlign="center"
          >
            <MotionHeading
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              bgGradient={headingGradient}
              bgClip="text"
              letterSpacing="tight"
              lineHeight="1.1"
              mb={4}
            >
              My Projects
            </MotionHeading>
            <MotionText
              fontSize={{ base: "lg", md: "xl" }}
              color={useColorModeValue("gray.600", "gray.300")}
              maxW="2xl"
              mx="auto"
            >
              Showcasing innovative solutions built with cutting-edge technologies
            </MotionText>
          </MotionBox>

          {/* Projects List */}
          <VStack spacing={20} align="stretch">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </VStack>

          {/* Certifications Section */}
          <VStack spacing={16} align="stretch" mt={32}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              textAlign="center"
            >
              <MotionHeading
                fontSize={{ base: "4xl", md: "5xl" }}
                bgGradient={headingGradient}
                bgClip="text"
                letterSpacing="tight"
                lineHeight="1.1"
                mb={4}
              >
                Certifications
              </MotionHeading>
              <MotionText
                fontSize={{ base: "lg", md: "xl" }}
                color={useColorModeValue("gray.600", "gray.300")}
                maxW="2xl"
                mx="auto"
              >
                Validated expertise through industry-recognized certifications
              </MotionText>
            </MotionBox>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {certs.map((cert, index) => (
                <CertificationCard
                  key={cert.title}
                  cert={cert}
                  index={index}
                />
              ))}
            </SimpleGrid>
          </VStack>


        </VStack>
      </Container>
    </Box>
  )
}

export default Projects
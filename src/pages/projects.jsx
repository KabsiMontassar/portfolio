import {
  Box,
  Container,
  VStack,
  chakra,
  SimpleGrid,
  useColorModeValue,
  usePrefersReducedMotion,
  Heading
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { keyframes } from '@emotion/react'

import ProjectCard from '../components/Project/ProjectCard'
import CertificationCard from '../components/Project/CertificationCard'
import { projectsData, certs, texts, textsused } from '../data/projectsData'

const MotionBox = chakra(motion.div)
const MotionHeading = chakra(motion.h2)
const MotionText = chakra(motion.p)


// Projects page component
const Projects = () => {
  const headingGradient = 'linear(to-r, purple.500, blue.500)';

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

  certs.sort((a, b) => new Date(b.year) - new Date(a.year))

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
            <MotionHeading>
              <Heading
                mb={4}
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                bgGradient={headingGradient}
                bgClip="text"
                letterSpacing="tight"
                lineHeight="1.5">
                {textsused.title}
              </Heading>

            </MotionHeading>
            <MotionText
              fontSize={{ base: "lg", md: "xl" }}
              color={useColorModeValue("gray.600", "gray.300")}
              maxW="2xl"
              mx="auto"
            >
              {textsused.description}
            </MotionText>
          </MotionBox>

          {/* Projects List */}
          <VStack spacing={20} align="stretch">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                allTextUsed={texts}
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
              <MotionHeading>
                <Heading
                  fontSize={{ base: "4xl", md: "5xl" }}
                  bgGradient={headingGradient}
                  bgClip="text"
                  letterSpacing="tight"
                  lineHeight="1.1"
                  mb={4}>
                  {textsused.certsText}
                </Heading>

              </MotionHeading>
              <MotionText
                fontSize={{ base: "lg", md: "xl" }}
                color={useColorModeValue("gray.600", "gray.300")}
                maxW="2xl"
                mx="auto"
              >
                {textsused.certsDescription}
              </MotionText>
            </MotionBox>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {certs.map((cert, index) => (
                <CertificationCard
                  key={cert.title}
                  cert={cert}
                  index={index}
                  alltextsused={texts}
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
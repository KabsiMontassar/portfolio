import {
  Box,
  VStack,
  Heading,
  Text,
  useColorMode,
  FormControl,
  FormLabel,
  Button,
  Icon,
  HStack,
  Container,
  IconButton,
  useColorModeValue,
  usePrefersReducedMotion,
} from '@chakra-ui/react'

import { motion } from 'framer-motion'
import { keyframes } from '@emotion/react'
import { FaLinkedin, FaGithub, FaCheck } from 'react-icons/fa'
import { useState } from 'react'
import useContactData from '../data/contactData'

const MotionBox = motion.create(Box)
const MotionHeading = motion.create(Heading)
const MotionText = motion.create(Text)
const MotionVStack = motion.create(VStack)

const Contact = () => {
  
  const { colorMode } = useColorMode()
  const prefersReducedMotion = usePrefersReducedMotion()
  const data = useContactData();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (value, index) => {
    navigator.clipboard.writeText(value);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const floatingAnimation = keyframes`
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(2deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  `

  const floating = `${floatingAnimation} 6s ease-in-out infinite`

  return (
    <Box   pt="50px" position="relative" minH="100vh" overflow="hidden">
      {/* Animated background elements */}
      <Box
        position="absolute"
        top="15%"
        right="10%"
        w={{ base: '200px', md: '400px' }}
        h={{ base: '200px', md: '400px' }}
        borderRadius="full"
        bg={colorMode === 'light' ? "purple.100" : "purple.900"}
        filter="blur(80px)"
        opacity={0.3}
        zIndex={0}
        animation={!prefersReducedMotion ? floating : undefined}
      />

      <Box
        position="absolute"
        bottom="10%"
        left="5%"
        w={{ base: '300px', md: '500px' }}
        h={{ base: '300px', md: '500px' }}
        borderRadius="full"
        bg={colorMode === 'light' ? "blue.100" : "blue.900"}
        filter="blur(100px)"
        opacity={0.2}
        zIndex={0}
        animation={!prefersReducedMotion ? floating : undefined}
        style={{ animationDelay: '2s' }}
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

      <Container maxW="container.xl" py={20} position="relative" zIndex={1}>
        <VStack spacing={16} w="full">
          {/* Header Section */}
          <MotionVStack
            spacing={4}
            textAlign="center"
            w="full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >  

            <MotionHeading
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              bgGradient="linear(to-r, purple.500, blue.500)"
              bgClip="text"
              letterSpacing="tight"
              lineHeight="1.1"
            >
              {data.contactTitle}
            </MotionHeading>
            <MotionText
              fontSize={{ base: "lg", md: "xl" }}
              color={colorMode === 'light' ? "gray.600" : "gray.300"}
              maxW="2xl"
            >
              {data.getInTouch}
            </MotionText>
          </MotionVStack>

          {/* Contact Information - Now centered and sole content */}
          <Box w="full" maxW="600px" mx="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <VStack spacing={8} align="start">
                <VStack spacing={4} align="start">
                  <Heading size="lg" fontWeight="700">
                    {data.letsConnect}
                  </Heading>
                  <Text color={colorMode === 'light' ? "gray.600" : "gray.300"}>
                    {data.connectDescription}
                  </Text>
                </VStack>

                <VStack spacing={4} w="full">
                  {data.contactMethods.map((method, index) => (
                    <MotionBox
                      key={index}
                      w="full"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <Button
                        onClick={() => handleCopy(method.value, index)}
                        as="a"
                        variant="outline"
                        w="full"
                        size="lg"
                        leftIcon={<Icon as={method.icon} />}
                        rightIcon={copiedIndex === index && <Icon as={FaCheck} color="green.500" />}
                        justifyContent="start"
                        px={6}
                        py={8}
                        borderRadius="xl"
                        borderWidth="1px"
                        borderColor={copiedIndex === index ? 'green.500' : (colorMode === 'light' ? 'gray.200' : 'gray.700')}
                        bg={colorMode === 'light' ? 'white' : 'gray.800'}
                        _hover={{
                          transform: 'translateY(-3px)',
                          boxShadow: 'md',
                          borderColor: 'purple.500'
                        }}
                        transition="all 0.2s ease"
                      >
                        <VStack align="start" spacing={1}>
                          <Text fontWeight="600">{method.title}</Text>
                          <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>
                            {method.value} 
                          </Text>
                        </VStack>
                      </Button>
                    </MotionBox>
                  ))}
                </VStack>

                <MotionBox
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <VStack spacing={4} align="start">
                    <HStack spacing={4}>
                      <IconButton
                        as="a"
                        href="https://www.linkedin.com/in/montassarkabsi/"
                        target="_blank"
                        aria-label="LinkedIn"
                        icon={<FaLinkedin />}
                        size="lg"
                        variant="ghost"
                        color={colorMode === 'light' ? 'gray.700' : 'gray.200'}
                        _hover={{
                          color: 'purple.500',
                          transform: 'translateY(-3px)'
                        }}
                        transition="all 0.2s ease"
                      />
                      <IconButton
                        as="a"
                        href="https://github.com/KabsiMontassar"
                        target="_blank"
                        aria-label="GitHub"
                        icon={<FaGithub />}
                        size="lg"
                        variant="ghost"
                        color={colorMode === 'light' ? 'gray.700' : 'gray.200'}
                        _hover={{
                          color: 'purple.800',
                          transform: 'translateY(-3px)'
                        }}
                        transition="all 0.2s ease"
                      />
                    </HStack>
                  </VStack>
                </MotionBox>
              </VStack>
            </MotionBox>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Contact
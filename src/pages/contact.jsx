import React, { useState } from 'react'
import {
  Box,
  VStack,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  useColorMode,
  FormControl,
  FormLabel,
  Icon,
  useToast,
  HStack,
  Container,
  Flex,
  IconButton,
  SimpleGrid,
  usePrefersReducedMotion,
  useColorModeValue
} from '@chakra-ui/react'

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { keyframes } from '@emotion/react'
import { FiMail, FiSend, FiPhone } from 'react-icons/fi'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { RiMapPinLine } from 'react-icons/ri'

const MotionBox = motion.create(Box)
const MotionHeading = motion.create(Heading)
const MotionText = motion.create(Text)
const MotionVStack = motion.create(VStack)

const Contact = () => {
  const { colorMode } = useColorMode()
  const { t } = useTranslation()
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  const floatingAnimation = keyframes`
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(2deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  `

  const floating = `${floatingAnimation} 6s ease-in-out infinite`

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: t('messageSent'),
        description: t('thankYou'),
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right'
      })
      e.target.reset()
    }, 2000)
  }

  const contactMethods = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'kebsimontassar@gmail.com',
      action: 'kebsimontassar@gmail.com'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+216 281 153 435',
      action: '+216 281 153 435'
    },
    {
      icon: RiMapPinLine,
      title: 'Location',
      value: 'Ariana, Tunisia',
      action: 'https://www.google.com/maps/place/Ariana/@36.8689196,10.1291603,13z/data=!3m1!4b1!4m6!3m5!1s0x12e2cb4e31471bf3:0x65bc5efbce842198!8m2!3d36.8665367!4d10.1647233!16zL20vMGI0Znh0?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D'
    }
  ]

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
              bgGradient={colorMode === 'light' 
                ? 'linear(to-r, purple.600, blue.600)'
                : 'linear(to-r, purple.300, blue.300)'}
              bgClip="text"
              letterSpacing="tight"
              lineHeight="1.1"
            >
              {t('contactTitle')}
            </MotionHeading>
            <MotionText
              fontSize={{ base: "lg", md: "xl" }}
              color={colorMode === 'light' ? "gray.600" : "gray.300"}
              maxW="2xl"
            >
              {t('getInTouch')}
            </MotionText>
          </MotionVStack>

          {/* Content Grid */}
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={10}
            w="full"
            alignItems="center"
          >
            {/* Contact Information */}
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <VStack spacing={8} align="start">
                <VStack spacing={4} align="start">
                  <Heading size="lg" fontWeight="700">
                    Let's Connect
                  </Heading>
                  <Text color={colorMode === 'light' ? "gray.600" : "gray.300"}>
                    Have a project in mind or want to discuss potential opportunities? 
                    Reach out through any of these channels.
                  </Text>
                </VStack>

                <VStack spacing={4} w="full">
                  {contactMethods.map((method, index) => (
                    <MotionBox
                      key={index}
                      w="full"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <Button
                        as="a"
                      
                        variant="outline"
                        w="full"
                        size="lg"
                        leftIcon={<Icon as={method.icon} />}
                        justifyContent="start"
                        px={6}
                        py={8}
                        borderRadius="xl"
                        borderWidth="1px"
                        borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
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

                {/* Social Links */}
                <MotionBox
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <VStack spacing={4} align="start">
                    <Text fontWeight="600">Follow me</Text>
                    <HStack spacing={4}>
                      <IconButton
                        as="a"
                        href="#"
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
                        href="#"
                        aria-label="GitHub"
                        icon={<FaGithub />}
                        size="lg"
                        variant="ghost"
                        color={colorMode === 'light' ? 'gray.700' : 'gray.200'}
                        _hover={{
                          color: 'gray.800',
                          transform: 'translateY(-3px)'
                        }}
                        transition="all 0.2s ease"
                      />
                      <IconButton
                        as="a"
                        href="#"
                        aria-label="Twitter"
                        icon={<FaTwitter />}
                        size="lg"
                        variant="ghost"
                        color={colorMode === 'light' ? 'gray.700' : 'gray.200'}
                        _hover={{
                          color: 'blue.500',
                          transform: 'translateY(-3px)'
                        }}
                        transition="all 0.2s ease"
                      />
                    </HStack>
                  </VStack>
                </MotionBox>
              </VStack>
            </MotionBox>

            {/* Contact Form */}
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box
                as="form"
                onSubmit={handleSubmit}
                p={8}
                bg={colorMode === 'light' ? 'white' : 'gray.800'}
                borderRadius="2xl"
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
                <VStack spacing={6}>
                  <FormControl isRequired>
                    <FormLabel>Your Name</FormLabel>
                    <Input
                      placeholder="John Doe"
                      size="lg"
                      focusBorderColor="purple.500"
                      _hover={{
                        borderColor: 'purple.500'
                      }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email Address</FormLabel>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      size="lg"
                      focusBorderColor="purple.500"
                      _hover={{
                        borderColor: 'purple.500'
                      }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Subject</FormLabel>
                    <Input
                      placeholder="Project Inquiry"
                      size="lg"
                      focusBorderColor="purple.500"
                      _hover={{
                        borderColor: 'purple.500'
                      }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      placeholder="Tell me about your project..."
                      size="lg"
                      minH="180px"
                      focusBorderColor="purple.500"
                      _hover={{
                        borderColor: 'purple.500'
                      }}
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    colorScheme="purple"
                    size="lg"
                    width="full"
                    isLoading={isLoading}
                    rightIcon={<FiSend />}
                    mt={4}
                    _hover={{
                      transform: 'translateY(-3px)',
                      boxShadow: 'lg',
                      bg: colorMode === 'light' ? 'purple.600' : 'purple.400'
                    }}
                    transition="all 0.2s ease"
                  >
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </MotionBox>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default Contact
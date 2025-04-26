import React from 'react'
import { Box, Heading, Text, Button, VStack, useColorMode } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const { colorMode } = useColorMode()
  const navigate = useNavigate()

  return (
    <Box
      as="section"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      position="relative"
    >
      <VStack spacing={6}>
        <Heading 
          fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
          color={colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900'}
          fontWeight="bold"
        >
          Kebsi Montassar | Frontend Developer
        </Heading>
        <Text
          fontSize={{ base: 'xl', md: '2xl' }}
          color={colorMode === 'light' ? 'gray.600' : 'whiteAlpha.800'}
          maxW="2xl"
          mb={8}
        >
          Building beautiful web experiences with modern technologies
        </Text>
        <Button
          size="lg"
          colorScheme={colorMode === 'light' ? 'blackAlpha' : 'whiteAlpha'}
          onClick={() => navigate('/about')}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}
          transition="all 0.2s"
        >
          More About Me
        </Button>
      </VStack>
    </Box>
  )
}

export default Hero
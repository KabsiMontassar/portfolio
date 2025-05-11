import React from 'react'
import { Box, Text, Button, VStack, useColorMode, Container } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Hero = ({ data }) => {
  const { colorMode } = useColorMode()
  const navigate = useNavigate()

  return (
    <Box
      as="section"
      minHeight={{ base: "70vh", md: "80vh" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      position="relative"
      px={{ base: 4, md: 8 }}
      py={{ base: 10, md: 0 }}
    >
      <Container maxW={{ base: "100%", md: "90%", lg: "1200px" }} centerContent>
        <VStack spacing={{ base: 8, md: 6 }}>
          <Text
            fontSize={{ base: 'lg', sm: '3xl', md: '4xl', lg: '5xl' }}
            color={colorMode === 'light' ? 'gray.700' : 'gray.100'}
            maxW={{ base: "100%", md: "90%", lg: "1200px" }}
            lineHeight={{ base: 1.6, md: 1.4 }}
            fontWeight="medium"
          >
            {data.description}
          </Text>

          <Button
            size={{ base: "md", md: "lg" }}
            colorScheme="purple"
            onClick={() => navigate('/portfolio/about')}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
              bg: colorMode === 'light' ? 'purple.600' : 'purple.400',
            }}
            my={{ base: 4, md: 8 }}
            transition="all 0.2s"
            borderRadius={'full'}
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
            fontWeight="bold"
            px={{ base: 6, md: 8 }}
            py={{ base: 3, md: 4 }}
            bg={colorMode === 'light' ? 'purple.500' : 'purple.500'}
            color="white"
            width={{ base: "full", sm: "auto" }}
          >
            {data.buttonText}
          </Button>
        </VStack>
      </Container>
    </Box>
  )
}

export default Hero
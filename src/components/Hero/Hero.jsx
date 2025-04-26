import React from 'react'
import { Box, Heading, Text, Button, VStack, useColorMode } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import {summary} from '../../constants/content'
const Hero = () => {
  const { colorMode } = useColorMode()
  const navigate = useNavigate()

  return (
    <Box
      as="section"
      
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      position="relative"
    >
      <VStack spacing={6}>
        <Text 
          fontSize={{ base: '4xl', md: '5xl', lg: '4xl' }}
          color={colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900'}
          maxW={'1200px'}
        >
          {summary.intro}
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
          borderRadius={'full'}
          fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight="bold"
            px={8}
            py={4}
            bg={colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900'}
        >
          More About Me
        </Button>
      </VStack>
    </Box>
  )
}

export default Hero
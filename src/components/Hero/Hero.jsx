import React from 'react'
import { Box, Heading, Text, Button, VStack, useColorMode, Container } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { colorMode } = useColorMode()
  const navigate = useNavigate()
  const { t } = useTranslation()

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
            color={colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900'}
            maxW={{ base: "100%", md: "90%", lg: "1200px" }}
            lineHeight={{ base: 1.6, md: 1.4 }}
            fontWeight="medium"
          >
            {t('summary')}
          </Text>
        
          <Button
            size={{ base: "md", md: "lg" }}
            colorScheme={colorMode === 'light' ? 'blackAlpha' : 'whiteAlpha'}
            onClick={() => navigate('/about')}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
            my={{ base: 4, md: 8 }}
            transition="all 0.2s"
            borderRadius={'full'}
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
            fontWeight="bold"
            px={{ base: 6, md: 8 }}
            py={{ base: 3, md: 4 }}
            bg={colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900'}
            width={{ base: "full", sm: "auto" }}
          >
            {t('moreAboutMe')}
          </Button>
        </VStack>
      </Container>
    </Box>
  )
}

export default Hero
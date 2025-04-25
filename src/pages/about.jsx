import { Box, useColorMode } from '@chakra-ui/react'

const About = () => {
  const { colorMode } = useColorMode()
  
  return (
    <Box 
      p={8} 
      color={colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900'}
      bg={colorMode === 'light' ? 'transparent' : 'gray.800'}
    >
      About
    </Box>
  )
}

export default About
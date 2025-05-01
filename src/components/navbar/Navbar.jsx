import { Box, Flex, Link as ChakraLink, useColorMode } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const { colorMode } = useColorMode()
  const { t } = useTranslation()
  
  return (
    <Box pt={8} width="100%" px={4} position="fixed" top={0} left={0} zIndex={1000}>
      <Flex
        maxW="650px"
        mx="auto"
        py={4}
        px={8}
        bg={colorMode === 'light' ? 'blue.100' : '#08162e'}
        color={colorMode === 'light' ? 'gray.800' : 'white'}
        position="relative"
        borderRadius="full"
       // border={`1px solid ${colorMode === 'light' ? 'rgb(240, 240, 240)' : 'gray.600'}`}
        boxShadow="lg"
        justify="center"
        align="center"
        gap={8}
      >
        <ChakraLink as={RouterLink} to="/" fontSize="xl" fontWeight="700" position="relative" _hover={{ textDecoration: "underline" }}>
          Kebsi Montassar
        </ChakraLink>
        <ChakraLink as={RouterLink} to="/about" fontSize="md" fontWeight="500" position="relative" _hover={{ fontWeight: "700" }}>
          {t('about')}
        </ChakraLink>
        <ChakraLink as={RouterLink} to="/experience" fontSize="md" fontWeight="500" position="relative" _hover={{ fontWeight: "700" }}>
          {t('experiences')}
        </ChakraLink>
        <ChakraLink as={RouterLink} to="/projects" fontSize="md" fontWeight="500" position="relative" _hover={{ fontWeight: "700" }}>
          {t('projects')}
        </ChakraLink>
        <ChakraLink as={RouterLink} to="/contact" fontSize="md" fontWeight="500" position="relative" _hover={{ fontWeight: "700" }}>
          {t('contact')}
        </ChakraLink>
      </Flex>
    </Box>
  )
}

export default Navbar

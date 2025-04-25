import { Box, Flex, Link as ChakraLink } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box pt={8} width="100%" px={4} position="fixed" top={0} left={0} zIndex={100}>
      <Flex
        maxW="600px"
        mx="auto"
        py={4}
        px={8}
        bg="#FBF8F0"
        position="relative"
        borderRadius="full"
        border="1px solid rgb(240, 240, 240)"
        boxShadow="lg"
        justify="center"
        align="center"
        gap={8}
      >
        <ChakraLink as={RouterLink} to="/" fontSize="xl" fontWeight="700" position="relative" _hover={{ textDecoration: "underline" }}>
          Kebsi Montassar
        </ChakraLink>
        <ChakraLink as={RouterLink} to="/about" fontSize="md" fontWeight="500" position="relative" _hover={{ fontWeight: "700" }}>
          About
        </ChakraLink>
        <ChakraLink as={RouterLink} to="/experience" fontSize="md" fontWeight="500" position="relative" _hover={{ fontWeight: "700" }}>
          Experiences
        </ChakraLink>
        <ChakraLink as={RouterLink} to="/projects" fontSize="md" fontWeight="500" position="relative" _hover={{ fontWeight: "700" }}>
          Projects
        </ChakraLink>
        <ChakraLink as={RouterLink} to="/contact" fontSize="md" fontWeight="500" position="relative" _hover={{ fontWeight: "700" }}>
          Contact
        </ChakraLink>
      </Flex>
    </Box>
  )
}

export default Navbar

import React from 'react'
import { Box, IconButton, Link as ChakraLink, VStack, HStack, Text, useColorMode, Flex, Stack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import data from '../../data/footerData'
const Footer = () => {
    const { colorMode } = useColorMode()

  
    
    const firstColor = colorMode === 'light' ? '#F7FAFC' : '#1A202C'
    const secondColor = colorMode === 'light' ? '#EDF2F7' : '#171923'
    
    const bgGradient = `linear(to-b, ${firstColor}, ${secondColor})`
  
    return (
        <Box
            height="full"
            width="full"
            bgGradient={bgGradient}
            color={colorMode === 'light' ? 'gray.700' : 'white'}
            display="flex"
            alignItems="center"
            justifyContent="center"
            px={{ base: 4, md: 8 }}
        >
            <VStack spacing={{ base: 4, md: 6, lg: 8 }} py={{ base: 6, md: 8 }}>
                <HStack spacing={{ base: 3, md: 4 }}>
                    <IconButton
                        as="a"
                        href="https://www.linkedin.com/in/montassarkabsi/"
                        target="_blank"
                        aria-label="LinkedIn"
                        icon={<FaLinkedin />}
                         fontSize={{ base: "20px", md: "24px" }}
                        size={{ base: "md", md: "lg" }}
                        variant="ghost"
                        _hover={{ transform: 'scale(1.1)' }}
                    />
                    <IconButton
                        as="a"
                        href="https://github.com/KabsiMontassar"
                        target="_blank"
                        aria-label="GitHub"
                        icon={<FaGithub />}
                        fontSize={{ base: "20px", md: "24px" }}
                        size={{ base: "md", md: "lg" }}
                        variant="ghost"
                        _hover={{ transform: 'scale(1.1)' }}
                    />
                </HStack>
        
                <Stack 
                    direction={{ base: 'column', sm: 'row' }} 
                    spacing={{ base: 2, sm: 4, md: 8 }}
                    align="center"
                    textAlign="center"
                    wrap={{ base: 'wrap', md: 'nowrap' }}
                >
                    {data.navlinks.map((path, index) => (
                        <ChakraLink
                            key={index}
                            as={RouterLink}
                            to={path.path}
                            fontSize={{ base: "xs", sm: "sm", md: "md" }}
                            fontWeight="500"
                            color={colorMode === 'light' ? 'gray.700' : 'gray.200'}
                            _hover={{ fontWeight: '700', color: colorMode === 'light' ? 'purple.600' : 'purple.300' }}
                        >
                            {path.name}
                        </ChakraLink>
                    ))}
                </Stack>
        
                <VStack spacing={{ base: 1, md: 2 }}>
                    <Text
                        fontSize={{ base: "xs", md: "sm" }}
                        color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
                        textAlign="center"
                    >
                        {data.copyright}
                    </Text>
                    <Text
                        fontSize={{ base: "xs", md: "sm" }}
                        color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
                        textAlign="center"
                    >
                        {data.builtWith}
                    </Text>
                </VStack>
            </VStack>
        </Box>
    )
}

export default Footer
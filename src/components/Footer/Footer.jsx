import React from 'react'
import { Box, IconButton, Link as ChakraLink, VStack, HStack, Text, useColorMode, Flex, Stack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { colorMode } = useColorMode()
    const { t } = useTranslation()
  
    const navlinks = [
        { name: t('home'), path: '/' },
        { name: t('about'), path: '/about' },
        { name: t('experiences'), path: '/experience' },
        { name: t('projects'), path: '/projects' },
        { name: t('contact'), path: '/contact' },
    ]
    
    const firstColor = colorMode === 'light' ? '#D9E2F3' : '#1A202C'
    const secondColor = colorMode === 'light' ? '#BEE3F8' : '#08162E'
    
    const bgGradient = `linear(to-b, ${firstColor}, ${secondColor})`
  
    return (
        <Box
            height="full"
            width="full"
            bgGradient={bgGradient}
            color={colorMode === 'light' ? 'whiteAlpha.900' : 'whiteAlpha.900'}
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
                    {navlinks.map((path, index) => (
                        <ChakraLink
                            key={index}
                            as={RouterLink}
                            to={path.path}
                            fontSize={{ base: "xs", sm: "sm", md: "md" }}
                            fontWeight="500"
                            color={colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900'}
                            _hover={{ fontWeight: '700' }}
                        >
                            {path.name}
                        </ChakraLink>
                    ))}
                </Stack>
        
                <VStack spacing={{ base: 1, md: 2 }}>
                    <Text
                        fontSize={{ base: "xs", md: "sm" }}
                        color={colorMode === 'light' ? 'gray.600' : 'whiteAlpha.800'}
                        textAlign="center"
                    >
                        {t('copyright')}
                    </Text>
                    <Text
                        fontSize={{ base: "xs", md: "sm" }}
                        color={colorMode === 'light' ? 'gray.600' : 'whiteAlpha.800'}
                        textAlign="center"
                    >
                        {t('privacyNote')}
                    </Text>
                </VStack>
            </VStack>
        </Box>
    )
}

export default Footer
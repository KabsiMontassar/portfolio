import React from 'react'
import { Box, IconButton, Link as ChakraLink, VStack, HStack, Text, useColorMode } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function Content() {
  const { colorMode } = useColorMode()
  const { t } = useTranslation()

const navlinks = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('experiences'), path: '/experience' },
    { name: t('projects'), path: '/projects' },
    { name: t('contact'), path: '/contact' },
  ]
  

  

  return (
    <Box
      height="full"
      width="full"
      bg={colorMode === 'light' ? 'gray.200' : 'gray.900'}
      color={colorMode === 'light' ? 'whiteAlpha.900' : 'whiteAlpha.900'}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={8} py={8}>
        <HStack spacing={4}>
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/montassarkabsi/"
            target="_blank"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            fontSize="24px"
            size="lg"
            
            variant="ghost"
            _hover={{ transform: 'scale(1.1)' }}
          />
          <IconButton
            as="a"
            href="https://github.com/KabsiMontassar"
            target="_blank"
            aria-label="GitHub"
            icon={<FaGithub />}
            fontSize="24px"
            size="lg"
            variant="ghost"
            _hover={{ transform: 'scale(1.1)' }}
          />
        </HStack>

        <HStack spacing={8}>
          {navlinks.map((path, index) => (
            <ChakraLink
              key={index}
              as={RouterLink}
              to={path.path}
              fontSize="md"
              fontWeight="500"
              color={colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900'}
              _hover={{ fontWeight: '700' }}
            >
              {path.name}
            </ChakraLink>
          ))}
        </HStack>

        <VStack spacing={2}>
          <Text
            fontSize="sm"
            color={colorMode === 'light' ? 'gray.600' : 'whiteAlpha.800'}
          >
            {t('copyright')}
          </Text>
          <Text
            fontSize="sm"
            color={colorMode === 'light' ? 'gray.600' : 'whiteAlpha.800'}
          >
            {t('privacyNote')}
          </Text>
        </VStack>
      </VStack>
    </Box>
  )
}
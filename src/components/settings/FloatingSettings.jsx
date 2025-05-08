import { Box, IconButton, Menu, MenuButton, MenuList, Button, Flex, Divider, useColorMode, useBreakpointValue } from '@chakra-ui/react'
import { FiSettings } from 'react-icons/fi'
import { BsSun, BsMoon } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import { setStoredLanguage } from '../../utils/localStorage'

export default function FloatingSettings() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { i18n, t } = useTranslation()
  
  // Make button size responsive
  const buttonSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" })
  // Adjust positioning for different screen sizes
  const rightPosition = useBreakpointValue({ base: 3, sm: 4, md: 8, lg: 14 })
  const topPosition = useBreakpointValue({ base: 16, sm: 16, md: 8 }) // Higher position on mobile to avoid navbar
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setStoredLanguage(lng)
  }

  return (
    <Box
      position="fixed"
      right={rightPosition}
      top={topPosition}
      zIndex={1000}
    >
      <Menu placement="left-start" gutter={0} strategy="fixed">
        <MenuButton
          color={colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900'}
          bg={colorMode === 'light' ? 'white' : 'gray.700'}
          as={IconButton}
          aria-label="Settings"
          icon={<FiSettings />}
          variant="solid"
          size={buttonSize}
          boxShadow="lg"
          borderRadius="full"
          _hover={{ transform: 'rotate(45deg)', bg: colorMode === 'light' ? 'gray.100' : 'gray.600' }}
          transition="all 0.3s ease"
        />
        <MenuList 
          p={{ base: 2, md: 4 }}
          bg={colorMode === 'light' ? 'white' : 'gray.800'} 
          color={colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900'}
          borderColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
          minW={{ base: "180px", sm: "240px", md: "300px" }}
          transform="none !important"
        >
          <Flex direction="column" gap={3}>
            <Flex justify="space-between" flexDir={{ base: "column", sm: "row" }} gap={2}>
              <Button
                variant="ghost"
                size="sm"
                leftIcon={
                  <img
                    src="https://flagcdn.com/w20/gb.png"
                    width="16"
                    height="12"
                    alt="English"
                  />
                }
                color={colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900'}
                onClick={() => changeLanguage('en')}
                isDisabled={i18n.language === 'en'}
                opacity={i18n.language !== 'en' ? 0.5 : 1}
                _hover={{
                  bg: colorMode === 'light' ? 'gray.100' : 'gray.700'
                }}
                _disabled={{
                  bg: colorMode === 'light' ? 'purple.50' : 'purple.900',
                  opacity: 1,
                  color: colorMode === 'light' ? 'purple.700' : 'purple.200',
                }}
              >
                English
              </Button>
              <Button
                variant="ghost"
                size="sm"
                leftIcon={
                  <img
                    src="https://flagcdn.com/w20/fr.png"
                    width="16"
                    height="12"
                    alt="French"
                  />
                }
                color={colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900'}
                onClick={() => changeLanguage('fr')}
                isDisabled={i18n.language == 'fr'}
                opacity={i18n.language !== 'fr' ? 0.5 : 1}
                _hover={{
                  bg: colorMode === 'light' ? 'gray.100' : 'gray.700'
                }}
                _disabled={{
                  bg: colorMode === 'light' ? 'purple.50' : 'purple.900',
                  opacity: 1,
                  color: colorMode === 'light' ? 'purple.700' : 'purple.200',
                }}
              >
                Français
              </Button>
            </Flex>
            <Divider />
            <Flex justify="space-between" flexDir={{ base: "column", sm: "row" }} gap={2}>
              <Button
                variant="ghost"
                size="sm"
                leftIcon={<BsSun />}
                onClick={colorMode === 'dark' ? toggleColorMode : undefined}
                isDisabled={colorMode === 'light'}
                opacity={colorMode !== 'light' ? 0.5 : 1}
                color={colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900'}
                _hover={{
                  bg: colorMode === 'light' ? 'gray.100' : 'gray.700'
                }}
                _disabled={{
                  bg: colorMode === 'light' ? 'purple.50' : 'purple.900',
                  opacity: 1,
                  color: colorMode === 'light' ? 'purple.700' : 'purple.200',
                }}
              >
                {t('light')}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                leftIcon={<BsMoon />}
                onClick={colorMode === 'light' ? toggleColorMode : undefined}
                isDisabled={colorMode === 'dark'}
                opacity={colorMode !== 'dark' ? 0.5 : 1}
                color={colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900'}
                _hover={{
                  bg: colorMode === 'light' ? 'gray.100' : 'gray.700'
                }}
                _disabled={{
                  bg: colorMode === 'light' ? 'purple.50' : 'purple.900',
                  opacity: 1,
                  color: colorMode === 'light' ? 'purple.700' : 'purple.200',
                }}
              >
                {t('dark')}
              </Button>
            </Flex>
          </Flex>
        </MenuList>
      </Menu>
    </Box>
  )
}

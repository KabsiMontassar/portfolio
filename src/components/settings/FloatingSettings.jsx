import { Box, IconButton, Menu, MenuButton, MenuList, Button, Flex, Divider, useColorMode } from '@chakra-ui/react'
import { FiSettings } from 'react-icons/fi'
import { BsSun, BsMoon } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import { setStoredLanguage } from '../../utils/localStorage'

export default function FloatingSettings() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { i18n, t } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setStoredLanguage(lng)
  }

  return (
    <Box
      position="fixed"
      right={14}
      top={8}
      zIndex={1000}
     
    >
      <Menu placement="left-start" gutter={0} strategy="fixed">
        <MenuButton
          color={colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900'}
          bg={colorMode === 'light' ? 'blue.100' : 'gray.700'}
          as={IconButton}
          aria-label="Settings"
          icon={<FiSettings />}
          variant="solid"
          size="lg"
          boxShadow="lg"
          borderRadius="full"
          _hover={{ transform: 'rotate(45deg)', bg: colorMode === 'light' ? 'blue.100' : 'gray.600' }}
          transition="all 0.3s ease"
        />
        <MenuList 
          p={4} 
          bg={colorMode === 'light' ? 'blue.100' : 'gray.700'} 
          color={colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900'}
          borderColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
          minW="300px"
          transform="none !important"
        >
          <Flex direction="column" gap={4}>
            <Flex justify="space-between">
              <Button
                variant="ghost"
                leftIcon={
                  <img
                    src="https://flagcdn.com/w20/gb.png"
                    width="20"
                    alt="English"
                  />
                }
                color={colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900'}
                onClick={() => changeLanguage('en')}
                isDisabled={i18n.language === 'en'}
                opacity={i18n.language !== 'en' ? 0.5 : 1}
                _hover={{
                  bg: colorMode === 'light' ? 'blackAlpha.50' : 'whiteAlpha.100'
                }}
                _disabled={{
                  bg: colorMode === 'light' ? 'blackAlpha.50' : 'whiteAlpha.100',
                  opacity: 1,
                  color: colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900',
                }}
              >
                English
              </Button>
              <Button
                variant="ghost"
                leftIcon={
                  <img
                    src="https://flagcdn.com/w20/fr.png"
                    width="20"
                    alt="French"
                  />
                }
                color={colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900'}
                onClick={() => changeLanguage('fr')}
                isDisabled={i18n.language == 'fr'}
                opacity={i18n.language !== 'fr' ? 0.5 : 1}
                _hover={{
                  bg: colorMode === 'light' ? 'blackAlpha.50' : 'whiteAlpha.100'
                }}
                _disabled={{
                  bg: colorMode === 'light' ? 'blackAlpha.50' : 'whiteAlpha.100',
                  opacity: 1,
                  color: colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900',
                }}
              >
                Français
              </Button>
            </Flex>
            <Divider />
            <Flex justify="space-between">
              <Button
                variant="ghost"
                leftIcon={<BsSun />}
                onClick={colorMode === 'dark' ? toggleColorMode : undefined}
                isDisabled={colorMode === 'light'}
                opacity={colorMode !== 'light' ? 0.5 : 1}
                color={colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900'}
                _hover={{
                  bg: colorMode === 'light' ? 'blackAlpha.50' : 'whiteAlpha.100'
                }}
                _disabled={{
                  bg: colorMode === 'light' ? 'blackAlpha.50' : 'whiteAlpha.100',
                  opacity: 1,
                  color: colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900',
                }}
              >
                {t('light')}
              </Button>
              <Button
                variant="ghost"
                leftIcon={<BsMoon />}
                onClick={colorMode === 'light' ? toggleColorMode : undefined}
                isDisabled={colorMode === 'dark'}
                opacity={colorMode !== 'dark' ? 0.5 : 1}
                color={colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900'}
                _hover={{
                  bg: colorMode === 'light' ? 'blackAlpha.50' : 'whiteAlpha.100'
                }}
                _disabled={{
                  bg: colorMode === 'light' ? 'blackAlpha.50' : 'whiteAlpha.100',
                  opacity: 1,
                  color: colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900',
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

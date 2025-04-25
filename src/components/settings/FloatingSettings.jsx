import { Box, IconButton, Menu, MenuButton, MenuList, Button, Flex, Divider } from '@chakra-ui/react'
import { FiSettings } from 'react-icons/fi'
import { BsSun, BsMoon } from 'react-icons/bs'

export default function FloatingSettings() {
  return (
    <Box
      position="fixed"
      right={4}
      pt={4}
      top="10%"
     
      transform="translateY(-50%)"
      zIndex={100}
    >
      <Menu placement="left-start">
        <MenuButton
          bg="#FBF8F0"
          as={IconButton}
          aria-label="Settings"
          icon={<FiSettings />}
          variant="solid"
          size="lg"
         
          boxShadow="lg"
          borderRadius="full"
          _hover={{ transform: 'rotate(45deg)' }}
          transition="transform 0.3s ease"
        />
        <MenuList p={4}    bg="#FBF8F0" minW="300px">
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
              >
                Français
              </Button>
            </Flex>
            <Divider />
            <Flex justify="space-between">
              <Button variant="ghost" leftIcon={<BsSun />}>
                Light
              </Button>
              <Button variant="ghost" leftIcon={<BsMoon />}>
                Dark
              </Button>
            </Flex>
          </Flex>
        </MenuList>
      </Menu>
    </Box>
  )
}

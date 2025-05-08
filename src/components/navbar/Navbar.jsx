import { 
  Box, 
  Flex, 
  Link as ChakraLink, 
  useColorMode, 
  IconButton, 
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
  useBreakpointValue
} from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useRef, useEffect } from 'react'

const Navbar = () => {
  const { colorMode } = useColorMode()
  const { t } = useTranslation()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const location = useLocation()
  
  // Use breakpoints to determine when to switch to mobile view
  const isMobile = useBreakpointValue({ base: true, md: false })
  const navWidth = useBreakpointValue({ 
    base: "80%", // Reduced from 95% to leave space for settings
    sm: "85%", 
    md: "650px" 
  })
  const paddingTop = useBreakpointValue({ base: 4, md: 8 })
  
  const navLinks = [
    { name: t('about'), path: '/about' },
    { name: t('experiences'), path: '/experience' },
    { name: t('projects'), path: '/projects' },
    { name: t('contact'), path: '/contact' }
  ]

  // Responsive styles for nav items
  const navItemStyles = {
    fontSize: { base: "md", lg: "md" },
    fontWeight: "500",
    position: "relative",
    _hover: { fontWeight: "700" }
  }
  
  // Close drawer when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);
  
  return (
    <Box pt={paddingTop} width="100%" px={4} position="fixed" top={0} left={0} zIndex={1000}>
      <Flex
        maxW={navWidth}
        mx="auto"
        py={{ base: 3, md: 4 }}
        px={{ base: 4, md: 8 }}
        bg={colorMode === 'light' ? 'white' : 'gray.800'}
        color={colorMode === 'light' ? 'gray.800' : 'white'}
        position="relative"
        borderRadius="full"
        boxShadow="lg"
        justify="space-between"
        align="center"
      >
        <ChakraLink 
          as={RouterLink} 
          to="/" 
          fontSize={{ base: "sm", sm: "md", md: "xl" }} // Smaller font on mobile
          fontWeight="700" 
          position="relative" 
          _hover={{ textDecoration: "underline" }}
          isTruncated // Ensures text truncates if needed
          maxW={{ base: "150px", sm: "200px", md: "250px" }} // Limit width on small screens
        >
          Kebsi Montassar
        </ChakraLink>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <Flex gap={6} align="center">
            {navLinks.map((link, index) => (
              <ChakraLink 
                key={index}
                as={RouterLink} 
                to={link.path} 
                {...navItemStyles}
              >
                {link.name}
              </ChakraLink>
            ))}
          </Flex>
        )}
        
        {/* Mobile Navigation Button */}
        {isMobile && (
          <IconButton
            ref={btnRef}
            aria-label="Open menu"
            fontSize="24px"
            variant="ghost"
            icon={<HamburgerIcon />}
            onClick={onOpen}
            color={colorMode === 'light' ? 'gray.700' : 'white'}
          />
        )}
        
        {/* Mobile Navigation Drawer */}
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={colorMode === 'light' ? 'white' : 'gray.800'}>
            <DrawerCloseButton color={colorMode === 'light' ? 'gray.700' : 'white'} />
            <DrawerBody pt={16}>
              <VStack spacing={8} align="center">
                {navLinks.map((link, index) => (
                  <ChakraLink 
                    key={index}
                    as={RouterLink} 
                    to={link.path}
                    fontSize="xl"
                    fontWeight="500"
                    onClick={onClose}
                    _hover={{ fontWeight: "700" }}
                  >
                    {link.name}
                  </ChakraLink>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  )
}

export default Navbar

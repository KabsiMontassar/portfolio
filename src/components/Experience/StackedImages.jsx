import React, { useState } from 'react'
import { 
  Box, 
  Image, 
  Flex, 
  IconButton, 
  useColorModeValue,
  Circle
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

const StackedImages = ({ colorScheme, images = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const imageCount = images.length
  
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageCount)
  }
  
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageCount) % imageCount)
  }
  
  const overlayBg = useColorModeValue(
    `${colorScheme.light}.50`, 
    `${colorScheme.dark}.900`
  )
  
  if (!imageCount) return null
  
  return (
    <Box
      position="relative"
      width="100%"
      height={{ base: "250px", sm: "300px", md: "320px", lg: "350px" }}
      mx="auto"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="xl"
      border="3px solid"
      borderColor={`${colorScheme.light}.300`}
    >
      {/* Image Container */}
      <Box
        position="relative"
        height="100%"
        width="100%"
        overflow="hidden"
      >
        {images.map((img, index) => (
          <Image
            key={`gallery-img-${index}`}
            src={img}
            alt={`Project image ${index + 1}`}
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            objectFit="cover"
            opacity={index === currentImageIndex ? 1 : 0}
            transition="all 0.5s ease-in-out"
            transform={index === currentImageIndex ? "scale(1)" : "scale(0.95)"}
            zIndex={index === currentImageIndex ? 1 : 0}
          />
        ))}
      </Box>
      
      {/* Navigation Controls */}
      {imageCount > 1 && (
        <>
          {/* Navigation Buttons */}
          <Flex 
            position="absolute" 
            width="100%" 
            justifyContent="space-between" 
            top="50%" 
            transform="translateY(-50%)"
            px={2}
            zIndex={2}
          >
            <IconButton
              icon={<ChevronLeftIcon boxSize={6} />}
              aria-label="Previous image"
              onClick={handlePrev}
              variant="solid"
              colorScheme={colorScheme.light}
              size="md"
              isRound
              opacity={0.8}
              _hover={{ opacity: 1 }}
            />
            <IconButton
              icon={<ChevronRightIcon boxSize={6} />}
              aria-label="Next image"
              onClick={handleNext}
              variant="solid"
              colorScheme={colorScheme.light}
              size="md"
              isRound
              opacity={0.8}
              _hover={{ opacity: 1 }}
            />
          </Flex>
          
          {/* Image Indicators */}
          <Flex 
            position="absolute" 
            bottom={4} 
            width="100%" 
            justifyContent="center" 
            zIndex={2}
            bg={`${overlayBg}40`}
            py={2}
            borderRadius="full"
            mx="auto"
            maxW="80%"
            left="50%"
            transform="translateX(-50%)"
          >
            {images.map((_, index) => (
              <Circle
                key={`indicator-${index}`}
                size={3}
                mx={1}
                bg={index === currentImageIndex ? 
                  `${colorScheme.light}.500` : 
                  `${colorScheme.light}.200`}
                cursor="pointer"
                onClick={() => setCurrentImageIndex(index)}
                transition="background-color 0.3s"
                _hover={{
                  bg: `${colorScheme.light}.400`
                }}
              />
            ))}
          </Flex>
        </>
      )}
    </Box>
  )
}

export default StackedImages

import React from 'react'
import { Box, Image, useBreakpointValue } from '@chakra-ui/react'



const StackedImages = ({ colorScheme, images = [], isLeftSide = false }) => {
    const isMobile = useBreakpointValue({ base: true, md: false })

    if (isMobile || !images.length) return null

    return (
        <Box
            position="relative"
            width="90%"
            height={{ md: '500px', lg: '580px' }}
            mx="auto"
            mt={{ md: 12, lg: 24 }}
        >
            {images.slice(0, 3).map((img, i) => (
                <Box
                    key={`img-${i}`}
                    position="absolute"
                    width="100%"
                    height={{ md: '200px', lg: '240px' }}
                    top={`${i * 30}px`}
                    left="50%"
                    transform={
                        isLeftSide
                            ? `translateX(-58%) rotate(${(i - 1) * -4}deg)`
                            : `translateX(-42%) rotate(${(i - 1) * 4}deg)`
                    }
                    zIndex={3 - i}
                    transition="all 0.4s ease"
                    _hover={{
                        transform: isLeftSide
                            ? `translateX(-50%) rotate(${(i - 1) * -4}deg) translateY(-12px)`
                            : `translateX(-50%) rotate(${(i - 1) * 4}deg) translateY(-12px)`,
                        zIndex: 10
                    }}
                >
                    <Image
                        src={img}
                        alt={`Project image ${i + 1}`}
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        borderRadius="xl"
                        border="4px solid"
                        borderColor={`${colorScheme.light}.${400 - i * 100}`}
                        boxShadow={`0 ${10 + i * 5}px ${20 + i * 5}px -5px rgba(0,0,0,0.${3 + i})`}
                        filter={i > 0 ? `brightness(${1 - i * 0.08})` : "brightness(1)"}
                        _hover={{
                            filter: "brightness(1.05)",
                            boxShadow: `0 ${15 + i * 5}px ${25 + i * 5}px -5px rgba(0,0,0,0.${4 + i})`
                        }}
                    />
                </Box>
            ))}
        </Box>
    )
}

export default StackedImages
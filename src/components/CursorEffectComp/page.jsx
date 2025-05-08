import React, { useState, useEffect, useRef } from 'react'
import BlurryCursor from "./cursor"
import { VStack, Text, Box, useColorMode, useBreakpointValue } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'

export default function Page() {
    const { colorMode } = useColorMode()
    const { t } = useTranslation()
    const [isActive, setIsActive] = useState(false)
    const bgRef = useRef(null)
    
    // Responsive circle sizes
    const scaleFactor = useBreakpointValue({ base: 0.6, sm: 0.8, md: 1, lg: 1.2 })
    
    // Responsive text sizing
    const quoteSize = useBreakpointValue({ base: "4xl", sm: "5xl", md: "6xl", lg: "7xl" })

    useEffect(() => {
        const shapes = bgRef.current.querySelectorAll('.bg-shape')
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight
        
        // Adjust animation boundaries based on viewport
        const maxX = viewportWidth
        const maxY = viewportHeight

        shapes.forEach((shape, i) => {
            // Scale initial positions based on viewport
            gsap.set(shape, {
                x: Math.random() * maxX,
                y: Math.random() * maxY,
                scale: (Math.random() * 2 + 0.5) * (scaleFactor || 1),
            })

            // Adjust animation range based on viewport
            gsap.to(shape, {
                x: `random(0, ${maxX})`,
                y: `random(0, ${maxY})`,
                scale: `random(${0.5 * (scaleFactor || 1)}, ${2 * (scaleFactor || 1)})`,
                rotation: 'random(-180, 180)',
                duration: 'random(10, 20)',
                ease: 'none',
                repeat: -1,
                yoyo: true,
                delay: i * -2
            })
        })
        
        // Handle resize for responsive animation
        const handleResize = () => {
            const newMaxX = window.innerWidth
            const newMaxY = window.innerHeight
            
            shapes.forEach((shape) => {
                // Keep shapes within new viewport boundaries
                const currentX = gsap.getProperty(shape, "x")
                const currentY = gsap.getProperty(shape, "y")
                
                if (currentX > newMaxX) gsap.set(shape, { x: newMaxX * 0.8 })
                if (currentY > newMaxY) gsap.set(shape, { y: newMaxY * 0.8 })
            })
        }
        
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [scaleFactor])

    return (
        <Box height="100%" width="100%" position="relative" overflow="hidden">
            <Box
                ref={bgRef}
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                zIndex={1}
                opacity={colorMode === 'light' ? 0.16 : 0.18}
            >
                <svg width="100%" height="80%" style={{ filter: 'blur(40px)' }}>
                    {/* Primary shapes - scale radius based on screen size */}
                    <circle className="bg-shape" r={120 * (scaleFactor || 1)} fill="#805AD5" />
                    <circle className="bg-shape" r={140 * (scaleFactor || 1)} fill="#4299E1" />
                    <circle className="bg-shape" r={100 * (scaleFactor || 1)} fill="#9F7AEA" />
                    <circle className="bg-shape" r={160 * (scaleFactor || 1)} fill="#7B341E" />
                    <circle className="bg-shape" r={130 * (scaleFactor || 1)} fill="#ED64A6" />
                    {/* Secondary shapes */}
                    <circle className="bg-shape" r={90 * (scaleFactor || 1)} fill="#667EEA" />
                    <circle className="bg-shape" r={110 * (scaleFactor || 1)} fill="#5A67D8" />
                    <circle className="bg-shape" r={80 * (scaleFactor || 1)} fill="#6B46C1" />
                    <circle className="bg-shape" r={140 * (scaleFactor || 1)} fill="#D53F8C" />
                    <circle className="bg-shape" r={70 * (scaleFactor || 1)} fill="#3182CE" />
                </svg>
            </Box>

            <Box
                height="100%"
                width="100%"
                position="relative"
                display="flex"
                alignItems="center"
                justifyContent="center"
                zIndex={10}
                px={{ base: 4, md: 8 }}
            >
                <VStack spacing={{ base: 4, md: 6 }} align="center">
                    <Text
                        onMouseEnter={() => setIsActive(true)}
                        onMouseLeave={() => setIsActive(false)}
                        fontSize={quoteSize}
                        color={colorMode === 'light' ? 'gray.700' : 'gray.100'}
                        fontStyle="italic"
                        maxW={{ base: "100%", md: "90%", lg: "1000px" }}
                        textAlign="center"
                        lineHeight={{ base: 1.4, md: 1.6 }}
                    >
                        "{t('quote')}"
                    </Text>
                </VStack>
                <BlurryCursor isActive={isActive} />
            </Box>
        </Box>
    )
}
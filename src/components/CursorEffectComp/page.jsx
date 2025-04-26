import React, { useState, useEffect, useRef } from 'react'
import BlurryCursor from "./cursor"
import { VStack, Text, Box, useColorMode } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'

export default function Page() {
    const { colorMode } = useColorMode()
    const { t } = useTranslation()
    const [isActive, setIsActive] = useState(false)
    const bgRef = useRef(null)
    
    useEffect(() => {
        const shapes = bgRef.current.querySelectorAll('.bg-shape')
        
        shapes.forEach((shape, i) => {
            gsap.set(shape, {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 2 + 0.5,
            })
            
            gsap.to(shape, {
                x: `random(0, ${window.innerWidth})`,
                y: `random(0, ${window.innerHeight})`,
                scale: 'random(0.5, 2)',
                rotation: 'random(-180, 180)',
                duration: 'random(10, 20)',
                ease: 'none',
                repeat: -1,
                yoyo: true,
                delay: i * -2
            })
        })
    }, [])

    return (
        <Box  height="100%" width="100%" position="relative" overflow="hidden">
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
                <svg width="100%" height="100%" style={{filter: 'blur(40px)'}}>
                    {/* Primary shapes */}
                    <circle className="bg-shape" r="120" fill="#FF3366"/>
                    <circle className="bg-shape" r="140" fill="#33FF99"/>
                    <circle className="bg-shape" r="100" fill="#3366FF"/>
                    <circle className="bg-shape" r="160" fill="#FFCC33"/>
                    <circle className="bg-shape" r="130" fill="#9933FF"/>
                    {/* Secondary shapes */}
                    <circle className="bg-shape" r="90" fill="#FF6633"/>
                    <circle className="bg-shape" r="110" fill="#33FFCC"/>
                    <circle className="bg-shape" r="80" fill="#6633FF"/>
                    <circle className="bg-shape" r="140" fill="#FF33CC"/>
                    <circle className="bg-shape" r="70" fill="#33FF66"/>
                    {/* Accent shapes */}
                    <circle className="bg-shape" r="60" fill="#FF99CC"/>
                    <circle className="bg-shape" r="85" fill="#99FF33"/>
                    <circle className="bg-shape" r="95" fill="#3399FF"/>
                    <circle className="bg-shape" r="75" fill="#FF3399"/>
                    <circle className="bg-shape" r="115" fill="#33CCFF"/>
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
            >
                <VStack spacing={6} align="center">
                    <Text
                        onMouseEnter={() => setIsActive(true)}
                        onMouseLeave={() => setIsActive(false)}
                        fontSize={"7xl"}
                        color={colorMode === 'light' ? 'gray.600' : 'whiteAlpha.900'}
                        fontStyle="italic"
                        maxW="1000px"
                        textAlign="center"
                    >
                        "{t('quote')}"
                    </Text>
                </VStack>
                <BlurryCursor isActive={isActive} />
            </Box>
        </Box>
    )
}
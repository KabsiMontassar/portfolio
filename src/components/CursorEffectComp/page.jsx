import React, { useState } from 'react'
import BlurryCursor from "./cursor";
import { VStack, Heading, Text, Box, useColorMode } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export default function Page() {
    const { colorMode } = useColorMode()
    const { t } = useTranslation()
    const [isActive, setIsActive] = useState(false);

    return (
        <>

            <Box

                height="100%"
                width="100%"
                position="relative"
                overflow="hidden"
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
          
        </>
    )
}
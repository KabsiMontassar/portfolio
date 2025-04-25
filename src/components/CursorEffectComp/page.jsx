import React, { useState } from 'react'
import BlurryCursor from "./cursor";
import { VStack, Heading, Text, Box, useColorMode } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export default function Page() {
    const { colorMode } = useColorMode()
    const { t } = useTranslation()
    const [isActive, setIsActive] = useState(false);

    return (
        <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
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
    )
}
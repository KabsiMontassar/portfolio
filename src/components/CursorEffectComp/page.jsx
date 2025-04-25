import React, { useState } from 'react'
import BlurryCursor from "./cursor";
import { VStack, Heading, Text, Box } from '@chakra-ui/react'

export default function Page() {
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
                    color="gray.600"
                    fontStyle="italic"
                    maxW="1000px"
                    textAlign="center"
                >
                    "The only way to do great work is to love what you do"
                </Text>
            </VStack>
            <BlurryCursor isActive={isActive} />
        </Box>
    )
}
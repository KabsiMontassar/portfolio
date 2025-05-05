import React from 'react'
import { Box, Flex, Heading, Text, Icon, useColorMode, VStack } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
const Beyond = ({ alltexts }) => {
    const { colorMode } = useColorMode();


    return (

        <Box mb={16}>
            <Box
                bg={colorMode === 'light' ? 'white' : 'gray.800'}
                borderRadius="2xl"
                p={8}
                boxShadow="xl"
                border="1px solid"
                borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
            >
                <Flex align="center" mb={4}>
                    <Icon
                        as={FaHeart}
                        mr={3}
                        color="purple.500"
                        boxSize={6}
                    />
                    <Heading as="h2" size="lg" fontWeight="700">
                        {alltexts[10]}
                    </Heading>
                </Flex>
                <VStack spacing={4} align="stretch">
                    <Text fontSize="lg" lineHeight="tall">
                        {alltexts[11]}
                    </Text>
                    <Text fontSize="lg" lineHeight="tall">
                        {alltexts[12]}
                    </Text>
                </VStack>
            </Box>
        </Box>
    )
}

export default Beyond
import React from 'react'
import {
    Box,
    Flex,
    Heading,
    Tag,
    TagLabel,
    SimpleGrid,
    Icon,
    useColorMode,
} from '@chakra-ui/react';


const Technical = ({ alltexts }) => {
    const { colorMode } = useColorMode()
    return (
        <Box mb={16}>
            <Heading size="xl" mb={8} fontWeight="800">
                <Box
                    as="span"
                    bgGradient="linear(to-r, purple.500, blue.500)"
                    bgClip="text"
                >
                    {alltexts[8]}
                </Box>
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {alltexts[9].map((category) => (
                    <Box
                        key={category.title}
                        bg={colorMode === 'light' ? 'white' : 'gray.800'}
                        borderRadius="2xl"
                        p={6}
                        border="1px solid"
                        borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
                        position="relative"
                        transition="all 0.3s ease"
                        _hover={{
                            transform: 'translateY(-4px)',
                            boxShadow: 'xl',
                            borderColor: `purple.400`,
                        }}
                        overflow="hidden"
                        _before={{
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            bgGradient: `linear(to-r, purple.400, blue.500)`,
                        }}
                    >
                        <Flex align="center" mb={4}>
                            <Box
                                p={3}
                                borderRadius="xl"
                                bg={colorMode === 'light' ? `${category.color}.50` : `${category.color}.900`}
                                color={`${category.color}.500`}
                            >
                                <Icon as={category.icon} boxSize={6} />
                            </Box>
                            <Heading size="md" ml={3}>
                                {category.title}
                            </Heading>
                        </Flex>
                        <Flex flexWrap="wrap" gap={2}>
                            {category.items.map((skill) => (
                                <Tag
                                    key={skill}
                                    size="lg"
                                    borderRadius="full"
                                    px={4}
                                    py={2}
                                    bg={colorMode === 'light'
                                        ? `${category.color}.50`
                                        : `${category.color}.900`}
                                    color={colorMode === 'light'
                                        ? `${category.color}.700`
                                        : `${category.color}.200`}
                                    border="1px solid"
                                    borderColor={colorMode === 'light'
                                        ? `${category.color}.100`
                                        : `${category.color}.800`}
                                    _hover={{
                                        bg: colorMode === 'light'
                                            ? `${category.color}.100`
                                            : `${category.color}.800`,
                                        transform: 'scale(1.05)',
                                    }}
                                    transition="all 0.2s ease"
                                    cursor="pointer"
                                >
                                    <TagLabel fontWeight="600">{skill}</TagLabel>
                                </Tag>
                            ))}
                        </Flex>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    )
}

export default Technical
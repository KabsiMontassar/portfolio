import React from 'react'
import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'

const ImagePreview = ({ images, borderColor, textColor }) => {

    return (
        <>
            <SimpleGrid
                columns={{ base: 2, sm: 3 }}
                spacing={{ base: 4, md: 6 }}
                w="100%"
                px={{ base: 0, md: 4 }}
            >
                {images.map((img, idx) => (
                    <Flex
                        key={idx}
                        direction="column"
                        align="center"
                        transition="all 0.3s ease"
                        _hover={{
                            transform: 'translateY(-5px)'
                        }}
                    >
                        <Text
                            color={textColor}
                            fontSize="sm"
                            fontWeight="600"
                            mb={2}
                            textAlign="center"
                        >
                            {img.title}
                        </Text>
                        <Box
                            borderRadius="lg"
                            overflow="hidden"
                            cursor="pointer"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: 'scale(1.05)',
                                boxShadow: `0 4px 12px ${borderColor}40`
                            }}
                            boxShadow={`0 2px 8px ${borderColor}20`}
                            position="relative"
                            w="full"
                            h={{ base: "100px", md: "120px" }}
                        >
                            <Image
                                src={img.url}
                                alt={img.title}
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                border={`2px solid ${borderColor}`}
                            />
                            <Box
                                position="absolute"
                                inset={0}
                                bg={`${borderColor}20`}
                                opacity={0}
                                _hover={{ opacity: 1 }}
                                transition="opacity 0.3s ease"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >

                            </Box>
                        </Box>
                    </Flex>
                ))}
            </SimpleGrid>

        </>
    );
};


export default ImagePreview
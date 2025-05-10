import React from 'react'
import { Box, Heading, Text, Grid, Image, Flex, VStack, Icon, useColorMode, useBreakpointValue, usePrefersReducedMotion } from '@chakra-ui/react'
import { FaCode, FaArrowRight } from 'react-icons/fa'
import img from '../../public/image.jpg';
import { keyframes } from '@emotion/react'

const HeroSection = ({ alltexts }) => {

    const prefersReducedMotion = usePrefersReducedMotion();

    const { colorMode } = useColorMode()
    const isMobile = useBreakpointValue({ base: true, lg: false });

    const gradientShift = keyframes`
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        `;
    const gradientAnimation = `${gradientShift} 15s ease infinite`;



    return (
        <>
            <Box mb={16}>
                <Heading
                    fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                    lineHeight="1.1"
                    mb={6}
                    fontWeight="700"
                    bgGradient="linear(to-r, purple.500, blue.500)"
                    bgClip="text"
                    animation={prefersReducedMotion ? undefined : gradientAnimation}
                >

                    {alltexts[0]}

                </Heading>
                <Text
                    fontSize="xl"
                    color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
                    maxW="2xl"
                >
                    {alltexts[1]}
                </Text>
            </Box>

            <Grid
                templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
                gap={8}
                mb={16}
            >
                {!isMobile && (
                    <Box
                        position="sticky"
                        top="20px"
                        height="fit-content"
                    >
                        <Box
                            position="relative"
                            h="600px"
                            borderRadius="3xl"
                            overflow="hidden"
                            boxShadow="2xl"
                            border="1px solid"
                            borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
                        >
                            <Image
                                src={img}
                                alt="Professional profile"
                                objectFit="cover"
                                w="100%"
                                h="100%"
                            />

                            <Box
                                position="absolute"
                                bottom={4}
                                right={4}
                                bg={colorMode === 'light' ? 'whiteAlpha.900' : 'blackAlpha.800'}
                                backdropFilter="blur(8px)"
                                borderRadius="xl"
                                p={4}
                                boxShadow="lg"
                                border="2px solid"
                                borderColor={colorMode === 'light' ? 'purple.200' : 'purple.700'}
                                transform="rotate(-2deg)"
                                _hover={{
                                    transform: "rotate(0deg)",
                                }}
                                transition="transform 0.3s ease"
                            >
                                <Heading size="md" mb={1}>
                                    {alltexts[2]}
                                </Heading>
                                <Text
                                    fontSize="sm"
                                    color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
                                    fontWeight="500"
                                >
                                    {alltexts[3]}
                                </Text>
                                <Box
                                    position="absolute"
                                    top={-2}
                                    right={-2}
                                    w={3}
                                    h={3}
                                    bg="purple.500"
                                    borderRadius="full"
                                    border="2px solid"
                                    borderColor={colorMode === 'light' ? 'white' : 'gray.800'}
                                />
                            </Box>
                        </Box>
                        {!prefersReducedMotion && (
                            <>
                                <Box
                                    position="absolute"
                                    top="-40px"
                                    right="-40px"
                                    w="120px"
                                    h="120px"
                                    borderRadius="full"
                                    bgGradient="linear(to-br, blue.500, pink.500)"
                                    filter="blur(20px)"
                                    opacity={0.6}
                                />
                                <Box
                                    position="absolute"
                                    bottom="-30px"
                                    left="-30px"
                                    w="80px"
                                    h="80px"
                                    borderRadius="full"
                                    bgGradient="linear(to-br, blue.500, purple.500)"
                                    filter="blur(15px)"
                                    opacity={0.6}
                                />
                            </>
                        )}
                    </Box>
                )}


                <Box>
                    <Box
                        bg={colorMode === 'light' ? 'white' : 'gray.800'}
                        borderRadius="2xl"
                        p={8}
                        boxShadow="xl"
                        border="1px solid"
                        borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
                        position="relative"
                        overflow="hidden"
                        _before={{
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            bgGradient: 'linear(to-r, purple.500, blue.500)'
                        }}
                    >
                        <Flex align="center" mb={4}>
                            <Icon
                                as={FaCode}
                                mr={3}
                                color="purple.500"
                                boxSize={6}
                            />
                            <Heading as="h2" size="lg" fontWeight="700">
                                {alltexts[4]}
                            </Heading>
                        </Flex>
                        <VStack spacing={4} align="stretch">
                            <Text fontSize="lg" lineHeight="tall">
                                {alltexts[5]}
                            </Text>
                            <Text fontSize="lg" lineHeight="tall">
                                {alltexts[6]}
                            </Text>
                            <Flex
                                align="center"
                                color="purple.500"
                                fontWeight="600"
                                mt={4}
                                _hover={{ transform: 'translateX(5px)' }}
                                transition="transform 0.2s ease"
                            >
                                <Text mr={2}>
                                    {alltexts[7]}
                                </Text>
                                <Icon as={FaArrowRight} />
                            </Flex>
                        </VStack>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default HeroSection
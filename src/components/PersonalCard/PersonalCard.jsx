import { Box, Flex, Image, Text, Button, Icon, useColorMode } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useNavigate } from 'react-router-dom';

const FeaturedSection = () => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contact');
  }

return (
    <Flex
        as="section"
      
        direction="column"
        position="relative"
        minH="110vh"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
    >
        {/* Left Card */}
        <Flex 
            direction="column" 
            position="absolute"
            left="15%"
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
        >
            <Box
                borderRadius="3xl"
                overflow="hidden"
                w={{ base: "340px", md: "500px", lg: "600px" }}
                h={{ base: "440px", md: "600px", lg: "700px" }}
                bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
                boxShadow="2xl"
                transition="transform 0.3s ease"
                _hover={{ transform: 'scale(1.02)' }}
            >
                <Image
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHNwZWFraWVyfGVufDB8fHx8MTY5MjQ1NTY3Ng&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Speaker"
                    objectFit="cover"
                    w="100%"
                    h="100%"
                />
            </Box>
        </Flex>

        {/* Right Card */}
        <Flex 
            direction="column" 
            position="absolute"
            right="20%"
            bottom="5%"
            zIndex={1}
        >
            <Box
                position="relative"
                borderRadius="3xl"
                overflow="hidden"
                w={{ base: "300px", md: "400px" }}
                h={{ base: "300px", md: "400px" }}
                bg={colorMode === 'light' ? '#E6D7F9' : '#553C9A'}
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxShadow="2xl"
                transition="transform 0.3s ease"
                _hover={{ transform: 'scale(1.02)' }}
            >
                <Text
                    fontSize={{ base: "2xl", md: "4xl" }}
                    fontWeight="bold"
                    color={colorMode === 'light' ? 'black' : 'white'}
                    textAlign="center"
                    textShadow="1px 1px 2px rgba(0, 0, 0, 0.2)"
                >
                    Hi
                </Text>

                <Button
                    position="absolute"
                    bottom={6}
                    right={6}
                    borderRadius="full"
                    p={4}
                    bg={colorMode === 'light' ? 'white' : 'gray.800'}
                    boxShadow="lg"
                    minW="auto"
                    h="auto"
                    _hover={{ transform: 'scale(1.1)' }}
                    transition="transform 0.2s ease"
                    onClick={navigateToContact}
                >
                    <Icon 
                        as={ArrowRightIcon} 
                        color={colorMode === 'light' ? 'black' : 'white'} 
                        boxSize={4} 
                    />
                </Button>
            </Box>
        </Flex>
    </Flex>
);
};

export default FeaturedSection;

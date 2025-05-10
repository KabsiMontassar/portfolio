import { Box, Flex, Image, Text, Button, Icon, useColorMode } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useNavigate } from 'react-router-dom';
import img from '../../assets/image.jpg';
import imgtest from '../../assets/test.JPG';

const PersonalCard = ({data}) => {
    const { colorMode } = useColorMode();
    const navigate = useNavigate();

    const navigateToContact = () => {
        navigate('/contact');
    }

    return (
        <Flex
            as="section"
            direction={{ base: "column", lg: "row" }}
            position="relative"
            minH={{ base: "auto", md: "100vh" }}
            justifyContent={{ base: "flex-start", md: "center" }}
            alignItems="center"
            overflow="hidden"
            px={{ base: 4, md: 8, lg: 12 }}
            py={{ base: 12, md: 0 }}
            gap={{ base: 8, md: 12, lg: 16 }}
        >
            {/* Profile Image */}
            <Flex
                direction="column"
                position={{ base: "relative", lg: "relative" }}
                left={{ base: 0, lg: 0 }}
                top={{ base: 0, lg: 0 }}
                transform={{ base: "none", lg: "none" }}
                zIndex={2}
                flex={{ base: "1", lg: "1" }}
                alignItems="center"
                justifyContent="center"
                w={{ base: "100%", lg: "60%" }} // Increased width for larger screens
            >
                <Box
                    borderRadius="3xl"
                    overflow="hidden"
                    w={{ base: "300px", sm: "400px", md: "500px", lg: "600px", xl: "700px" }} // Increased sizes
                    h={{ base: "300px", sm: "400px", md: "500px", lg: "600px", xl: "700px" }} // Increased sizes
                    boxShadow="2xl"
                    transition="transform 0.7s ease"
                    _hover={{ transform: 'scale(1.05)' }}
                >
                    <Image
                        src={img}
                        loading="lazy"
                        alt="profileImageAlt"
                        objectFit="cover"
                        w="100%"
                        h="100%"
                        _hover={{
                            content: `url(${imgtest})`,
                        }}
                    />
                </Box>
            </Flex>

            {/* Greeting Card */}
            <Flex
                direction="column"
                position="relative"
                right={0}
                bottom={0}
                zIndex={1}
                flex={{ base: "1", lg: "1" }}
                alignItems="center"
                justifyContent="center"
                w={{ base: "100%", lg: "50%" }}
            >
                <Box
                    position="relative"
                    borderRadius="3xl"
                    overflow="hidden"
                    w={{ base: "250px", sm: "300px", md: "350px", lg: "400px" }}
                    h={{ base: "250px", sm: "300px", md: "350px", lg: "400px" }}
                    bg={colorMode === 'light' ? 'purple.50' : 'purple.800'}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow={{ base: "lg", md: "2xl" }}
                    transition="transform 0.3s ease"
                    _hover={{ transform: 'scale(1.02)' }}
                >
                    <Text
                        fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                        fontWeight="bold"
                        color={colorMode === 'light' ? 'purple.700' : 'purple.100'}
                        textAlign="center"
                        textShadow="1px 1px 2px rgba(0, 0, 0, 0.2)"
                        px={4}
                        className="greeting-text"
                    >
                       {data.text}
                    </Text>

                    <Button
                        position="absolute"
                        bottom={{ base: 4, md: 6 }}
                        right={{ base: 4, md: 6 }}
                        borderRadius="full"
                        p={{ base: 3, md: 4 }}
                        bg={colorMode === 'light' ? 'white' : 'gray.700'}
                        boxShadow="lg"
                        minW="auto"
                        h="auto"
                        _hover={{ transform: 'scale(1.1)', bg: colorMode === 'light' ? 'gray.100' : 'gray.600' }}
                        transition="transform 0.2s ease"
                        onClick={navigateToContact}
                        aria-label="contactMe"
                    >
                        <Icon
                            as={ArrowRightIcon}
                            color={colorMode === 'light' ? 'purple.700' : 'purple.200'}
                            boxSize={{ base: 3, md: 4 }}
                        />
                    </Button>
                </Box>
            </Flex>
        </Flex>
    );
};

export default PersonalCard;

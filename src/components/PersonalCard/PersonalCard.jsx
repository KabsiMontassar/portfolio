import { Box, Flex, Image, Text, Button, Icon, useColorMode } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useNavigate } from 'react-router-dom';
import img from '../../public/image.jpg';
import imgtest from '../../public/test.JPG';

const PersonalCard = ({data}) => {
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
            minH={{ base: "100vh", sm: "120vh", md: "100vh" }}
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            px={{ base: 4, md: 6, lg: 8 }}
            py={{ base: 8, md: 0 }}
            gap={{ base: 8, md: 0 }}
        >
            {/* Profile Image */}
            <Flex
                direction="column"
                position={{ base: "relative", md: "absolute" }}
                left={{ base: 0, md: "10%", lg: "15%" }}
                top={{ base: 0, md: "50%" }}
                transform={{ base: "none", md: "translateY(-50%)" }}
                zIndex={2}
                mb={{ base: 4, md: 0 }}
                mx={{ base: "auto", md: 0 }}
                w={{ base: "100%", md: "auto" }}
                alignItems="center"
            >
                <Box
                    borderRadius="3xl"
                    overflow="hidden"
                    w={{ base: "280px", sm: "320px", md: "300px", lg: "300px", xl: "400px" }}
                    h={{ base: "360px", sm: "420px", md: "400px", lg: "400px", xl: "500px" }}
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
                position={{ base: "relative", md: "absolute" }}
                right={{ base: 0, md: "15%", lg: "20%" }}
                bottom={{ base: 0, md: "10%", lg: "5%" }}
                zIndex={1}
                mt={{ base: 2, md: 0 }}
                mx={{ base: "auto", md: 0 }}
                w={{ base: "100%", md: "auto" }}
                alignItems="center"
            >
                <Box
                    position="relative"
                    borderRadius="3xl"
                    overflow="hidden"
                    w={{ base: "280px", sm: "300px", md: "350px", lg: "400px" }}
                    h={{ base: "280px", sm: "300px", md: "350px", lg: "400px" }}
                    bg={colorMode === 'light' ? 'purple.50' : 'purple.800'}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="2xl"
                    transition="transform 0.3s ease"
                    _hover={{ transform: 'scale(1.02)' }}
                >
                    <Text
                        fontSize={"8xl"}
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

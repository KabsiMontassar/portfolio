import { Box, Flex, Image, Text, Button, Icon, useColorMode } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import img from '../../../public/image.jpg'; // Adjust the path as necessary

const PersonalCard = () => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navigateToContact = () => {
    navigate('/contact');
  }

  return (
    <Flex
        as="section"
        direction="column"
        position="relative"
        minH={{ base: "140vh", md: "110vh" }}
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        px={{ base: 4, md: 0 }}
    >
        {/* Left Card */}
        <Flex 
            direction="column" 
            position={{ base: "relative", md: "absolute" }}
            left={{ base: 0, md: "15%" }}
            top={{ base: "10%", md: "50%" }}
            transform={{ base: "none", md: "translateY(-50%)" }}
            zIndex={2}
            mb={{ base: 10, md: 0 }}
            mx={{ base: "auto", md: 0 }}
        >
            <Box
                borderRadius="3xl"
                overflow="hidden"
                w={{ base: "340px", md: "500px", lg: "600px" }}
                h={{ base: "440px", md: "600px", lg: "700px" }}
            
                boxShadow="2xl"
                transition="transform 0.3s ease"
                _hover={{ transform: 'scale(1.02)' }}
            >
                <Image
                    src={img}
                    loading="lazy"
                    
                    alt={t('profileImageAlt', 'Professional Profile Photo')}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                    borderRadius="3xl"
                    filter={colorMode === 'light' ? "brightness(0.9)" : "brightness(1.1)"}
                    _hover={{ filter: colorMode === 'light' ? "brightness(1)" : "brightness(1.2)" }}
                    transition="filter 0.3s ease"
                 

                />
            </Box>
        </Flex>

        {/* Right Card */}
        <Flex 
            direction="column" 
            position={{ base: "relative", md: "absolute" }}
            right={{ base: 0, md: "20%" }}
            bottom={{ base: "10%", md: "5%" }}
            zIndex={1}
            mx={{ base: "auto", md: 0 }}
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
                    {t('greeting', 'Hi')}
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
                    aria-label={t('contactMe', 'Contact Me')}
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

export default PersonalCard;

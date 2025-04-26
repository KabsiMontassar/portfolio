import React, { useRef, useEffect } from 'react';
import {
    Box,
    Heading,
    Text,
    Flex,
    useColorModeValue,
    Badge,
    Icon,
    useBreakpointValue
} from '@chakra-ui/react';
import { FiAward, FiCode, FiBriefcase, FiBook, FiLayers, FiBookmark } from 'react-icons/fi';
import gsap from 'gsap';
import ImagePreview from './ImagePreview';






export const AchievementCard = ({ achievement, index, isExpanded, onToggle }) => {
    const cardRef = useRef(null);
    const colorKey = achievement.label.toLowerCase();
    const isMobile = useBreakpointValue({ base: true, md: false });
    const iconMap = {
        projects: FiCode,
        hackathons: FiAward,
        experiences: FiBriefcase,
        certificates: FiBookmark,
        skills: FiLayers,
        education: FiBook
    };

    // Dynamic colors based on color mode and category
    const bgColor = useColorModeValue(
        `${achievement.color}.100`,
        `${achievement.color}.900`
    );
    const borderColor = useColorModeValue(
        `${achievement.color}.500`,
        `${achievement.color}.200`
    );
    const textColor = useColorModeValue(
        `${achievement.color}.700`,
        `${achievement.color}.200`
    );
    const mutedTextColor = useColorModeValue(
        `${achievement.color}.600`,
        `${achievement.color}.300`
    );
    const hoverBg = useColorModeValue(
        `${achievement.color}.50`,
        `${achievement.color}.800`
    );

    useEffect(() => {
        gsap.fromTo(cardRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: index * 0.15,
                ease: "back.out"
            }
        );
    }, [index]);

    return (
        <Box
            ref={cardRef}
            position="relative"
            mb={{ base: 12, md: 16 }}
            opacity={0}
            cursor="pointer"
            onClick={onToggle}
            _hover={{
                '.achievement-number': {
                    opacity: 0.15,
                    transform: 'scale(1.05)'
                }
            }}
            transition="all 0.3s ease"
        >
            <Box
                position="absolute"
                top="50%"
                w="full"
                height="1px"
                bgColor={borderColor}

            />

            <Flex
                direction={{ base: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
                align="center"
                w="100%"
                position="relative"
            >


                <Text
                    className="achievement-number"
                    fontSize={{ base: "120px", md: "240px" }}
                    fontWeight="900"
                    opacity={0.1}
                    position="absolute"
                    left={index % 2 === 0 ? { base: "10px", md: "-20px" } : "auto"}
                    right={index % 2 === 0 ? "auto" : { base: "10px", md: "-20px" }}
                    top={{ base: "-80px", md: "-200px" }}
                    color={textColor}
                    zIndex={0}
                    transition="all 0.3s ease"
                >
                    {index + 1}
                </Text>

                <Box
                    w={{ base: "full", md: isExpanded ? "full" : "600px" }}
                    h={{ base: "auto", md: isExpanded ? "400px" : "300px" }}
                    bg={bgColor}
                    p={{ base: 6, md: 8 }}
                    borderRadius="3xl"
                    boxShadow={isExpanded ? "xl" : "md"}
                    borderLeft={index % 2 === 0 ? { base: "none", md: `6px solid ${borderColor}` } : "none"}
                    borderRight={index % 2 === 0 ? "none" : { base: "none", md: `6px solid ${borderColor}` }}
                    borderTop={{ base: `6px solid ${borderColor}`, md: "none" }}
                    transform={isExpanded ? "translateY(0)" : "translateY(10px)"}
                    transition="all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                    _hover={{
                        transform: "translateY(0)",
                        boxShadow: "xl",
                        bg: hoverBg
                    }}
                    overflow="hidden"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    position="relative"
                    zIndex={1}
                >

                    <Flex direction="column" h="100%">
                        <Flex align="center" mb={4}>
                            <Box
                                w={{ base: "50px", md: "60px" }}
                                h={{ base: "50px", md: "60px" }}
                                borderRadius="xl"
                                bg={`${borderColor}20`}
                                mr={4}
                                display="flex"
                                align="center"
                                justify="center"
                                backdropFilter="blur(5px)"
                                border={`1px solid ${borderColor}30`}
                            >
                                <Icon
                                    as={iconMap[colorKey]}
                                    fontSize="2xl"
                                    color={textColor}
                                />
                            </Box>
                            <Box>
                                <Badge
                                    colorScheme={achievement.color}
                                    variant="subtle"
                                    fontSize="xs"
                                    mb={1}
                                >
                                    {achievement.label.toUpperCase()}
                                </Badge>
                                <Heading
                                    fontSize={{ base: "xl", md: "2xl" }}
                                    fontWeight="700"
                                    color={textColor}
                                >
                                    {achievement.number} {achievement.title}
                                </Heading>
                            </Box>
                        </Flex>

                        {isExpanded ? (
                            <Flex
                                flex={1}
                                gap={6}
                                direction={{ base: "column", md: "row" }}
                                mt={{ base: 4, md: 0 }}
                            >
                                <Box flex={1}>
                                    <Text
                                        color={mutedTextColor}
                                        fontSize="md"
                                        lineHeight={1.8}
                                        mb={{ base: 4, md: 0 }}
                                    >
                                        {achievement.description}
                                    </Text>
                                    {achievement.skills && (
                                        <Box mt={4}>
                                            <Text fontSize="sm" fontWeight="600" color={textColor} mb={2}>
                                                Key Skills:
                                            </Text>
                                            <Flex wrap="wrap" gap={2}>
                                                {achievement.skills.map((skill, i) => (
                                                    <Badge
                                                        key={i}
                                                        colorScheme={achievement.color}
                                                        variant="outline"
                                                        px={2}
                                                        py={1}
                                                        borderRadius="full"
                                                    >
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </Flex>
                                        </Box>
                                    )}
                                </Box>
                                <Box
                                    w={{ base: "full", md: "2px" }}
                                    h={{ base: "2px", md: "full" }}
                                    bg={`${borderColor}20`}
                                    mx={{ base: 0, md: 4 }}
                                    my={{ base: 4, md: 0 }}
                                />
                                <Box
                                    flex={2}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <ImagePreview
                                        images={achievement.images}
                                        colorKey={colorKey}
                                        borderColor={borderColor}
                                        textColor={textColor}
                                    />
                                </Box>
                            </Flex>
                        ) : (
                            <Text
                                color={mutedTextColor}
                                fontSize="md"
                                lineHeight={1.8}
                                noOfLines={3}
                            >
                                {achievement.description}
                            </Text>
                        )}
                    </Flex>
                </Box>

                {!isMobile && (
                    <Box
                        flex={1}
                        h="2px"
                        bg={`${borderColor}20`}
                        mx={8}
                    />
                )}
            </Flex>
        </Box>
    );
};


export default AchievementCard
import React from 'react'
import { useEffect } from 'react'
import { Box, Flex, Heading, Text, Icon, Link, Badge, useColorModeValue } from '@chakra-ui/react'
import { FiBriefcase, FiMapPin, FiExternalLink } from 'react-icons/fi'
import { AiOutlineCalendar } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import Lenis from '@studio-freight/lenis'

const getCardColor = (index) => {
    const colors = [
        { light: 'teal', dark: 'cyan' },
        { light: 'purple', dark: 'pink' },
        { light: 'orange', dark: 'yellow' }
    ]
    return colors[index % colors.length]
}
const ExperienceCard = ({ experience, index, nextColor }) => {
    const { t } = useTranslation()
    const cardRef = React.useRef(null)

    // Normalize data - handle both uppercase and lowercase property names
    const Description = experience?.Description || experience?.description || []
    const Technologies = experience?.Technologies || experience?.technologies || []

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            smoothWheel: true,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    const colorScheme = getCardColor(index)
    const nextColorScheme = nextColor || colorScheme
    const bgColor = useColorModeValue(`${colorScheme.light}.50`, 'gray.800')
    const borderColor = useColorModeValue(`${colorScheme.light}.200`, `${colorScheme.dark}.400`)
    const timelineDotColor = useColorModeValue(`${colorScheme.light}.500`, `${colorScheme.dark}.200`)
    const nextTimelineDotColor = useColorModeValue(
        `${nextColorScheme.light}.500`,
        `${nextColorScheme.dark}.200`
    )
    const dateColor = useColorModeValue(`${colorScheme.light}.700`, `${colorScheme.dark}.300`)
    const colorMode = useColorModeValue('light', 'dark')
    const textColor = useColorModeValue('gray.700', 'gray.200')

    return (
        <Flex
            ref={cardRef}
            position="relative"
            mb={16}
            minH="300px"
            _before={{
                content: '""',
                position: 'absolute',
                left: { base: '20px', md: '50%' },
                height: 'calc(100% + 50px)',
                width: '4px',
                background: `linear-gradient(180deg, 
          ${timelineDotColor} 0%, 
          ${nextTimelineDotColor} 100%)`,
                transform: { md: 'translateX(-50%)' },
                opacity: colorMode === 'light' ? 1 : 0.7,
                borderRadius: 'full',
                boxShadow: colorMode === 'light'
                    ? `0 0 20px ${timelineDotColor}90`
                    : `0 0 20px ${timelineDotColor}40`
            }}
            _after={{
                content: '""',
                position: 'absolute',
                left: { base: '22px', md: '50%' },
                height: '100%',
                width: '1px',
                background: 'white',
                transform: { md: 'translateX(-50%)' },
                opacity: 0.3,
            }}
        >
            {[...Array(3)].map((_, i) => (
                <Box
                    key={i}
                    position="absolute"
                    left={{ base: '18px', md: '50%' }}
                    top={`${(i + 1) * 25}%`}
                    w="8px"
                    h="8px"
                    borderRadius="full"
                    bg={timelineDotColor}
                    transform={{ md: 'translateX(-50%)' }}
                    opacity={0.3}
                    zIndex={1}
                />
            ))}



            <Box
                position="absolute"
                left={{ base: '12px', md: '50%' }}
                top="0"
                transform={{ md: 'translateX(-50%)' }}
                zIndex={2}
            >
                <Box
                    position="absolute"
                    w="32px"
                    h="32px"
                    borderRadius="full"
                    bg={`${timelineDotColor}20`}
                    animation="pulse 2s infinite"
                    sx={{
                        '@keyframes pulse': {
                            '0%': { transform: 'scale(1)', opacity: 0.5 },
                            '70%': { transform: 'scale(2)', opacity: 0 },
                            '100%': { transform: 'scale(1)', opacity: 0 }
                        }
                    }}
                />
                <Box
                    w="20px"
                    h="20px"
                    borderRadius="full"
                    bg={timelineDotColor}
                    boxShadow={`0 0 0 4px ${bgColor}, 
                     0 0 0 8px ${borderColor}30,
                     0 0 20px ${timelineDotColor}60`}
                />
            </Box>

            <Flex
                direction="column"
                ml={{ base: '40px', md: index % 2 === 0 ? '0' : '50%' }}
                mr={{ base: '0', md: index % 2 === 0 ? '50%' : '0' }}
                pr={{ base: '4', md: index % 2 === 0 ? '8' : '0' }}
                pl={{ base: '4', md: index % 2 === 0 ? '0' : '8' }}
                position="relative"
                width={{ base: 'calc(100% - 40px)', md: '50%' }}
                mt={12}
            >
                <Box
                    position="absolute"
                    transform={{
                        base: "translateY(-120%)",
                        md: index % 2 === 0 ? "translateY(-120%) translateX(0)" : "translateY(-120%) translateX(0)"
                    }}

                    bg={bgColor}
                    p={3}
                    borderRadius="xl"
                    border="1px solid"
                    borderColor={borderColor}
                    boxShadow="lg"
                    zIndex={3}
                    width="fit-content"
                >
                    <Text
                        fontSize="sm"
                        fontWeight="bold"
                        color={dateColor}
                        whiteSpace={{ base: "normal", md: "nowrap" }}
                    >
                        {new Date(experience.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} -&nbsp;
                        {new Date(experience.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </Text>
                </Box>
                <Box
                    bg={bgColor}
                    p={6}
                    borderRadius="2xl"
                    boxShadow={`lg, 0 4px 20px -8px ${timelineDotColor}`}
                    border="1px solid"
                    borderColor={borderColor}
                    transition="all 0.3s ease"
                    _hover={{
                        transform: 'translateY(-5px)',
                        boxShadow: `xl, 0 8px 30px -12px ${timelineDotColor}`
                    }}
                >
                    <Flex align="center" mb={4}>
                        <Icon as={FiBriefcase} boxSize={6} color={timelineDotColor} />
                        <Heading size="md" ml={3}>{experience.title}</Heading>
                    </Flex>

                    <Flex direction="column" gap={3}>
                        <Flex align="center">
                            <Icon as={FiMapPin} color={timelineDotColor} />
                            <Text ml={2}>{experience.company} - {experience.location}</Text>
                        </Flex>

                        <Flex align="center" gap={3}>
                            <Flex align="center">
                                <Icon
                                    as={AiOutlineCalendar}
                                    boxSize={5}
                                    color={timelineDotColor}
                                    strokeWidth={0.4}
                                />
                                <Text ml={2}>
                                    {new Date(experience.startDate).toLocaleDateString('en-US', {
                                        month: 'short',
                                        year: 'numeric'
                                    })} -
                                    {new Date(experience.endDate).toLocaleDateString('en-US', {
                                        month: 'short',
                                        year: 'numeric'
                                    })}
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>

                    <Box mt={4}>
                        <Text fontWeight="bold" mb={3} fontSize="lg">{t('keyAchievements')}:</Text>
                        {Description && Description.length > 0 ? (
                            Description.map((desc, idx) => (
                                <Text
                                    key={idx}
                                    mb={3}
                                    fontSize="md"
                                    lineHeight={1.7}
                                    color={textColor}
                                >
                                    {desc}
                                </Text>
                            ))
                        ) : (
                            <Text color={textColor}>No description available</Text>
                        )}
                    </Box>

                    <Box mt={6}>
                        <Text fontWeight="bold" mb={3} fontSize="lg">{t('technologies')}:</Text>
                        <Flex wrap="wrap" gap={2}>
                            {Technologies && Technologies.length > 0 ? (
                                Technologies.map((tech, idx) => (
                                    <Badge
                                        key={idx}
                                        colorScheme={colorScheme.light}
                                        variant="subtle"
                                        px={3}
                                        py={1}
                                        borderRadius="full"
                                    >
                                        {tech}
                                    </Badge>
                                ))
                            ) : (
                                <Badge colorScheme={colorScheme.light}>No technologies specified</Badge>
                            )}
                        </Flex>
                    </Box>

                    <Link
                        href={experience.linkToCompany}
                        isExternal
                        mt={4}
                        display="inline-flex"
                        alignItems="center"
                        color={timelineDotColor}
                        _hover={{ textDecoration: 'none', opacity: 0.8 }}
                    >
                        {t('visitCompany')} <Icon as={FiExternalLink} ml={2} />
                    </Link>
                </Box>
            </Flex>
        </Flex>
    )
}

export default ExperienceCard
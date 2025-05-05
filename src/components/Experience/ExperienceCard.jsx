import React from 'react'
import { useEffect } from 'react'
import {
    Box,
    Flex,
    Heading,
    Text,
    Icon,
    Link,
    Badge,
    useColorModeValue,
    Image,
    useBreakpointValue
} from '@chakra-ui/react'
import { FiBriefcase, FiMapPin, FiExternalLink } from 'react-icons/fi'
import { AiOutlineCalendar } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import Lenis from '@studio-freight/lenis'
import  StackedImages  from './StackedImages'

const colorSchemes = [
    { light: 'teal', dark: 'cyan' },
    { light: 'purple', dark: 'pink' },
    { light: 'orange', dark: 'yellow' }
]


const ExperienceCard = ({ experience, index, isLast }) => {
    const { t } = useTranslation()
    const cardRef = React.useRef(null)
    const isMobile = useBreakpointValue({ base: true, md: false })

    const Description = experience?.Description || experience?.description || []
    const Technologies = experience?.Technologies || experience?.technologies || []
    const images = experience?.images || []

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
        return () => lenis.destroy()
    }, [])

    const colorScheme = colorSchemes[index % colorSchemes.length]
    const bgColor = useColorModeValue(`${colorScheme.light}.50`, 'gray.800')
    const borderColor = useColorModeValue(`${colorScheme.light}.200`, `${colorScheme.dark}.400`)
    const timelineDotColor = useColorModeValue(`${colorScheme.light}.500`, `${colorScheme.dark}.200`)
    const dateColor = useColorModeValue(`${colorScheme.light}.700`, `${colorScheme.dark}.300`)
    const textColor = useColorModeValue('gray.700', 'gray.200')

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric'
        })
    }

    const TimelineDot = ({ position }) => (
        <Box
            position="absolute"
            left={{ base: '18px', md: '50%' }}
            top={position}
            w="8px"
            h="8px"
            borderRadius="full"
            bg={timelineDotColor}
            transform={{ md: 'translateX(-50%)' }}
            opacity={0.3}
            zIndex={1}
        />
    )

    return (
        <Flex
            ref={cardRef}
            position="relative"
            mb={isLast ? 8 : 20}
            minH="300px"
            _before={{
                content: '""',
                position: 'absolute',
                left: { base: '20px', md: '50%' },
                height: isLast ? '100%' : 'calc(100% + 50px)',
                width: '4px',
                background: timelineDotColor,
                transform: { md: 'translateX(-50%)' },
                opacity: useColorModeValue(1, 0.7),
                borderRadius: 'full',
                boxShadow: useColorModeValue(
                    `0 0 20px ${timelineDotColor}90`,
                    `0 0 20px ${timelineDotColor}40`
                )
            }}
        >
            {!isLast && ['25%', '50%', '75%'].map(position => (
                <TimelineDot key={`dot-${position}`} position={position} />
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

            {/* Content Card */}
            <Flex
                direction="column"
                ml={{ base: '40px', md: index % 2 === 0 ? '0' : '50%' }}
                mr={{ base: '0', md: index % 2 === 0 ? '50%' : '0' }}
                pr={{ base: '4', md: index % 2 === 0 ? '8' : '0' }}
                pl={{ base: '4', md: index % 2 === 0 ? '0' : '8' }}
                width={{ base: 'calc(100% - 40px)', md: '50%' }}
                mt={12}
            >
                {/* Date Badge */}
                <Box
                    position="absolute"
                    transform={{
                        base: "translateY(-120%)",
                        md: "translateY(-120%)"
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
                        whiteSpace="nowrap"
                    >
                        {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                    </Text>
                </Box>

                {/* Main Content */}
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

                        <Flex align="center">
                            <Icon as={AiOutlineCalendar} boxSize={5} color={timelineDotColor} />
                            <Text ml={2}>
                                {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                            </Text>
                        </Flex>
                    </Flex>

                    <Box mt={4}>
                        <Text fontWeight="bold" mb={3} fontSize="lg">{t('keyAchievements')}:</Text>
                        {Description.length > 0 ? (
                            Description.map((desc, idx) => (
                                <Text key={`desc-${idx}`} mb={3} lineHeight={1.7} color={textColor}>
                                    {desc}
                                </Text>
                            ))
                        ) : (
                            <Text color={textColor}>{t('noDescription')}</Text>
                        )}
                    </Box>

                    <Box mt={6}>
                        <Text fontWeight="bold" mb={3} fontSize="lg">{t('technologies')}:</Text>
                        <Flex wrap="wrap" gap={2}>
                            {Technologies.length > 0 ? (
                                Technologies.map((tech, idx) => (
                                    <Badge
                                        key={`tech-${idx}`}
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
                                <Badge colorScheme={colorScheme.light}>{t('noTechnologies')}</Badge>
                            )}
                        </Flex>
                    </Box>

                    {experience.linkToCompany && (
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
                    )}
                </Box>
            </Flex>

            {!isMobile && (
                <Box
                    width="50%"
                    position="absolute"
                    left={index % 2 === 0 ? '50%' : '0'}
                    top="50%"
                    transform="translateY(-50%)"
                    alignItems="center"
                    justifyContent="center"
                    pr={index % 2 === 0 ? 8 : 0}
                    pl={index % 2 === 0 ? 0 : 8}
                    zIndex={1}
                >
                    <StackedImages
                        colorScheme={colorScheme}
                        images={images}
                        isLeftSide={index % 2 !== 0}
                    />
                </Box>
            )}
        </Flex>
    )
}

export default ExperienceCard
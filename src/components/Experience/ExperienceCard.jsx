import React from 'react'
import {
    Box,
    Flex,
    Heading,
    Text,
    Icon,
    Link,
    Badge,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react'
import { FiBriefcase, FiMapPin, FiExternalLink } from 'react-icons/fi'

const ExperienceCard = ({ experience, isLast, variant = 'experience' }) => {
    
    const bgColor = useColorModeValue('white', 'gray.800')
    const borderColor = useColorModeValue('purple.100', 'purple.700')
    const accentColor = useColorModeValue(
        variant === 'experience' ? 'purple.500' : 'blue.500',
        variant === 'experience' ? 'purple.300' : 'blue.300'
    )
    const textColor = useColorModeValue('gray.700', 'gray.200')

    const Description = experience?.Description || experience?.description || []
    const Technologies = experience?.Technologies || experience?.technologies || []
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric'
        })
    }

    return (
        <Flex 
            position="relative" 
            mb={12}
            alignItems="stretch"
            pl={{ base: 8, md: 12 }}
            _before={{
                content: '""',
                position: 'absolute',
                left: { base: '8px', md: '16px' },
                top: 0,
                bottom: isLast ? '0' : '-40px',
                width: '2px',
                bg: variant === 'experience' ? 'purple.100' : 'blue.100',
                opacity: 0.5,
            }}
        >
            {/* Timeline Dot */}
            <Box
                position="absolute"
                left={{ base: '4px', md: '12px' }}
                top="24px"
                width={{ base: '8px', md: '10px' }}
                height={{ base: '8px', md: '10px' }}
                borderRadius="full"
                bg={accentColor}
                zIndex={2}
                _before={{
                    content: '""',
                    position: 'absolute',
                    inset: '-4px',
                    borderRadius: 'full',
                    border: '2px solid',
                    borderColor: accentColor,
                    opacity: 0.4,
                }}
            />

            {/* Content */}
            <VStack flex={1} align="stretch" spacing={{ base: 2, md: 4 }}>
                {/* Date Badge */}
                <Badge
                    width="fit-content"
                    px={3}
                    py={1}
                    colorScheme={variant === 'experience' ? 'purple' : 'blue'}
                    borderRadius="full"
                    fontSize={{ base: 'xs', md: 'sm' }}
                    fontWeight="medium"
                >
                    {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                </Badge>

                {/* Card */}
                <Box
                    bg={bgColor}
                    p={{ base: 4, md: 6 }}
                    borderRadius="xl"
                    boxShadow="lg"
                    border="1px solid"
                    borderColor={borderColor}
                    transition="all 0.3s"
                    _hover={{
                        transform: { base: 'none', md: 'translateY(-4px)' },
                        boxShadow: 'xl',
                    }}
                >
                    <Flex justify="space-between" align="start" mb={4}>
                        <Heading size="md" color={accentColor}>{experience.title}</Heading>
                        {experience.linkToCompany && (
                            <Link href={experience.linkToCompany} isExternal>
                                <Icon as={FiExternalLink} />
                            </Link>
                        )}
                    </Flex>

                    <Flex gap={4} mb={6} color="gray.500" fontSize="sm">
                        <Flex align="center">
                            <Icon as={FiBriefcase} mr={2} />
                            <Text>{experience.company}</Text>
                        </Flex>
                        <Flex align="center">
                            <Icon as={FiMapPin} mr={2} />
                            <Text>{experience.location}</Text>
                        </Flex>
                    </Flex>

                    <Box mb={6}>
                        {Description.map((desc, idx) => (
                            <Text 
                                key={idx} 
                                mb={2} 
                                color={textColor}
                                position="relative"
                                pl={4}
                                _before={{
                                    content: '"•"',
                                    position: 'absolute',
                                    left: 0,
                                    color: accentColor,
                                }}
                            >
                                {desc}
                            </Text>
                        ))}
                    </Box>

                    <Flex wrap="wrap" gap={2}>
                        {Technologies.map((tech, idx) => (
                            <Badge
                                key={idx}
                                colorScheme="purple"
                                variant="subtle"
                                px={3}
                                py={1}
                                borderRadius="full"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </Flex>
                </Box>
            </VStack>
        </Flex>
    )
}

export default ExperienceCard
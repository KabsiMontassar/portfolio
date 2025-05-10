import { useRef } from 'react'
import {
    Box,
    Heading,
    Text,
    VStack,
    HStack,
    Button,
    Flex,
    List,
    ListItem,
    ListIcon,
    chakra,
    SimpleGrid,
    Icon,
    Tag,
    TagLabel,
    Divider,
    useColorModeValue,
    Image
} from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiCheckCircle, FiCode, FiCpu } from 'react-icons/fi'

const MotionBox = chakra(motion.div)

const ProjectCard = ({ project, index, allTextUsed }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const cardBg = useColorModeValue('white', 'gray.800')
    const borderColor = useColorModeValue('gray.200', 'gray.700')
    const textColor = useColorModeValue('gray.700', 'gray.300')
    const accentColor = useColorModeValue('purple.500', 'purple.300')

    return (
        <MotionBox
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            mb={16}
        >
            <Box
                bg={cardBg}
                borderRadius="2xl"
                boxShadow="xl"
                border="1px solid"
                borderColor={borderColor}
                overflow="hidden"
            >
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={0}>
                    <Box
                        bgGradient={`linear(to-br, ${useColorModeValue('purple.50', 'purple.900')}, ${useColorModeValue('blue.50', 'blue.900')})`}
                        p={8}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        minH="400px"
                        position="relative"
                    >
                        <Box
                            position="absolute"
                            top={0}
                            left={0}
                            right={0}
                            bottom={0}
                            bgImage="radial-gradient(circle at 50% 50%, rgba(0,0,0,0.1) 1px, transparent 1px)"
                            backgroundSize="20px 20px"
                            opacity={0.3}
                        />
                        <Box
                            w="full"
                            h="full"
                            bg="white"
                            borderRadius="lg"
                            boxShadow="lg"
                            overflow="hidden"
                            position="relative"
                            border="1px solid"
                            borderColor={borderColor}
                        >
                            <Box
                                w="full"
                                h="full"
                                position="relative"
                                sx={{
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        paddingTop: '66.67%' // 3:2 aspect ratio
                                    }
                                }}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    position="absolute"
                                    top="0"
                                    left="0"
                                    w="full"
                                    h="full"
                                    objectFit="contain"
                                    p={4}
                                />
                            </Box>
                        </Box>
                    </Box>

                    <Box p={8}>
                        <Flex justify="space-between" align="center" mb={6}>
                            <Heading size="xl" fontWeight="800" color={textColor}>
                                {project.title}
                            </Heading>
                            <HStack spacing={2}>
                                <Button
                                    leftIcon={<FiGithub />}
                                    as="a"
                                    href={project.link}
                                    target="_blank"
                                    variant="ghost"
                                    size="sm"
                                    color={textColor}
                                    _hover={{ color: accentColor, transform: 'translateY(-2px)' }}
                                >
                                    Github
                                </Button>
                            </HStack>
                        </Flex>

                        <Text color={textColor} mb={6}>
                            {project.description}
                        </Text>

                        <Divider my={6} borderColor={borderColor} />

                        <VStack align="stretch" spacing={6}>
                            <Box>
                                <Heading size="md" mb={4} color={textColor} display="flex" alignItems="center">
                                    <Icon as={FiCode} mr={2} color={accentColor} />
                                    {allTextUsed.KeyFeatures}
                                </Heading>
                                <List spacing={3}>
                                    {project.details.map((detail, idx) => (
                                        <ListItem
                                            key={idx}
                                            display="flex"
                                            alignItems="flex-start"
                                            color={textColor}
                                        >
                                            <ListIcon as={FiCheckCircle} color={accentColor} mt={1} />
                                            <Text>{detail}</Text>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>

                            <Box>
                                <Heading size="md" mb={4} color={textColor} display="flex" alignItems="center">
                                    <Icon as={FiCpu} mr={2} color={accentColor} />
                                    {allTextUsed.Technology}
                                </Heading>
                                <Flex wrap="wrap" gap={3}>
                                    {project.technologies.map((tech, idx) => (
                                        <Tag
                                            key={idx}
                                            size="lg"
                                            borderRadius="full"
                                            variant="subtle"
                                            colorScheme="purple"
                                            px={4}
                                            py={2}
                                        >
                                            <TagLabel>{tech}</TagLabel>
                                        </Tag>
                                    ))}
                                </Flex>
                            </Box>
                        </VStack>
                    </Box>
                </SimpleGrid>
            </Box>
        </MotionBox>
    )
}

export default ProjectCard
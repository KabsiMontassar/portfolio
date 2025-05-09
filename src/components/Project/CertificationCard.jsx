import { useRef } from 'react'
import {
    Box,
    Heading,
    Text,
    VStack,
    Button,
    Flex,
    chakra,
    Icon,
    useColorModeValue,
    usePrefersReducedMotion
} from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { keyframes } from '@emotion/react'
import { FiExternalLink } from 'react-icons/fi'


// Motion components
const MotionBox = chakra(motion.div)


// Floating animation
const floatingAnimation = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(3deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`


// Certification card component
const CertificationCard = ({ cert, index,alltextsused }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const prefersReducedMotion = usePrefersReducedMotion()

    const cardBg = useColorModeValue('white', 'gray.800')
    const borderColor = useColorModeValue('gray.200', 'gray.700')
    const textColor = useColorModeValue('gray.700', 'gray.300')
    const floating = prefersReducedMotion ? undefined : `${floatingAnimation} 8s ease-in-out infinite`



    return (
        <MotionBox
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Box
                bg={cardBg}
                p={6}
                borderRadius="2xl"
                boxShadow="xl"
                border="1px solid"
                borderColor={borderColor}
                position="relative"
                overflow="hidden"
                animation={floating}
                _hover={{
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease'
                }}
            >
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    height="4px"
                    bg={cert.color}
                />
                <VStack spacing={4} align="stretch" pt={2}>
                    <Flex align="center">
                        <Box
                            p={2}
                            borderRadius="lg"
                            bg={`${cert.color}20`}
                            color={cert.color}
                            mr={4}
                        >
                            <Icon as={cert.icon} boxSize={6} />
                        </Box>
                        <VStack align="start" spacing={0}>
                            <Heading size="md" color={textColor}>
                                {cert.title}
                            </Heading>
                            <Text fontSize="sm" color={textColor} opacity={0.8}>
                                {cert.issuer} • {cert.year}
                            </Text>
                        </VStack>
                    </Flex>
                    <Text color={textColor} fontSize="sm">
                        {cert.description}
                    </Text>
                    <Button
                        size="sm"
                        variant="outline"
                        colorScheme="purple"
                        mt={2}
                        rightIcon={<FiExternalLink />}
                        alignSelf="flex-start"
                        as="a"
                        href={cert.link}
                        target="_blank"
                    >
                        {alltextsused.text1}
                    </Button>
                </VStack>
            </Box>
        </MotionBox>
    )
}


export default CertificationCard
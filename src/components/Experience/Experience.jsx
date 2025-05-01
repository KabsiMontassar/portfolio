import React from 'react'
import { Box, Heading, useColorModeValue, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import ExperienceCard from './ExperienceCard'

const ExperienceElement = () => {
  const { t } = useTranslation()
  
  const experienceData = React.useMemo(() => {
    const experienceKeys = ['fidness', 'esprit', 'moodandfood']
    const expDataExists = t('experience_data', { returnObjects: true }) !== 'experience_data'
    
    return expDataExists ? experienceKeys.map(key => {
      const expData = t(`experience_data.${key}`, { returnObjects: true })
      return {
        ...expData,
        Description: expData.description || [],
        Technologies: expData.technologies || []
      }
    }) : []
  }, [t]) 

  const bgGradient = useColorModeValue(
    'linear(to-r, blue.600, purple.600)',
    'linear(to-r, blue.200, purple.200)'
  )

  return (
    <Box
      pt="120px"
      px={{ base: 4, md: 8 }}
      maxW="1400px"
      mx="auto"
      position="relative"
      overflow="hidden"
    >
      {/* Background Blobs */}
      <Box
        position="absolute"
        top="15%"
        right="10%"
        w={{ base: '200px', md: '400px' }}
        h={{ base: '200px', md: '400px' }}
        borderRadius="full"
        bg={useColorModeValue("blue.100", "blue.900")}
        filter="blur(80px)"
        opacity={0.3}
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="10%"
        left="5%"
        w={{ base: '300px', md: '500px' }}
        h={{ base: '300px', md: '500px' }}
        borderRadius="full"
        bg={useColorModeValue("purple.100", "purple.900")}
        filter="blur(100px)"
        opacity={0.2}
        zIndex={0}
      />
      <Box
        position="absolute"
        top="40%"
        left="25%"
        w={{ base: '150px', md: '300px' }}
        h={{ base: '150px', md: '300px' }}
        borderRadius="full"
        bg={useColorModeValue("pink.100", "pink.900")}
        filter="blur(70px)"
        opacity={0.2}
        zIndex={0}
      />

      {/* Title */}
      <Heading
        textAlign="center"
        mb={16}
        fontSize={{ base: "3xl", md: "5xl" }}
        bgGradient={bgGradient}
        bgClip="text"
        px={4}
      >
        {t('experienceTitle')}
      </Heading>

      {/* Experience Cards */}
      <Box position="relative" zIndex={1}>
        {experienceData.length > 0 ? (
          experienceData.map((exp, index) => (
            <ExperienceCard 
              key={`exp-${index}`}
              experience={exp} 
              index={index}
              isLast={index === experienceData.length - 1}
            />
          ))
        ) : (
          <Box textAlign="center" py={8}>
            <Text color="gray.500">{t('noExperienceData')}</Text>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default ExperienceElement
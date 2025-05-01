import React from 'react'
import { Box, Heading, useColorModeValue, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import ExperienceCard from './ExperienceCard'
import originalData from './data'

const getCardColor = (index) => {
  const colors = [
    { light: 'teal', dark: 'cyan' },
    { light: 'purple', dark: 'pink' },
    { light: 'orange', dark: 'yellow' }
  ]
  return colors[index % colors.length]
}

const ExperienceElement = () => {
  const { t } = useTranslation()
  
  const experienceData = React.useMemo(() => {
    const experienceKeys = ['fidness', 'esprit', 'moodandfood']
    const expDataExists = t('experience_data', { returnObjects: true }) !== 'experience_data'
    
    if (expDataExists) {
      return experienceKeys.map(key => {
        const expData = t(`experience_data.${key}`, { returnObjects: true })
        return {
          ...expData,
          Description: expData.description || [],
          Technologies: expData.technologies || []
        }
      })
    } else {
      console.warn('Translation keys for experience_data not found, using original data')
      return originalData
    }
  }, [t]) 



  return (
    <Box
      pt="120px"
      px={4}
      maxW="1400px"
      mx="auto"
      position="relative"
      overflow="hidden"
      css={{
        scrollBehavior: 'smooth',
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: useColorModeValue('blue.200', 'blue.700'),
          borderRadius: '24px',
        },
      }}
    >
      <Box
        position="absolute"
        top="15%"
        right="10%"
        w="400px"
        h="400px"
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
        w="500px"
        h="500px"
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
        w="300px"
        h="300px"
        borderRadius="full"
        bg={useColorModeValue("pink.100", "pink.900")}
        filter="blur(70px)"
        opacity={0.2}
        zIndex={0}
      />

      <Heading
        textAlign="center"
        mb={16}
        fontSize={{ base: "4xl", md: "5xl" }}
        bgGradient={useColorModeValue(
          'linear(to-r, blue.600, purple.600)',
          'linear(to-r, blue.200, purple.200)'
        )}
        bgClip="text"
      >
        {t('experienceTitle')}
      </Heading>

      <Box position="relative" zIndex={1}>
        {Array.isArray(experienceData) && experienceData.length > 0 ? (
          experienceData.map((exp, index) => (
            <ExperienceCard 
              key={index} 
              experience={exp} 
              index={index}
              nextColor={index < experienceData.length - 1 ? getCardColor(index + 1) : null}
            />
          ))
        ) : (
          <Box textAlign="center" py={8}>
            <Text color="gray.500">No experience data available</Text>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default ExperienceElement
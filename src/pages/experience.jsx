import React from 'react'
import { Box, Divider, Heading, useColorModeValue } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import ExperienceElement from '../components/Experience/Experience'
import EventsTimeline from '../components/Experience/EventsTimeline'

const Experience = () => {
  const { t } = useTranslation()
  const dividerColor = useColorModeValue('gray.200', 'gray.700')
  const bgGradient = useColorModeValue(
    'linear(to-r, orange.600, red.600)',
    'linear(to-r, orange.200, red.200)'
  )

  return (
    <Box pb={20}>
      <ExperienceElement />
          {/* Grid Pattern */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bgImage={useColorModeValue(
                "linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)",
                "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)"
              )}
              backgroundSize="40px 40px"
              zIndex={0}
            />
      
      <Divider 
        my={20} 
        borderWidth="2px" 
        width="80%" 
        mx="auto" 
        borderColor={dividerColor}
        opacity={0.6}
      />

      <Box maxW="1400px" mx="auto" px={{ base: 4, md: 8 }}>
        <Heading
          textAlign="center"
          mb={16}
          fontSize={{ base: "3xl", md: "5xl" }}
          bgGradient={bgGradient}
          bgClip="text"
          px={4}
        >
          {t('eventsAndHackathons')}
        </Heading>
        <EventsTimeline />
      </Box>
    </Box>
  )
}

export default Experience
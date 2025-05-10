import React from 'react'
import { Box, VStack, useColorModeValue } from '@chakra-ui/react'
import ExperienceElement from '../components/Experience/Experience'
import { experienceData, data } from '../data/experiencedata.js'

const Experience = () => {
  // Separate experiences and events
  const workExperience = experienceData
  const eventsAndHackathons = data

  return (
    <Box pb={20}>
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

      <VStack spacing={16} position="relative" zIndex={1}>
        <ExperienceElement
          experienceData={workExperience}
          eventsData={eventsAndHackathons}
        />
      </VStack>
    </Box>
  )
}

export default Experience
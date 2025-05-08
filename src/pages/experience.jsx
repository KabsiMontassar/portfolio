import React from 'react'
import { Box, Divider, Heading, useColorModeValue, VStack } from '@chakra-ui/react'
import ExperienceElement from '../components/Experience/Experience'
import EventsTimeline from '../components/Experience/EventsTimeline'
import { experienceData, data } from '../data/experiencedata.js'

const Experience = () => {
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
        <ExperienceElement experienceData={experienceData} />
        <Box w="full" maxW="1400px" mx="auto" px={{ base: 4, md: 8 }}>
          <Heading
            textAlign="center"
            mb={{ base: 8, md: 16 }}
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
            bgGradient="linear(to-r, purple.500, blue.500, pink.500)"
            bgClip="text"
            px={4}
          >
            Events And Hackathons
          </Heading>
          <EventsTimeline data={data} />
        </Box>
      </VStack>
    </Box>
  )
}

export default Experience
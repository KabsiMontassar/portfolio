import React from 'react'
import { Box, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue } from '@chakra-ui/react'
import ExperienceCard from './ExperienceCard'

const ExperienceElement = ({ experienceData = [], eventsData = [] }) => {
  return (
    <Box
      pt="120px"
      px={{ base: 2, md: 8, lg: 16 }}
      maxW="1200px"
      
      mx="auto"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="15%"
        right="10%"
        w={{ base: '200px', md: '400px' }}
        h={{ base: '200px', md: '400px' }}
        borderRadius="full"
        bg={useColorModeValue("blue.100", "blue.800")}
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
        bg={useColorModeValue("pink.100", "pink.800")}
        filter="blur(70px)"
        opacity={0.2}
        zIndex={0}
      />

      <Heading
        textAlign="center"
        mb={10}
        fontSize={{ base: "3xl", md: "5xl" }}
        bgGradient="linear(to-r, purple.500, blue.500)"
        bgClip="text"
        px={4}
      >
        Professional Journey
      </Heading>

      <Tabs 
        isFitted 
        variant="soft-rounded" 
        colorScheme="purple"
        mx={{ base: -2, md: 0 }}
        isLazy
      >
        <TabList mb={8}>
          <Tab 
            mx={1}
            fontSize={{ base: 'sm', md: 'md' }}
            _selected={{ 
              bg: useColorModeValue('purple.100', 'purple.800'),
              color: useColorModeValue('purple.700', 'purple.200')
            }}
          >
            Experience
          </Tab>
          <Tab 
            mx={1}
            fontSize={{ base: 'sm', md: 'md' }}
            _selected={{ 
              bg: useColorModeValue('purple.100', 'purple.800'),
              color: useColorModeValue('purple.700', 'purple.200')
            }}
          >
            Hackathons & Events
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel px={0}>
            <Box position="relative" zIndex={1}>
              {experienceData?.length > 0 ? (
                experienceData.map((exp, index) => (
                  <ExperienceCard
                    key={`exp-${index}`}
                    experience={exp}
                    index={index}
                    isLast={index === experienceData.length - 1}
                    variant="experience"
                  />
                ))
              ) : (
                <Box textAlign="center" py={8} color="gray.500">
                  No experience data available
                </Box>
              )}
            </Box>
          </TabPanel>
          <TabPanel px={0}>
            <Box position="relative" zIndex={1}>
              {eventsData?.length > 0 ? (
                eventsData.map((event, index) => (
                  <ExperienceCard
                    key={`event-${index}`}
                    experience={event}
                    index={index}
                    isLast={index === eventsData.length - 1}
                    variant="event"
                  />
                ))
              ) : (
                <Box textAlign="center" py={8} color="gray.500">
                  No events data available
                </Box>
              )}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default ExperienceElement
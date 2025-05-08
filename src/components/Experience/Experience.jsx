import React from 'react'
import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import ExperienceCard from './ExperienceCard'

const ExperienceElement = ({experienceData}) => {



  return (
    <Box
      pt="120px"
      px={{ base: 4, md: 8 }}
      maxW="1400px"
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
        mb={16}
        fontSize={{ base: "3xl", md: "5xl" }}
        bgGradient="linear(to-r, purple.500, blue.500)"
        bgClip="text"
        px={4}
      >
        My experiences
      </Heading>

      <Box position="relative" zIndex={1}>

        {experienceData.map((exp, index) => (
          <ExperienceCard
            key={`exp-${index}`}
            experience={exp}
            index={index}
            isLast={index === experienceData.length - 1}
          />
        ))}

      </Box>
    </Box>
  )
}

export default ExperienceElement
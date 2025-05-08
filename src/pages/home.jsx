import React from 'react'
import { Box } from '@chakra-ui/react'
import Page from '../components/CursorEffectComp/page'
import Hero from '../components/Hero/Hero'
import Achievements from '../components/Achievements/Achievements'
import PersonalCard from '../components/PersonalCard/PersonalCard'

const Home = () => {
  return (
    <Box position="relative" width="100%" overflow="hidden">
      <Box
        as="section"
        height={{ base: "90vh", md: "100vh" }}
        position="relative"
      >
        <Page />
      </Box>

      <Box
        as="section"
        height={{ base: "auto", md: "80vh" }}
        minHeight={{ base: "70vh", md: "80vh" }}
        position="relative"
        py={{ base: 8, md: 0 }}
      >
        <Hero />
      </Box>

      <Box
        as="section"
        py={{ base: 8, md: 12, lg: 16 }}

      >
        <Achievements />
      </Box>

      <Box
        as="section"
        py={{ base: 8, md: 12, lg: 16 }}

      >
        <PersonalCard />
      </Box>
    </Box>
  )
}

export default Home
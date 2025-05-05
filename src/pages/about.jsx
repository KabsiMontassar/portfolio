import {  Box, Container, usePrefersReducedMotion, useColorModeValue } from '@chakra-ui/react';
import alltexts from '../data/aboutdata.js';
import HeroSection from '../components/about/HeroSection.jsx';
import Technical from '../components/about/Technical.jsx';
import Beyond from '../components/about/Beyond.jsx';
const About = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <>
      <Box
        pt="100px"
        position="relative"
        overflow="hidden"
        minH="100vh"
      >
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
          opacity={0.5}
        />
        {!prefersReducedMotion && (
          <>
            <Box
              position="absolute"
              top="10%"
              left="5%"
              w="300px"
              h="300px"
              borderRadius="full"
              bgGradient="linear(to-br, purple.400, blue.400)"
              filter="blur(80px)"
              opacity={0.15}
            />
            <Box
              position="absolute"
              bottom="20%"
              right="10%"
              w="400px"
              h="400px"
              borderRadius="full"
              bgGradient="linear(to-br, pink.400, purple.400)"
              filter="blur(100px)"
              opacity={0.15}
            />
          </>
        )}
        <Container maxW="container.xl" position="relative"  >
          <HeroSection alltexts={alltexts} />
          <Technical alltexts={alltexts} />
          <Beyond alltexts={alltexts} />
        </Container>
      </Box>
    </>
  );
};

export default About;
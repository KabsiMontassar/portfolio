import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import AchievementCard from './AchievementCard';
import { achievements } from './data';

const Achievements = () => {
  const { t } = useTranslation();
  const [expandedCards, setExpandedCards] = useState([]);

  const handleToggleExpand = (index) => {
    setExpandedCards(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const headingGradient = useColorModeValue(
    'linear(to-r, gray.700, gray.500)',
    'linear(to-r, gray.300, gray.100)'
  );

  return (
    <Box userSelect={"none"}   overflow="hidden" position="relative">

      <Box
        position="absolute"
        top="15%"
        right="10%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg={useColorModeValue("orange.200", "pink.200")}
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
        bg={useColorModeValue("red.300", "cyan.200")}

        filter="blur(100px)"
        opacity={0.2}
        zIndex={0}
      />
       <Box
        position="absolute"
        bottom="50%"
        left="20%"
        w="500px"
        h="500px"
        borderRadius="full"
        bg={useColorModeValue("pink.300", "green.200")}
        filter="blur(100px)"
        opacity={0.2}
        zIndex={0}
      />

      <Box
        px={{ base: 6, md: 20 }}
        mb={{ base: 16, md: 28 }}
        position="relative"
        zIndex={1}
        textAlign="center"
        maxW="1100px"
        mx="auto"
        pb={{ base: 4, md: 8 }}
      >
        <Heading
          fontSize={{ base: "4xl", md: "7xl" }}
          bgGradient={headingGradient}
          bgClip="text"
          letterSpacing="tight"
          lineHeight={1.1}
        >
          {t('getToKnowMe')}
        </Heading>
        <Text
          mt={4}
          fontSize={{ base: "md", md: "lg" }}
          color={useColorModeValue("gray.600", "gray.300")}
      
        >
          Explore my journey through projects, experiences, and achievements that shaped my career.
        </Text>
      </Box>

      <Box
        maxW="1400px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        position="relative"
        zIndex={1}
      >
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            achievement={achievement}
            index={index}
            expandedCards={expandedCards}
            onToggleExpand={handleToggleExpand}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Achievements;
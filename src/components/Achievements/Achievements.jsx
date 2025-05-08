import React, { useState, useMemo } from 'react';
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import AchievementCard from './AchievementCard';

const Achievements = () => {
  const { t } = useTranslation();
  const [expandedCards, setExpandedCards] = useState([]);

  const achievements = useMemo(() => {
    const categories = ['experience', 'education', 'projects', 'hackathons', 'certificates', 'skills'];
    return categories.map(category => ({
      ...t(`achievements.${category}`, { returnObjects: true }),
      color: {
        projects: 'pink',
        hackathons: 'teal',
        experience: 'blue',
        certificates: 'orange',
        skills: 'purple',
        education: 'red'
      }[category]
    }));
  }, [t]);

  const handleToggleExpand = (index) => {
    setExpandedCards(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const headingGradient = 'linear(to-r, purple.500, blue.500)';

  return (
    <Box userSelect={"none"} overflow="hidden" position="relative">

      <Box
        position="absolute"
        top={{ base: "5%", md: "15%" }}
        right={{ base: "5%", md: "10%" }}
        w={{ base: "200px", md: "400px" }}
        h={{ base: "200px", md: "400px" }}
        borderRadius="full"
        bg={useColorModeValue("purple.100", "purple.900")}
        filter={{ base: "blur(60px)", md: "blur(80px)" }}
        opacity={0.3}
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom={{ base: "5%", md: "10%" }}
        left={{ base: "2%", md: "5%" }}
        w={{ base: "250px", md: "500px" }}
        h={{ base: "250px", md: "500px" }}
        borderRadius="full"
        bg={useColorModeValue("blue.100", "blue.900")}
        filter={{ base: "blur(70px)", md: "blur(100px)" }}
        opacity={0.2}
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom={{ base: "40%", md: "50%" }}
        left={{ base: "10%", md: "20%" }}
        w={{ base: "250px", md: "500px" }}
        h={{ base: "250px", md: "500px" }}
        borderRadius="full"
        bg={useColorModeValue("pink.100", "pink.900")}
        filter={{ base: "blur(70px)", md: "blur(100px)" }}
        opacity={0.2}
        zIndex={0}
      />

      <Box
        px={{ base: 4, sm: 6, md: 12, lg: 20 }}
        mb={{ base: 10, sm: 12, md: 16, lg: 28 }}
        position="relative"
        zIndex={1}
        textAlign="center"
        maxW="1100px"
        mx="auto"
        pb={{ base: 2, sm: 4, md: 8 }}
      >
        <Heading
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "7xl" }}
          bgGradient={headingGradient}
          bgClip="text"
          letterSpacing="tight"
          lineHeight={1.1}
        >
          {t('getToKnowMe')}
        </Heading>
        <Text
          mt={{ base: 2, md: 4 }}
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          color={useColorModeValue("gray.600", "gray.300")}
        >
          {t('exploreJourney')}
        </Text>
      </Box>

      <Box
        maxW="1400px"
        mx="auto"
        px={{ base: 2, sm: 4, md: 6, lg: 8 }}
        position="relative"
        zIndex={1}
        gap={{ base: 4, sm: 6, md: 8 }}
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
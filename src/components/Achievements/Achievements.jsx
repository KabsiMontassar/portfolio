import React, { useRef, useState, useEffect } from 'react';
import { Box, Heading, Text, Flex, useColorMode } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import gsap from 'gsap';

const softColors = {
  projects: {
    bg: '#FFE2E6',
    border: '#FF6B81',
    text: '#FF4757'
  },
  hackathons: {
    bg: '#E5F9E0',
    border: '#5AC18E',
    text: '#009432'
  },
  experiences: {
    bg: '#E6F3FF',
    border: '#5AA6FF',
    text: '#0984E3'
  },
  certificates: {
    bg: '#FFF3E0',
    border: '#FFB74D',
    text: '#FF9F43'
  },
  skills: {
    bg: '#F3E5F5',
    border: '#BA68C8',
    text: '#9B59B6'
  },
  education: {
    bg: '#FFEFE5',
    border: '#FF8A65',
    text: '#E55039'
  }
};

const AchievementCard = ({ achievement, index, isExpanded, onToggle }) => {
  const cardRef = useRef(null);
  const colorKey = achievement.label.toLowerCase();

  useEffect(() => {
    gsap.fromTo(cardRef.current, 
      { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1,
        delay: index * 0.2,
        ease: "power3.out"
      }
    );
  }, []);

  return (
    <Box
      ref={cardRef}
      position="relative"
      mb={20}
      opacity={0}
      
      cursor="pointer"
      onClick={onToggle}
    >
      <Flex
        direction={index % 2 === 0 ? "row" : "row-reverse"}
        align="center"
        w="100%"
        position="relative"
      >
        <Text
          fontSize="240px"
          fontWeight="900"
          opacity={0.1}
          position="absolute"
          left={index % 2 === 0 ? "-20px" : "auto"}
          right={index % 2 === 0 ? "auto" : "-20px"}
          top="-200px"
          color={softColors[colorKey].text}
        >
          {index + 1}
        </Text>
        
        <Box
          w={isExpanded ? "600px" : "400px"}
          h="300px"
          bg={softColors[colorKey].bg}
          p={8}
          borderRadius="3xl"
          boxShadow={isExpanded ? "2xl" : "xl"}
          borderLeft={index % 2 === 0 ? `8px solid ${softColors[colorKey].border}` : "none"}
          borderRight={index % 2 === 0 ? "none" : `8px solid ${softColors[colorKey].border}`}
          transform={isExpanded ? "translateY(0)" : "translateY(20px)"}
          transition="all 0.3s ease-in-out"
          _hover={{ transform: "translateY(0)", boxShadow: "2xl" }}
          overflow="hidden"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Flex align="center" mb={4}>
            <Box
              w="60px"
              h="60px"
              borderRadius="xl"
              bg={`${softColors[colorKey].border}22`}
              mr={4}
              display="flex"
              align="center"
              justify="center"
            >
              <Text fontSize="2xl" fontWeight="bold" color={softColors[colorKey].text}>
                {achievement.number}
              </Text>
            </Box>
            <Text fontSize="2xl" fontWeight="700" color={softColors[colorKey].text}>
              {achievement.label}
            </Text>
          </Flex>
          
          <Text color={softColors[colorKey].text} opacity={0.8} fontSize="md" lineHeight={1.8}>
            {achievement.description}
          </Text>
        </Box>

        <Box 
          flex={1} 
          h="2px" 
          bg={`${softColors[colorKey].border}33`}
          mx={8}
        />
      </Flex>
    </Box>
  );
};

const Achievements = () => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const achievements = [
    { 
      number: "15+", 
      label: 'projects',
      description: "Built responsive web applications using React, Node.js, and modern frameworks. Specialized in creating interactive dashboards and e-commerce solutions."
    },
    { 
      number: "5+", 
      label: 'hackathons',
      description: "Participated in competitive coding events, winning awards for innovative solutions in AI and web development categories."
    },
    { 
      number: "3+", 
      label: 'experiences',
      description: "Professional work experience at tech companies, contributing to large-scale projects and collaborating with cross-functional teams."
    },
    { 
      number: "10+", 
      label: 'certificates',
      description: "Completed certifications in web development, cloud computing, and UX design from recognized platforms like Coursera and Udemy."
    },
    { 
      number: "20+", 
      label: 'skills',
      description: "Mastered technologies including JavaScript, Python, React, Node.js, and cloud platforms like AWS and Firebase."
    },
    { 
      number: "2+", 
      label: 'education',
      description: "Advanced degrees in Computer Science with focus on human-computer interaction and distributed systems."
    }
  ];

  return (
    <Box minHeight="100vh" py={20} overflow="hidden">
      <Box px={20} mb={28}>
        <Heading
          fontSize="7xl"
          bgGradient="linear(to-r, gray.700, gray.500)"
          bgClip="text"
          letterSpacing="tight"
        >
          {t('getToKnowMe')}
        </Heading>
      </Box>
      <Box maxW="1400px" mx="auto" px={8}>
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            achievement={achievement}
            index={index}
            isExpanded={expandedIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Achievements;
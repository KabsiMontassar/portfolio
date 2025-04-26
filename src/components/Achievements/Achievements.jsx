import React, { useRef } from 'react';
import { Box, Heading, useColorMode, Text } from '@chakra-ui/react';
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

const AchievementCard = ({ achievement, index }) => {
  const cardRef = useRef(null);
  const svgRef = useRef(null);
  const contentRef = useRef(null);
  const colorKey = achievement.label.toLowerCase();

  const expandCard = () => {
    gsap.to(cardRef.current, {
      x: '-50%',
      left: '50%',
      width: "95vw",
      height: "300px",
      duration: 0.8,
      ease: "power4.out",
    });

    gsap.to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: 0.3
    });

    gsap.to(svgRef.current, {
      scale: 2,
      x: -100,
      duration: 0.6,
      ease: "back.out(1.7)"
    });
  };

  const collapseCard = () => {
    gsap.to(cardRef.current, {
      x: 0,
      left: 0,
      width: "80%",
      height: "160px",
      duration: 0.6,
      ease: "power3.inOut"
    });

    gsap.to(contentRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3
    });

    gsap.to(svgRef.current, {
      scale: 1,
      x: 0,
      duration: 0.6,
      ease: "back.in"
    });
  };

  const getShape = () => {
    switch(achievement.label) {
      case 'projects':
        return "M10 10h40v40h-40z";
      case 'hackathons':
        return "M30 10 L50 30 L30 50 L10 30 Z";
      case 'experiences':
        return "M30,10 A20,20 0 1,0 30,50 A20,20 0 1,0 30,10";
      case 'certificates':
        return "M10,30 Q30,5 50,30 Q30,55 10,30";
      case 'skills':
        return "M30,10 L50,20 L50,40 L30,50 L10,40 L10,20 Z";
      default:
        return "M25,10 L45,25 L35,48 L15,48 L5,25 Z";
    }
  };

  return (
    <Box
      ref={cardRef}
      position="absolute"
      left={0}
      top={`${index * 180}px`}
      height="160px"
      width="80%"
      bg={softColors[colorKey]?.bg || '#F0F0F0'}
      borderRadius="2xl"
      borderRight={`6px solid ${softColors[colorKey]?.border || '#CCCCCC'}`}
      boxShadow="lg"
      overflow="hidden"
      cursor="pointer"
      transition="box-shadow 0.3s ease"
      _hover={{ boxShadow: "2xl" }}
      onClick={expandCard}
      onMouseLeave={collapseCard}
    >
      <Box p={8} display="flex" height="100%">
        <Box flex="1" display="flex" alignItems="center">
          <svg
            ref={svgRef}
            width="100"
            height="100"
            viewBox="0 0 60 60"
            style={{ marginRight: "40px", flexShrink: 0 }}
          >
            <path d={getShape()} fill={softColors[colorKey]?.bg || '#F0F0F0'} 
                  stroke={softColors[colorKey]?.border || '#CCCCCC'} strokeWidth="3" />
          </svg>
          <Box>
            <Text fontSize="4xl" fontWeight="bold" color={softColors[colorKey]?.text}>{achievement.number}</Text>
            <Text fontSize="xl" color={softColors[colorKey]?.text} opacity={0.9}>{achievement.label}</Text>
          </Box>
        </Box>
        <Box 
          ref={contentRef} 
          flex="2" 
          opacity={0} 
          transform="translateY(20px)"
          ml={8}
          borderLeft={`2px solid ${softColors[colorKey]?.border}40`}
          pl={8}
        >
          <Text fontSize="lg" color={softColors[colorKey]?.text}>
            Additional content for {achievement.label} goes here.
            This could include descriptions, achievements, or other relevant information.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const Achievements = () => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  const achievements = [
    { number: "15+", label: t('projects') },
    { number: "5+", label: t('hackathons') },
    { number: "3+", label: t('experiences') },
    { number: "10+", label: t('certificates') },
    { number: "20+", label: t('skills') },
    { number: "2+", label: t('education') }
  ];

  return (
    <Box minHeight="100vh" px={8} py={16}>
      <Heading
        fontSize="6xl"
        mb={16}
        color={colorMode === 'light' ? 'gray.700' : 'whiteAlpha.900'}
      >
        {t('getToKnowMe')}
      </Heading>
      <Box 
        position="relative" 
        height="1100px"
        mx="auto"
        mt={8}
      >
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            achievement={achievement}
            index={index}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Achievements;

import React, { useRef, useState, useEffect } from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  Flex, 
  Image, 

  useColorModeValue,
  SimpleGrid,
  Badge,
  Icon,
  useBreakpointValue
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FiAward, FiCode, FiBriefcase, FiBook, FiLayers, FiBookmark } from 'react-icons/fi';
import gsap from 'gsap';

const AchievementCard = ({ achievement, index, isExpanded, onToggle }) => {
  const cardRef = useRef(null);
  const colorKey = achievement.label.toLowerCase();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const iconMap = {
    projects: FiCode,
    hackathons: FiAward,
    experiences: FiBriefcase,
    certificates: FiBookmark,
    skills: FiLayers,
    education: FiBook
  };

  // Dynamic colors based on color mode and category
  const bgColor = useColorModeValue(
    `${achievement.color}.100`,
    `${achievement.color}.900`
  );
  const borderColor = useColorModeValue(
    `${achievement.color}.500`,
    `${achievement.color}.200`
  );
  const textColor = useColorModeValue(
    `${achievement.color}.700`,
    `${achievement.color}.200`
  );
  const mutedTextColor = useColorModeValue(
    `${achievement.color}.600`,
    `${achievement.color}.300`
  );
  const hoverBg = useColorModeValue(
    `${achievement.color}.50`,
    `${achievement.color}.800`
  );

  useEffect(() => {
    gsap.fromTo(cardRef.current, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        delay: index * 0.15,
        ease: "back.out"
      }
    );
  }, [index]);

  return (
    <Box
      ref={cardRef}
      position="relative"
      mb={{ base: 12, md: 16 }}
      opacity={0}
      cursor="pointer"
      onClick={onToggle}
      _hover={{
        '.achievement-number': {
          opacity: 0.15,
          transform: 'scale(1.05)'
        }
      }}
      transition="all 0.3s ease"
    >

  


      <Flex
        direction={{ base: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
        align="center"
        w="100%"
        position="relative"
      >
       
        
        <Text
          className="achievement-number"
          fontSize={{ base: "120px", md: "240px" }}
          fontWeight="900"
          opacity={0.1}
          position="absolute"
          left={index % 2 === 0 ? { base: "10px", md: "-20px" } : "auto"}
          right={index % 2 === 0 ? "auto" : { base: "10px", md: "-20px" }}
          top={{ base: "-80px", md: "-200px" }}
          color={textColor}
          zIndex={0}
          transition="all 0.3s ease"
        >
          {index + 1}
        </Text>
        
        <Box
          w={{ base: "full", md: isExpanded ? "full" : "600px" }}
          h={{ base: "auto", md: isExpanded ? "400px" : "300px" }}
          bg={bgColor}
          p={{ base: 6, md: 8 }}
          borderRadius="3xl"
          boxShadow={isExpanded ? "xl" : "md"}
          borderLeft={index % 2 === 0 ? { base: "none", md: `6px solid ${borderColor}` } : "none"}
          borderRight={index % 2 === 0 ? "none" : { base: "none", md: `6px solid ${borderColor}` }}
          borderTop={{ base: `6px solid ${borderColor}`, md: "none" }}
          transform={isExpanded ? "translateY(0)" : "translateY(10px)"}
          transition="all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          _hover={{ 
            transform: "translateY(0)", 
            boxShadow: "xl",
            bg: hoverBg
          }}
          overflow="hidden"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          position="relative"
          zIndex={1}
        >
          <Flex direction="column" h="100%">
            <Flex align="center" mb={4}>
              <Box
                w={{ base: "50px", md: "60px" }}
                h={{ base: "50px", md: "60px" }}
                borderRadius="xl"
                bg={`${borderColor}20`}
                mr={4}
                display="flex"
                align="center"
                justify="center"
                backdropFilter="blur(5px)"
                border={`1px solid ${borderColor}30`}
              >
                <Icon 
                  as={iconMap[colorKey]} 
                  fontSize="2xl" 
                  color={textColor} 
                />
              </Box>
              <Box>
                <Badge 
                  colorScheme={achievement.color} 
                  variant="subtle" 
                  fontSize="xs" 
                  mb={1}
                >
                  {achievement.label.toUpperCase()}
                </Badge>
                <Heading 
                  fontSize={{ base: "xl", md: "2xl" }} 
                  fontWeight="700" 
                  color={textColor}
                >
                  {achievement.number} {achievement.title}
                </Heading>
              </Box>
            </Flex>
            
            {isExpanded ? (
              <Flex 
                flex={1} 
                gap={6} 
                direction={{ base: "column", md: "row" }}
                mt={{ base: 4, md: 0 }}
              >
                <Box flex={1}>
                  <Text 
                    color={mutedTextColor} 
                    fontSize="md" 
                    lineHeight={1.8}
                    mb={{ base: 4, md: 0 }}
                  >
                    {achievement.description}
                  </Text>
                  {achievement.skills && (
                    <Box mt={4}>
                      <Text fontSize="sm" fontWeight="600" color={textColor} mb={2}>
                        Key Skills:
                      </Text>
                      <Flex wrap="wrap" gap={2}>
                        {achievement.skills.map((skill, i) => (
                          <Badge 
                            key={i}
                            colorScheme={achievement.color}
                            variant="outline"
                            px={2}
                            py={1}
                            borderRadius="full"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </Flex>
                    </Box>
                  )}
                </Box>
                <Box 
                  w={{ base: "full", md: "2px" }} 
                  h={{ base: "2px", md: "full" }} 
                  bg={`${borderColor}20`} 
                  mx={{ base: 0, md: 4 }}
                  my={{ base: 4, md: 0 }}
                />
                <Box 
                  flex={2} 
                  display="flex" 
                  alignItems="center" 
                  justifyContent="center"
                >
                  <ImagePreview 
                    images={achievement.images} 
                    colorKey={colorKey} 
                    borderColor={borderColor}
                    textColor={textColor}
                  />
                </Box>
              </Flex>
            ) : (
              <Text 
                color={mutedTextColor} 
                fontSize="md" 
                lineHeight={1.8}
                noOfLines={3}
              >
                {achievement.description}
              </Text>
            )}
          </Flex>
        </Box>

        {!isMobile && (
          <Box 
            flex={1} 
            h="2px" 
            bg={`${borderColor}20`}
            mx={8}
          />
        )}
      </Flex>
    </Box>
  );
};

const ImagePreview = ({ images, borderColor, textColor }) => {

  return (
    <>
      <SimpleGrid 
        columns={{ base: 2, sm: 3 }} 
        spacing={{ base: 4, md: 6 }}
        w="100%"
        px={{ base: 0, md: 4 }}
      >
        {images.map((img, idx) => (
          <Flex 
            key={idx}
            direction="column"
            align="center"
            transition="all 0.3s ease"
            _hover={{
              transform: 'translateY(-5px)'
            }}
          >
            <Text
              color={textColor}
              fontSize="sm"
              fontWeight="600"
              mb={2}
              textAlign="center"
            >
              {img.title}
            </Text>
            <Box
              borderRadius="lg"
              overflow="hidden"
              cursor="pointer"
              transition="all 0.3s ease"
              _hover={{ 
                transform: 'scale(1.05)',
                boxShadow: `0 4px 12px ${borderColor}40`
              }}
              boxShadow={`0 2px 8px ${borderColor}20`}
              position="relative"
              w="full"
              h={{ base: "100px", md: "120px" }}
            >
              <Image
                src={img.url}
                alt={img.title}
                w="100%"
                h="100%"
                objectFit="cover"
                border={`2px solid ${borderColor}`}
              />
              <Box
                position="absolute"
                inset={0}
                bg={`${borderColor}20`}
                opacity={0}
                _hover={{ opacity: 1 }}
                transition="opacity 0.3s ease"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
              
              </Box>
            </Box>
          </Flex>
        ))}
      </SimpleGrid>

    </>
  );
};

const Achievements = () => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const achievements = [
    { 
      number: "15+", 
      label: 'projects',
      title: 'Projects',
      color: 'pink',
      description: "Built responsive web applications using React, Node.js, and modern frameworks. Specialized in creating interactive dashboards and e-commerce solutions with focus on performance and accessibility.",
      images: [
        {
          url: '/images/projects/project1.jpg',
          title: 'E-commerce Platform'
        },
        {
          url: '/images/projects/project2.jpg',
          title: 'Analytics Dashboard'
        },
        {
          url: '/images/projects/project3.jpg',
          title: 'Mobile App'
        }
      ],
      skills: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'Chakra UI']
    },
    { 
      number: "5+", 
      label: 'hackathons',
      title: 'Hackathons',
      color: 'teal',
      description: "Participated in competitive coding events, winning awards for innovative solutions in AI and web development categories. Collaborated with diverse teams to build prototypes under time constraints.",
      images: [
        {
          url: '/images/hackathons/hack1.jpg',
          title: 'AI Challenge'
        },
        {
          url: '/images/hackathons/hack2.jpg',
          title: 'Web Dev Contest'
        },
        {
          url: '/images/hackathons/hack3.jpg',
          title: 'Hackathon Finals'
        }
      ],
      skills: ['Teamwork', 'Problem Solving', 'Prototyping', 'Presentation']
    },
    { 
      number: "3+", 
      label: 'experiences',
      title: 'Years Experience',
      color: 'blue',
      description: "Professional work experience at tech companies, contributing to large-scale projects and collaborating with cross-functional teams. Led initiatives that improved performance by 40% and user satisfaction by 25%.",
      images: [
        {
          url: '/images/experiences/exp1.jpg',
          title: 'Tech Company A'
        },
        {
          url: '/images/experiences/exp2.jpg',
          title: 'Tech Company B'
        },
        {
          url: '/images/experiences/exp3.jpg',
          title: 'Tech Company C'
        }
      ],
      skills: ['Leadership', 'Agile Methodologies', 'Mentoring', 'Project Management']
    },
    { 
      number: "10+", 
      label: 'certificates',
      title: 'Certifications',
      color: 'orange',
      description: "Completed certifications in web development, cloud computing, and UX design from recognized platforms like Coursera and Udemy. Continuously learning new technologies to stay ahead in the field.",
      images: [
        {
          url: '/images/certificates/cert1.jpg',
          title: 'Web Development'
        },
        {
          url: '/images/certificates/cert2.jpg',
          title: 'Cloud Computing'
        },
        {
          url: '/images/certificates/cert3.jpg',
          title: 'UX Design'
        }
      ],
      skills: ['Continuous Learning', 'Cloud Architecture', 'UI/UX Principles']
    },
    { 
      number: "20+", 
      label: 'skills',
      title: 'Skills',
      color: 'purple',
      description: "Mastered technologies including JavaScript, Python, React, Node.js, and cloud platforms like AWS and Firebase. Strong foundation in both frontend and backend development with focus on clean code practices.",
      images: [
        {
          url: '/images/skills/skill1.jpg',
          title: 'JavaScript'
        },
        {
          url: '/images/skills/skill2.jpg',
          title: 'React'
        },
        {
          url: '/images/skills/skill3.jpg',
          title: 'AWS'
        }
      ],
      skills: ['JavaScript', 'Python', 'React', 'Node.js', 'AWS', 'Firebase']
    },
    { 
      number: "2+", 
      label: 'education',
      title: 'Degrees',
      color: 'red',
      description: "Advanced degrees in Computer Science with focus on human-computer interaction and distributed systems. Published research papers on innovative approaches to user interface design.",
      images: [
        {
          url: '/images/education/edu1.jpg',
          title: 'Bachelor\'s Degree'
        },
        {
          url: '/images/education/edu2.jpg',
          title: 'Master\'s Degree'
        },
        {
          url: '/images/education/edu3.jpg',
          title: 'PhD'
        }
      ],
      skills: ['Research', 'Algorithms', 'Distributed Systems', 'HCI']
    }
  ];

  const headingGradient = useColorModeValue(
    'linear(to-r, gray.700, gray.500)',
    'linear(to-r, gray.300, gray.100)'
  );

  return (
    <Box userSelect={"none"} minHeight="100vh" py={{ base: 12, md: 20 }} overflow="hidden" position="relative">
      {/* Decorative elements */}
      <Box
        position="absolute"
        top="-100px"
        right="-100px"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="blue.100"
        filter="blur(80px)"
        opacity={0.3}
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="-100px"
        left="-100px"
        w="500px"
        h="500px"
        borderRadius="full"
        bg="pink.100"
        filter="blur(100px)"
        opacity={0.2}
        zIndex={0}
      />
      
      <Box 
        px={{ base: 6, md: 20 }} 
        mb={{ base: 16, md: 28 }}
        position="relative"
        zIndex={1}
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
          maxW="600px"
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
            isExpanded={expandedIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Achievements;
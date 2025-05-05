import React from 'react'
import { Box } from '@chakra-ui/react'
import ExperienceCard from './ExperienceCard'

const EventsTimeline = () => {
  
  const eventsData = React.useMemo(() => {
    const data = [
      {
        title: "AI Hackathon Winner",
        company: "TechFest 2024",
        location: "Virtual Event",
        startDate: "2024-01-15",
        endDate: "2024-01-17",
        description: [
          "Led a team of 4 developers to create an AI-powered healthcare solution",
          "Won first place among 50+ participating teams",
          "Implemented machine learning models for medical image analysis"
        ],
        technologies: [
          "TensorFlow",
          "Python",
          "React",
          "AWS",
          "Docker"
        ],
        images: [
          "https://picsum.photos/200/300",
          "https://picsum.photos/200/300",
          "https://picsum.photos/200/300"
        ]
      },
      {
        title: "Web3 Development Workshop Leader",
        company: "BlockchainConf Tunisia",
        location: "Tunis, Tunisia",
        startDate: "2023-11-20",
        endDate: "2023-11-22",
        description: [
          "Conducted a workshop on building decentralized applications",
          "Mentored 30+ participants in blockchain development",
          "Created hands-on exercises for smart contract development"
        ],
        technologies: [
          "Solidity",
          "Ethereum",
          "Web3.js",
          "Hardhat",
          "MetaMask"
        ],
        images: [
          "https://picsum.photos/200/300",
          "https://picsum.photos/200/300",
          "https://picsum.photos/200/300"
        ]
      }
    ]
    return data
  }, [])

  return (
    <Box position="relative" zIndex={1}>
      {eventsData.map((event, index) => (
        <ExperienceCard 
          key={`event-${index}`}
          experience={event} 
          index={index}
          isLast={index === eventsData.length - 1}
        />
      ))}
    </Box>
  )
}

export default EventsTimeline

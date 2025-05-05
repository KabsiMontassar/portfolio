import React from 'react'
import { Box } from '@chakra-ui/react'
import ExperienceCard from './ExperienceCard'

const EventsTimeline = ({data}) => {
  


  return (
    <Box position="relative" zIndex={1}>
      {data.map((event, index) => (
        <ExperienceCard 
          key={`event-${index}`}
          experience={event} 
          index={index}
          isLast={index === data.length - 1}
        />
      ))}
    </Box>
  )
}

export default EventsTimeline

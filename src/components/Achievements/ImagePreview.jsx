import React from 'react'
import { Box, Flex, SimpleGrid, Text, Icon } from '@chakra-ui/react'
import { FiArrowRight } from 'react-icons/fi'
import { GrCertificate } from "react-icons/gr";
import { FaRankingStar } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { TbFileCertificate } from "react-icons/tb";

import {
    StarIcon,
    CalendarIcon,
    CheckIcon,
    SettingsIcon,
    ViewIcon,
    EmailIcon
} from '@chakra-ui/icons'

const ImagePreview = ({ category, images, borderColor, textColor }) => {


    const getIconByCategory = (category) => {
        const icons = {
            experiences: SettingsIcon,
            education: TbFileCertificate,
            projects: CalendarIcon,
            hackathons: FaRankingStar,
            certificates: GrCertificate,
            skills: StarIcon,
            expériences: SettingsIcon,
            formation: TbFileCertificate,
            projets: CalendarIcon,
            certificats: GrCertificate,
            compétences: StarIcon
        };
        return icons[category] || EmailIcon;


    }



    return (
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

                    cursor="pointer"

                >
                    <Box
                        borderRadius="lg"
                        overflow="hidden"
                        transition="all 0.3s ease"
                        _hover={{
                            transform: 'scale(1.05)',
                            boxShadow: `0 4px 12px ${borderColor}40`,
                            '& .arrow-icon': {
                                opacity: 1,
                                transform: 'translateX(0)'
                            }
                        }}
                        boxShadow={`0 2px 8px ${borderColor}20`}
                        position="relative"
                        w="full"
                        h={{ base: "100px", md: "120px" }}
                        bg={`${borderColor}20`}
                        backdropFilter="blur(8px)"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                        gap={3}
                        px={4}
                    >
                        <Icon
                            as={getIconByCategory(category)}
                            w={8}
                            h={8}

                            color={textColor}
                            mb={2}
                        />
                        <Text
                            color={textColor}
                            fontSize="sm"
                            fontWeight="600"
                            textAlign="center"
                            mr={2}
                        >
                            {img.title}
                        </Text>

                    </Box>
                </Flex>
            ))}
        </SimpleGrid>
    )
}

export default ImagePreview
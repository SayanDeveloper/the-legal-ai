import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Card = ({heading, subtext, imgSrc}) => {
    return (
        <Flex height="400px" justifyContent="space-around" direction="column" alignItems="center" border="1px solid #00000044" borderRadius="8px" padding="20px">
            <Image src={imgSrc} mb="20px" height="150px" objectFit="contain" />
            <Box>
                <Text fontWeight={600} fontSize="20px" mb="10px" textAlign="center">
                    {heading}
                </Text>
                <Text fontSize={"14px"}>
                    {subtext}
                </Text>
            </Box>
        </Flex>
    )
}

export default Card

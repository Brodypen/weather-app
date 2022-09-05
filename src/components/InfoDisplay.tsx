import { Box, Heading, Text, Icon, VStack, HStack } from '@chakra-ui/react'
import React from 'react'
import {TiWeatherCloudy, TiWeatherSunny} from 'react-icons/ti'
const InfoDisplay = () => {
  const IconFinder = (description: string) => {
    return TiWeatherSunny;
  }
  return (
    <Box minW="25vw" maxW="100vw" backgroundColor="blue.900" borderRadius={25}>
      <HStack
        alignItems="flex-start"
        justifyContent="space-between"
        padding={5}
        paddingBottom={0}
      >
        <VStack alignItems="flex-start" margin={0}>
          <Text color="white" id="name" fontSize="3xl">
            Houston
          </Text>
          <Text color="white" id="description" fontSize="xl">
            Sunny
          </Text>
        </VStack>
        <Icon as={IconFinder("hey")} color="white" boxSize={75} />
      </HStack>
      <HStack justifyContent="space-between" padding={5}>
        <Text color="white" id="Temp" fontSize="8xl">
          13°C
        </Text>
        <VStack>
          <HStack>
            <Text margin={0} color="white" id="Temp" fontSize="md">
              Feels like:
            </Text>
            <Text margin={0} color="white" id="Temp" fontSize="md">
              14*C
            </Text>
          </HStack>
          <HStack>
            <Text margin={0} color="white" id="Temp" fontSize="md">
              Wind:
            </Text>
            <Text margin={0} color="white" id="Temp" fontSize="md">
              14*C
            </Text>
          </HStack>
          <HStack>
            <Text margin={0} color="white" id="Temp" fontSize="md">
              Humidity:
            </Text>
            <Text margin={0} color="white" id="Temp" fontSize="md">
              14*C
            </Text>
          </HStack>
          <HStack>
            <Text margin={0} color="white" id="Temp" fontSize="md">
              Pressure
            </Text>
            <Text margin={0} color="white" id="Temp" fontSize="md">
              14*C
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
}

export default InfoDisplay
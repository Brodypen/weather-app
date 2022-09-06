import { Box, Text, Image, VStack, HStack } from "@chakra-ui/react";
import React from "react";
import logo from "./01d.png";
interface InfoDisplayProps {
  data: any;
  unit: string;
}
const InfoDisplay = ({ data, unit }: InfoDisplayProps) => {
  console.log(`${data.weather[0].icon}.png`);
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
            {data.city}
          </Text>
          <Text color="white" id="description" fontSize="xl">
            {data.weather[0].description}
          </Text>
        </VStack>
        <Image
          src={`${data.weather[0].icon}.png`}
          color="white"
          boxSize={75}
          fallbackSrc={logo}
        />
      </HStack>
      <HStack justifyContent="space-between" padding={5}>
        <Text color="white" id="Temp" fontSize="8xl">
          {Math.round(data.main.temp)}°{unit === "imperial" ? "F" : "C"}
        </Text>
        <VStack>
          <HStack>
            <Text margin={0} color="white" id="Temp" fontSize="md">
              Feels like:
            </Text>
            <Text margin={0} color="white" id="Temp" fontSize="md">
              {Math.round(data.main.feels_like)}°
              {unit === "imperial" ? "F" : "C"}
            </Text>
          </HStack>
          <HStack>
            <Text margin={0} color="white" id="Temp" fontSize="md">
              Wind:
            </Text>
            <Text margin={0} color="white" id="Temp" fontSize="md">
              {
                //m/s or mi/hr}
              }
              {data.wind.speed}
              {unit === "imperial" ? " mi/hr" : " m/s"}
            </Text>
          </HStack>
          <HStack>
            <Text margin={0} color="white" id="Temp" fontSize="md">
              Humidity:
            </Text>
            <Text margin={0} color="white" id="Temp" fontSize="md">
              {data.main.humidity} %
            </Text>
          </HStack>
          <HStack>
            <Text margin={0} color="white" id="Temp" fontSize="md">
              Pressure
            </Text>
            <Text margin={0} color="white" id="Temp" fontSize="md">
              {data.main.pressure} hPa
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default InfoDisplay;

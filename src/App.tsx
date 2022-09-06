import * as React from "react";
import { useState } from "react";
import {
  ChakraProvider,
  Box,
  Stack,
  theme,
  Heading,
  Button,
} from "@chakra-ui/react";
import Search from "./components/Search";
import InfoDisplay from "./components/InfoDisplay";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./utils/api";
import { FaTemperatureLow } from "react-icons/fa";
export const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unit, setUnit] = useState("imperial");

  const handleOnSearchChange = (searchData: any) => {
    const [lat, lon] = searchData.value.split("");
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=${unit}`
    );
    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
      })
      .catch((err) => console.log(err));
  };
  const swapUnit = () => {
    if (unit === "imperial") {
      setUnit("metric");
    } else {
      setUnit("imperial");
    }
    setCurrentWeather(null);
  };

  // console.log(currentWeather);
  // console.log(unit);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" backgroundColor={"gray.800"}>
        <Stack minH="100vh" paddingTop={50} gap={5} alignItems="center">
          <Heading color="white">Weather App</Heading>
          <Button
            leftIcon={<FaTemperatureLow />}
            variant="solid"
            colorScheme="teal"
            fontSize="2xl"
            onClick={swapUnit}
          >
            {unit === "imperial" ? "°F" : "°C"}
          </Button>
          <Search onSearchChange={handleOnSearchChange} />
          {currentWeather && <InfoDisplay data={currentWeather} unit={unit} />}
        </Stack>
      </Box>
    </ChakraProvider>
  );
};

import * as React from "react";
import { ChakraProvider, Box, Stack, theme, Heading, Text } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import Search from "./components/Search";
import weatherData from "./data/json/houston.json"
import InfoDisplay from "./components/InfoDisplay";
import { WeatherData } from "./data/types/WeatherData";
export const App = () => {

  const handleOnSearchChange=(searchData: string)=> {
    console.log();
  }
  // const api = {
  //   key: "&appid=4cb08b58b0f30c6dd7ac0e4c4b487572",
  //   weather: "houston",
  //   base: "https://api.openweathermap.org/data/2.5/weather?q=",
  // };
  // const weather = React.useState<WeatherData>(weatherData);
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Stack minH="100vh" p={3}>
          {
            // Here
          }
          <ColorModeSwitcher alignSelf="flex-end" />
          <Search onSearchChange={handleOnSearchChange}/>
          <Heading>Weather App</Heading>
          <InfoDisplay/>
        </Stack>
      </Box>
    </ChakraProvider>
  );
};

import * as React from "react";
import { ChakraProvider, Box, Stack, theme, Heading, Button, LightMode} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import Search from "./components/Search";
import InfoDisplay from "./components/InfoDisplay";
export const App = () => {
  const handleOnSearchChange = (searchData: any) => {
    console.log(searchData);
  };
  // const api = {
  //   key: "&appid=4cb08b58b0f30c6dd7ac0e4c4b487572",
  //   weather: "houston",
  //   base: "https://api.openweathermap.org/data/2.5/weather?q=",
  // };
  // const weather = React.useState<WeatherData>(weatherData);
  //#1A202C
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" backgroundColor={"gray.800"}>
        <Stack minH="100vh" paddingTop={50} gap={5}>
          {
            // Here
          }

          <Heading color="white">Weather App</Heading>
          <Stack paddingLeft={50} paddingRight={50}>
            <Search onSearchChange={handleOnSearchChange} />
          </Stack>
          <InfoDisplay />
        </Stack>
      </Box>
    </ChakraProvider>
  );
};

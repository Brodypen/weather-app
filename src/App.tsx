import * as React from "react";
import { ChakraProvider, Box, Stack, theme, Heading } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import Search from "./utils/Search";
export const App = () => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=houston&appid=4cb08b58b0f30c6dd7ac0e4c4b487572";


  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Stack minH="100vh" p={3}>
          {
            // Here
          }
          <ColorModeSwitcher alignSelf="flex-end" />
          <Search />
          <Heading>Weather App</Heading>
        </Stack>
      </Box>
    </ChakraProvider>
  );
};

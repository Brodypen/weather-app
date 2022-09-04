import * as React from "react"
import {
  ChakraProvider,
  Box,
  Stack,
  theme,
  Heading,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./components/ColorModeSwitcher"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Stack minH="100vh" p={3}>
        <ColorModeSwitcher alignSelf="flex-end" />
        <Heading>Weather App</Heading>
      </Stack>
    </Box>
  </ChakraProvider>
)

import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: 'dark',
  },
});

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript useSystemColorMode="true" />
      <App />
    </ChakraProvider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { store, persistor } from 'redux/store';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <ChakraProvider theme={theme}> */}
          <BrowserRouter basename="/phonebook">
            <App />
          </BrowserRouter>
          {/* </ChakraProvider> */}
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

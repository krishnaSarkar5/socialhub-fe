import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CSSReset, ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme/Theme';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
        <CSSReset />

        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ChakraProvider>
);


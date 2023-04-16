import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import './index.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/GlobalStyle';

const theme = {
  colors: {
    black: '#212121',
    grey: '#757575',
    lightblue: '#ebf5f4',
    white: '#ffffff ',
  },
  border: '2px solid rgba(0, 0, 0, 0.1)',
  boxshadow: '-1px 2px 21px 0px rgba(0, 0, 0, 0.56)',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <GlobalStyle />
  </React.StrictMode>
);

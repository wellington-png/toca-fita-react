import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';

import Router from './router';



const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;

    &:focus {
      outline: none;
    }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    background-color: #DECF8345;
  }
`;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>
);


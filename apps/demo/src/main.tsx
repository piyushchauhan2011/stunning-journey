import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import App from './app/app';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById('root')
);

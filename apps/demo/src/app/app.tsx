import React from 'react';
import styled from 'styled-components';

import { useViewportSize } from '@piyushchauhan2011/use-viewport-size';

const StyledApp = styled.div`
  font-family: sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function App() {
  const size = useViewportSize();
  return (
    <StyledApp data-testid>
      <h1>Welcome to demo!</h1>
      <span data-testid="app">
        {size.width}px / {size.height}px
      </span>
    </StyledApp>
  );
}

export default App;

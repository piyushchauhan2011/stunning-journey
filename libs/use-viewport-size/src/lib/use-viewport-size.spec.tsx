import React from 'react';
import ReactDOM from 'react-dom';
import { act } from '@testing-library/react';
import { useViewportSize } from './use-viewport-size';

describe(' UseViewportSize', () => {
  it('should render successfully', () => {
    // Setup
    let container: HTMLDivElement | null = document.createElement('div');
    document.body.appendChild(container);

    const App = () => {
      const size = useViewportSize();
      return <div>{JSON.stringify(size)}</div>;
    };

    act(() => {
      ReactDOM.render(<App />, container);
    });

    expect(container.textContent).toEqual('{"width":1024,"height":768}');

    // Teardown
    document.body.removeChild(container);
    container = null;
  });
});

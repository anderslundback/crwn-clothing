import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App component is defined', () => {
  render(<App />);
  expect(<App />).toBeDefined();
});

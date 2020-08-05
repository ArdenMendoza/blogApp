import React from 'react';
import { render } from '@testing-library/react';
import MainPage from './components/MainPage';

test('renders learn react link', () => {
  const { getByText } = render(<MainPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

test.skip('renders the correct heading text', () => {
  const { getByText } = render(<Header />);
  const heading = getByText(/ラズベリーパイ/i);
  expect(heading).toBeInTheDocument();
});

test.skip('renders the correct image', () => {
  const { getByAltText } = render(<Header />);
  const image = getByAltText(/vaporwave/i);
  expect(image).toBeInTheDocument();
});

test.skip('renders the correct subtext', () => {
  const { getByText } = render(<Header />);
  const subtext = getByText(/by: chris/i);
  expect(subtext).toBeInTheDocument();
});

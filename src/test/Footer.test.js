import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

test('renders the GitHub link', () => {
  render(<Footer />);
  const githubLink = screen.getByText(/GitHub/i);
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', 'https://github.com/cjvillar');
});

test('renders the CJ link', () => {
  render(<Footer />);
  const cjLink = screen.getByText(/CJ/i);
  expect(cjLink).toBeInTheDocument();
  expect(cjLink).toHaveAttribute('href', 'https://www.cjvillarreal.com/');
});

test('renders the blog link', () => {
  render(<Footer />);
  const blogLink = screen.getByText(/BLOG/i);
  expect(blogLink).toBeInTheDocument();
  expect(blogLink).toHaveAttribute('href', 'https://www.cjvillarreal.com/ChrisCodes/');
});

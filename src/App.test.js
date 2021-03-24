import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    // fails
    // expect(screen.getByText('Search')).toBeInTheDocument();

    // succeeds
    expect(screen.getByText('Search:')).toBeInTheDocument();

    // succeeds
    expect(screen.getByText(/Searche/)).toBeInTheDocument();
  });

  test('renders App component role', () => {
    render(<App />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('renders App component getByText', () => {
    render(<App />);
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  })
});
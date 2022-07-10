import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

describe('test app', () => {
  it('renders link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Kč/i);
    expect(linkElement).toBeInTheDocument();
  }),
    it('checkbox label toggle after click', () => {
      render(<App />);

      expect(screen.getByText('Bez pojištění')).toBeInTheDocument;
      fireEvent.click(screen.getByRole('checkbox'));
      expect(screen.getByText(/S pojištěním/i)).toBeInTheDocument();
    });
});

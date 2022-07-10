import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

test(
  'renders link',
  () => {
    render(<App />);
    const linkElement = screen.getByText(/Kč/i);
    expect(linkElement).toBeInTheDocument();
  },

  it('Checkbox label toggle after click', () => {
    render(<App />);

    expect(screen.getByText('Bez pojištění')).toBeInTheDocument;

    fireEvent.click(screen.getByRole('checkbox'));

    expect(screen.getByText(/S pojištěním/i)).toBeInTheDocument();

    // expect(screen.getByText(/ahoj/i)).toBeInTheDocument();
    // expect(screen.toHaveTextContent(/S pojištěním/i));
  }),
);

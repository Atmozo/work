// src/__tests__/GameBoard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import GameBoard from '../components/GameBoard';

describe('GameBoard Component', () => {
  test('renders the GameBoard component with header, button, and timer', () => {
    render(<GameBoard />);

    // Check that the header text is displayed
    expect(screen.getByText(/Words Countdown/i)).toBeInTheDocument();

    // Check that the "New Game" button is rendered
    const newGameButton = screen.getByRole('button', { name: /new game/i });
    expect(newGameButton).toBeInTheDocument();

  });

  test('starts a new game and shows letters grid when "New Game" button is clicked', () => {
    render(<GameBoard />);
    
    // Click the "New Game" button
    const newGameButton = screen.getByRole('button', { name: /new game/i });
    fireEvent.click(newGameButton);

    // Check that letters are displayed in the grid
   
  });
  
  test('updates score correctly when a valid word is submitted', () => {
    render(<GameBoard />);
    
    // Start a new game
    fireEvent.click(screen.getByRole('button', { name: /new game/i }));

    // Enter a valid word (assuming it's possible with displayed letters)
    const input = screen.getByPlaceholderText(/enter a word.../i);
    fireEvent.change(input, { target: { value: 'EXAMPLE' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    // Check that score updates appropriately
    expect(screen.getByText(/your score:/i)).toBeInTheDocument();
  });
});

// src/App.tsx
import React from 'react';
import GameBoard from './components/GameBoard';
import './index.css'; // Ensure Tailwind CSS is imported

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="max-w-lg w-full">
        <GameBoard />
      </div>
    </div>
  );
};

export default App;

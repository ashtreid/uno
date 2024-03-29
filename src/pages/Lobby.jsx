import React from 'react';
import { useNavigate } from 'react-router-dom';

const Lobby = () => {
  let navigate = useNavigate();

  const handleStartGame = () => {
    // Navigate to the game page
    navigate('/game');
  };

  return (
    <div>
      <h1>Welcome to the Uno Lobby!</h1>
      <button onClick={handleStartGame}>Enter Game 1</button>
    </div>
  );
};

export default Lobby;

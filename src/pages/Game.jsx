import React from 'react';
import ChatRoom from '../components/Chat';

const Game = () => {
  return (
    <div>
      <h1>Game Room 1</h1>
      {/* Game logic and UI goes here */}
      <div>
        <h2>Chat</h2>
        <ChatRoom /> {/* This renders the ChatRoom component */}
      </div>
    </div>
  );
};

export default Game;

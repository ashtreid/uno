import React, { useState, useEffect } from 'react';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Uno!</h1>
            <button onClick={() => alert('Hello, world!')}>New Game</button>
        </div>
    );
}

export default Home;
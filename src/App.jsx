import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './pages/Home';
import Lobby from './pages/Lobby'; // Assuming you have a Lobby component

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <>
        <div>
          {/* Define your routes within <Routes> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lobby" element={<Lobby />} />
            {/* Define other routes as needed */}
          </Routes>
          {/* Your other links and content */}
        </div>
        
      </>
    </Router>
  );
}

export default App;



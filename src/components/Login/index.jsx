import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Form, Button } from 'react-bootstrap';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom'; // Uncomment for React Router v6

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Uncomment for React Router v6

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect user to the lobby/home page after successful login
      navigate('/lobby'); // Uncomment for React Router v6
    } catch (error) {
      setError('Failed to log in: ' + error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

      <Button variant="primary" type="submit">
        Log In
      </Button>
    </Form>
  );
};

export default Login;

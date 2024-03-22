import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; 
import { Form, Button } from 'react-bootstrap';
import { auth } from '../../firebase';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect to lobby/home page after successful authentication
      navigate('/lobby'); 
    } catch (error) {
      // TODO: Custom error handling that can be implemented and tested later
      // let errorMessage;
      // switch (error.code) {
      //   case 'auth/invalid-email':
      //     errorMessage = 'Invalid email format. Please enter a valid email address.';
      //     break;
      //   case 'auth/weak-password':
      //     errorMessage = 'Weak password. Your password must be at least 6 characters long.';
      //     break;
      //   case 'auth/email-already-in-use':
      //     errorMessage = 'This email is already in use. Please use a different email or log in.';
      //     break;
      //   case 'auth/invalid-credential':
      //   case 'auth/wrong-password':
      //     errorMessage = 'Incorrect password. Please try again.';
      //     break;
      //   case 'auth/user-not-found':
      //     errorMessage = 'No user found with this email. Please sign up.';
      //     break;
      //   default:
      //     errorMessage = 'An error occurred. Please try again.';
      // }
      setError(error.message);
    }
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      {/* Email and password fields */}
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
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      {/* Error message display */}
      {error && <div style={{ color: "red" }}>{error}</div>}

      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default Signup;

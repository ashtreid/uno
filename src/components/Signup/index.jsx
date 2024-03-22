import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Form, Button } from 'react-bootstrap';
import { auth } from '../../firebase'; // Ensure this is correctly importing `auth`

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // On successful signup, userCredential will have the user info
      console.log('User created successfully:', userCredential.user);
      // Here, redirect the user or show a success message
    } catch (error) {
      setError(error.message);
      console.error('Error signing up:', error.message);
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


/////// CODE WITH REACT ROUTER DOM IMPLEMENTATION ///////
// import React, { useState } from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { useHistory } from 'react-router-dom'; // For React Router v5
// // import { useNavigate } from 'react-router-dom'; // Uncomment for React Router v6
// import { auth } from '../../firebase';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const history = useHistory(); // For React Router v5
//   // const navigate = useNavigate(); // Uncomment for React Router v6

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       // Redirect to lobby/home page
//       history.push('/lobby'); // For React Router v5
//       // navigate('/lobby'); // Uncomment for React Router v6
//     } catch (error) {
//       setError(error.message);
//     }
//   };
  
//   return (
//     <Form onSubmit={handleSubmit}>
//       {/* Email and password fields */}
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </Form.Group>

//       {/* Error message display */}
//       {error && <div style={{ color: "red" }}>{error}</div>}

//       <Button variant="primary" type="submit">
//         Sign Up
//       </Button>
//     </Form>
//   );
// };

// export default Signup;
/////// CODE WITH REACT ROUTER DOM IMPLEMENTATION ///////









/////// OLD CODE MISTAKENLY UTILIZING FIRESTORE INSTEAD OF REALTIME DATABASE ///////
// import React, { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import { Form, Button } from 'react-bootstrap'; // Corrected imports
// import { auth, database } from "../../firebase"; // Assuming these are correctly exported

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Create user with email and password
//       const userCredential = await createUserWithEmailAndPassword(auth, username, password);
//       const user = userCredential.user;

//       // Optional: Store additional user info in Firestore
//       // Assuming 'users' collection. Adjust as necessary.
//       await setDoc(doc(database, "users", user.uid), {
//         username: username,
//         // Any other user info
//       });
//       // test comment
//       // Clear form (optional) and handle success (e.g., redirect or show message)
//       setUsername('');
//       setPassword('');
//       console.log("User created successfully with email:", user.email);
//     } catch (error) {
//       setError(error.message);
//       console.error("Error signing up:", error.message);
//     }
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Username (Email address)</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="Enter email"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </Form.Group>

//       {error && <div style={{ color: "red" }}>{error}</div>}

//       <Button variant="primary" type="submit">
//         Sign Up
//       </Button>
//     </Form>
//   );
// };

// export default Signup;

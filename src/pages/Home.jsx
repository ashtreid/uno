import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Signup from '../components/Signup'; // Adjust the import path as necessary

const Home = () => {
    const [showSignup, setShowSignup] = useState(false);

    const handleClose = () => setShowSignup(false);
    const handleShow = () => setShowSignup(true);

    return (
        <div>
            <h1>Welcome to Uno!</h1>
            <Button variant="primary" onClick={handleShow}>Sign Up</Button>
            <button onClick={() => alert('Hello, world!')}>New Game</button>

            <Modal show={showSignup} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Signup />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Home;

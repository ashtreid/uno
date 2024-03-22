import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Signup from '../components/Signup'; 
import Login from '../components/Login'; 

const Home = () => {
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false); // State to control login modal visibility

    const handleCloseSignup = () => setShowSignup(false);
    const handleShowSignup = () => setShowSignup(true);

    const handleCloseLogin = () => setShowLogin(false); // Function to close login modal
    const handleShowLogin = () => setShowLogin(true); // Function to show login modal

    return (
        <div>
            <h1>Welcome to Uno!</h1>
            <Button variant="primary" onClick={handleShowSignup}>Sign Up</Button>
            <Button variant="secondary" onClick={handleShowLogin}>Log In</Button> {/* Login button */}

            {/* Signup Modal */}
            <Modal show={showSignup} onHide={handleCloseSignup}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Signup />
                </Modal.Body>
            </Modal>

            {/* Login Modal */}
            <Modal show={showLogin} onHide={handleCloseLogin}>
                <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Login />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Home;

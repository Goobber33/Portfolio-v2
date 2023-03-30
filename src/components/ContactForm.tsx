import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                setModalMessage('Email sent successfully!');
                setModalIsOpen(true);
            } else {
                setModalMessage('An error occurred while sending the email.');
                setModalIsOpen(true);
            }
        } catch (error) {
            console.error(error);
            setModalMessage('An error occurred while sending the email.');
            setModalIsOpen(true);
        }
    };


    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Email Result Modal"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        width: '40%',
                        maxWidth: '600px',
                        minHeight: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '10px',
                        padding: '2rem',
                    },
                }}
            >
                <h2>{modalMessage}</h2>
                <Button
                    variant="primary"
                    onClick={() => setModalIsOpen(false)}
                    style={{
                        width: '100px',
                        marginTop: '2rem',
                        backgroundColor: '#284B63',
                        borderColor: '#284B63',
                    }}
                    className="hover-effect"
                >
                    OK
                </Button>


            </Modal>
        </section>
    );
};

export default ContactForm;

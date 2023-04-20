import React, { useState, useEffect, forwardRef } from 'react';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import { scroller } from 'react-scroll';


const ContactForm = forwardRef<HTMLDivElement>((_, ref) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('https://kp-portfolio-back-end.herokuapp.com/send-email', {
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
                const errorData = await response.json(); // Add this line
                console.error(errorData); // Add this line
                setModalMessage('An error occurred while sending the email.');
                setModalIsOpen(true);
            }
        } catch (error) {
            console.error(error);
            setModalMessage('An error occurred while sending the email.');
            setModalIsOpen(true);
        }
    };

    const handleScrollUp = () => {
        scroller.scrollTo('ProjectCard', {
            duration: 0,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -10,
        });
    };

    return (
        <div ref={ref}>
            <section className="contact-section" id="contact">

                <div onClick={handleScrollUp} className="d-flex justify-content-center arrowsix-container">

                    <span className="arrow-up-three mt-3" style={{ cursor: 'pointer' }}>
                        <i className="fa fa-angle-up arrsixc"></i>
                    </span>

                    <span className="contacttexttwo">
                        Projects
                    </span>

                </div>

                <div className="container contact-container">
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
        </div>
    )
});

export default ContactForm;

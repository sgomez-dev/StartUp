import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="card">
            <div className="section-content">
                <img src="../img/contact.png" alt="contact" className="section-image" />
                <div className="text-content">
                    <h2>Contact Me</h2>
                    <form action="https://formspree.io/f/xleykykq" method="post">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;


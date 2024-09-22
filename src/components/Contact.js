import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id= "contact" style={{ backgroundColor: '#1e1e1e', color: '#fff', padding: '50px' }}>
      <h2>Contact Me</h2>
      <p>Feel free to reach out for any collaborations or questions!</p>
      <div className="contact-links">
        <a href="edward.tang0905@gmail.com" className="contact-link">Email Me</a>
        <a href="https://www.linkedin.com/in/edward-tang-98a091311/" className="contact-link">LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;
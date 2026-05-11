// src/components/Contact.jsx

import React from "react";

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Get in Touch</h1>
      <p style={styles.subtitle}>
        I’d love to hear from you. Here’s how you can reach me:
      </p>

      <div style={styles.info}>
        <p style={styles.infoItem}>
          <strong>Email:</strong> <a href="mailto:yourname@example.com" style={styles.link}>yourname@example.com</a>
        </p>
        <p style={styles.infoItem}>
          <strong>Phone:</strong> <a href="tel:+1234567890" style={styles.link}>+1 (234) 567-890</a>
        </p>
        <p style={styles.infoItem}>
          <strong>Location:</strong> New York, USA
        </p>
        <p style={styles.infoItem}>
          <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={styles.link}>linkedin.com/in/yourprofile</a>
        </p>
        <p style={styles.infoItem}>
          <strong>GitHub:</strong> <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={styles.link}>github.com/yourusername</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#1a1a1a",
    textAlign: "center",
  },
  title: {
    fontSize: "2.2rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
    letterSpacing: "1px",
  },
  subtitle: {
    fontSize: "1.1rem",
    fontWeight: 400,
    marginBottom: "2rem",
    color: "#555",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    fontSize: "1rem",
  },
  infoItem: {
    lineHeight: "1.6",
  },
  link: {
    color: "#1565C0",
    textDecoration: "none",
    transition: "all 0.2s ease",
  },
};

export default Contact;

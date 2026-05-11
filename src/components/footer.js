// src/components/Footer.jsx

import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* Brand Section */}
        <div style={styles.brand}>
          <h2 style={styles.logo}><i>AI-Casa</i></h2>
          <p style={styles.tagline}>
            Building innovative solutions at the intersection of AI and real-world impact.
          </p>
        </div>

        {/* Links Section */}
        <div style={styles.columns}>
          <div style={styles.column}>
            <h4 style={styles.title}>Navigation</h4>
            <a href="#" style={styles.link}>Home</a>
            <a href="#" style={styles.link}>Projects</a>
            <a href="#" style={styles.link}>About</a>
          </div>

          <div style={styles.column}>
            <h4 style={styles.title}>Connect</h4>
            <a href="mailto:basit1857msse@gmail.com" style={styles.link}>Email</a>
            <a href="https://linkedin.com" style={styles.link}>LinkedIn</a>
          </div>

          <div style={styles.column}>
            <h4 style={styles.title}>Focus</h4>
            <p style={styles.text}>
              AI Research<br />
              Real-world Systems<br />
              Product Development
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div style={styles.bottom}>
          © {new Date().getFullYear()} AI-Casa. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "linear-gradient(135deg, #0a192f, #112d4e, #1f4068)",
    color: "white",
    padding: "4rem 2rem 2rem",
    marginTop: "auto",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },

  brand: {
    textAlign: "center",
    marginBottom: "3rem",
  },

  logo: {
    margin: 0,
    fontSize: "2rem",
    letterSpacing: "1px",
  },

  tagline: {
    opacity: 0.8,
    marginTop: "0.5rem",
    maxWidth: "500px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  columns: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "2rem",
  },

  column: {
    flex: "1",
    minWidth: "200px",
  },

  title: {
    marginBottom: "1rem",
    fontSize: "1rem",
    color: "#90caf9",
    letterSpacing: "1px",
  },

  link: {
    display: "block",
    color: "white",
    textDecoration: "none",
    marginBottom: "0.6rem",
    opacity: 0.8,
    transition: "0.2s",
  },

  text: {
    opacity: 0.8,
    lineHeight: "1.6",
  },

  bottom: {
    marginTop: "3rem",
    textAlign: "center",
    fontSize: "0.85rem",
    opacity: 0.6,
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: "1.5rem",
  },
};

export default Footer;

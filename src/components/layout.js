// src/components/Layout.jsx

import Project from "./projects.js";
import Contact from "./contact.js";
import Login from "./login.js";

import Service from "./services.js";
import Blog from "./blog.js";
import profPic from "../assets/profilePic.jpeg";
import Home from "./pages/home.js";
import React, { useState } from "react";
import Footer from "./footer.js";
const Layout = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        
        <div style={styles.navLeft}>
          <h1 style={styles.title}><i>AI-Casa</i></h1>

          <div style={styles.navButtons}>
            <button
              onClick={() => setCurrentPage("home")}
              style={{
                ...styles.navButton,
                ...(currentPage === "home" && styles.activeButton),
              }}
            >
              Home
            </button>

            <button
              onClick={() => setCurrentPage("projects")}
              style={{
                ...styles.navButton,
                ...(currentPage === "projects" && styles.activeButton),
              }}
            >
              Projects
            </button>
        
        
        
        
        
        <button
              onClick={() => setCurrentPage("blog")}
              style={{
                ...styles.navButton,
                ...(currentPage === "blog" && styles.activeButton),
              }}
            >
             Blog
            </button>
        
        
        
        
        
        
        
        
        
        <button
              onClick={() => setCurrentPage("services")}
              style={{
                ...styles.navButton,
                ...(currentPage === "services" && styles.activeButton),
              }}
            >
              Services
            </button>
        
        
        
        
        
        
        
        
        <button
              onClick={() => setCurrentPage("contact")}
              style={{
                ...styles.navButton,
                ...(currentPage === "contact" && styles.activeButton),
              }}
            >
              contact
            </button>
        
        
        <button
              onClick={() => setCurrentPage("login")}
              style={{
                ...styles.navButton,
                ...(currentPage === "login" && styles.activeButton),
              }}
            >
              login
            </button>
        
        
        
        
          </div>
        </div>

      </header>

      
      <main style={styles.main}>{children}</main>

      {currentPage === "home" && <Home />}
      {currentPage === "projects" && <Project />}
	{currentPage === "contact" && <Contact />}	
		{currentPage === "services" && <Service />}	
				{currentPage === "blog" && <Blog />}	
				{currentPage === "login" && <Login />}	
<Footer/>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Arial, sans-serif",
  },

  header: {
    padding: "1rem 2rem",
    background: "linear-gradient(135deg, #1565C0, #0D47A1)",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  navLeft: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
  },

  title: {
    margin: 0,
    fontWeight: 600,
  },

  navButtons: {
    display: "flex",
    gap: "1rem",
  },

  navButton: {
    background: "transparent",
    border: "2px solid rgba(255,255,255,0.5)",
    color: "white",
    padding: "8px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: 500,
    transition: "all 0.25s ease",
  },

  activeButton: {
    background: "white",
    color: "#1565C0",
    border: "2px solid white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },

  profileImage: {
    width: "80px",
    height: "100px",
    borderRadius: "12px",
    objectFit: "cover",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  },

  main: {
    flex: 1,
    padding: "2rem",
  },

  footer: {
    padding: "1rem",
    background: "#f2f2f2",
    textAlign: "center",
  },
};

export default Layout;

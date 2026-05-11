import React, { useState } from "react";
import myImage from "../assets/banking_with_blockchain.jpeg";
export default function SlidingPanel() {
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.4)",
      opacity: isOpen ? 1 : 0,
      visibility: isOpen ? "visible" : "hidden",
      transition: "opacity 0.3s ease",
    },

    panel: {
      position: "fixed",
      top: 0,
      right: isOpen ? "0" : "-650px",
      width: "540px",
      height: "100vh",
      background: "#fff",
      boxShadow: "-2px 0 12px rgba(0,0,0,0.2)",
      transition: "right 0.3s ease",
      display: "flex",
      flexDirection: "column",
    },

    header: {
      padding: "16px 20px",
      borderBottom: "1px solid #eee",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    closeBtn: {
      background: "none",
      border: "none",
      fontSize: "22px",
      cursor: "pointer",
    },

    body: {
      padding: "20px",
      flex: 1,
      overflowY: "auto",

      // 👈 moves scrollbar to LEFT side
      direction: "rtl",
    },

    content: {
      direction: "ltr", // keeps text normal
      fontSize:"12px",
      textAlign:"justify",
    },

    trigger: {
      color: "blue",
      fontSize: "20px",
      fontWeight: "600",
      margin: "20px",
      cursor: "pointer",
    },
    
    imageSlider:{
    height:"300px",
    width:"500px"
    }
  };

  return (
    <div>
      {/* Trigger */}
      <h2 style={styles.trigger} onClick={() => setIsOpen(true)}>
        Hot Tech News
      </h2>

      {/* Overlay */}
      <div style={styles.overlay} onClick={() => setIsOpen(false)} />

      {/* Sliding Panel */}
      <div style={styles.panel}>
        {/* Header */}
        <div style={styles.header}>
          
          <button style={styles.closeBtn} onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>

        {/* Scrollable Body */}
       			 <div style={styles.body}>
          				<div style={styles.content}>
            				<h3>🔥 Tech News (2026 Snapshot)</h3>
				
            				<p>
              				The technology landscape is evolving rapidly with AI, blockchain,
              				and next-generation computing reshaping global industries.
            				</p>
				
            				<p>
              				Artificial Intelligence is becoming the core infrastructure of
              				modern software systems, powering automation, analytics, and
              				decision-making across domains.
            				</p>
				
            				<p>
              				Companies are investing heavily in autonomous AI agents and
              				multi-model systems that can operate with minimal human input.
            				</p>
				
            				<p>
              				Blockchain technology is expanding beyond cryptocurrency into real
              				world asset tokenization, DeFi, and secure digital identity systems.
            				</p>
				
            				<p>
              				The convergence of AI and blockchain is enabling intelligent
              				financial systems capable of autonomous execution and optimization.
            				</p>
				
            				<p>
              				Overall, 2026 is shaping up to be a transition year toward an
              				AI-first, decentralized digital economy.
            				</p>
            				<div>
      						<img src={myImage} style={styles.imageSlider}alt="My Image" />
    			</div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

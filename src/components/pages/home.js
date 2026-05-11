// src/pages/Home.jsx
import React from "react";
import SliderPane from "../slider.js";

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Profile Section */}
      <section style={styles.profile}>
        
        <h1>What we do?</h1>
        <p style={styles.intropara}>AI-Casa is a research-driven initiative focused on the convergence of artificial intelligence and blockchain systems.
			Our mission is to build intelligent, transparent, and scalable digital infrastructures for next-generation applications.
			We aim to transform complex data into actionable insights through advanced AI and distributed ledger technologies.
			Innovation, research, and real-world impact drive everything we develop and deploy.
			We foster a culture of deep technical exploration, collaboration, and continuous learning.
			At NeuroLedger, we build systems that shape the future of decentralized intelligence.</p>
 
 
        <h1>Innovative Impact</h1>
        <p style={styles.summary}>
        Our innovation as an AI–blockchain startup is reshaping how businesses operate by combining intelligent automation with secure, transparent data systems. By leveraging AI, we enable faster decision-making, predictive insights, and personalized user experiences that drive efficiency across industries. At the same time, blockchain technology ensures trust, immutability, and decentralization, reducing fraud and enhancing data integrity. Together, these technologies create a powerful ecosystem where processes become smarter, more reliable, and cost-effective. Our solutions empower organizations to streamline operations, improve accountability, and unlock new revenue opportunities. We also contribute to building a more inclusive digital economy by enabling secure access to financial and technological services. Furthermore, our innovation supports sustainability by optimizing resource use and reducing operational waste. Ultimately, we are driving a future where technology is not only advanced but also trustworthy and accessible for all.

</p>
 
 
 
 
        			
        			<h1>Our Team</h1>
        			<h3>Abdul Basit</h3>
        
        <p style={styles.role}>Blockchain-AI Engineer</p>
        
        <p style={styles.summary}>
          Blockchain AI Engineer focused on designing and developing intelligent systems that integrate machine learning with decentralized blockchain networks.
Builds secure, scalable, and data-driven solutions to power next-generation AI-enabled decentralized applications.
        
        </p><p style={styles.summary}>A Blockchain AI Engineer specializes in bridging the gap between artificial intelligence and decentralized technologies. By combining machine learning algorithms with blockchain infrastructure, they create systems that are not only intelligent but also transparent, secure, and tamper-resistant. This unique blend of technologies enables the development of advanced decentralized applications that can learn, adapt, and operate autonomously across distributed networks.
</p><p style={styles.summary}>
Their work often involves designing AI-powered smart contracts, optimizing on-chain and off-chain data processing, and building predictive models that operate within decentralized ecosystems. They focus on ensuring scalability and efficiency while maintaining the core principles of blockchain such as immutability and trustlessness. This allows organizations to leverage AI capabilities without compromising data integrity or security.
</p><p style={styles.summary}>
In addition to development, a Blockchain AI Engineer plays a key role in system architecture and research. They evaluate emerging technologies, experiment with decentralized AI frameworks, and implement solutions that improve decision-making in Web3 environments. Their expertise contributes to building next-generation applications in areas like decentralized finance (DeFi), autonomous agents, supply chain optimization, and intelligent data marketplaces.
        
        
        
        </p>
      </section>

	
	
	<SliderPane/>

    </div>
  );
};





const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  profile: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  avatar: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem",
  },
  role: {
    color: "#555",
    fontWeight: "bold",
  },
  summary: {
    marginTop: "1rem",
    lineHeight: "1.6",
    textAlign:"justify",
    fontSize:"14px",
  },
  list: {
    paddingLeft: "1.2rem",
  },
  card: {
    background: "#f9f9f9",
    padding: "1rem",
    marginBottom: "1rem",
    borderRadius: "6px",
  },
nobullets: {
  listStyleType: "none",
  padding: 0,
  margin: 0,
},
intropara:{
textAlign:"justify",
fontSize:"14px",
}

};

export default Home;

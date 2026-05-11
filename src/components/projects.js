import React, { useState, useEffect } from "react";
import "../assets/projects.css";

const projects = [
  {
    id: 1,
    name: "German Restaurant Recommendation System",
    description:
      "A location-aware recommendation system designed to suggest German restaurants based on user preferences such as cuisine style, price range, ratings, and dietary constraints.",
    techStack: "Python, Scikit-learn, Pandas, Flask"
  },
  {
    id: 2,
    name: "Fraud Detection in Blockchain Transactions",
    description:
      "A machine learning-based fraud detection system that analyzes blockchain transaction patterns to identify anomalies.",
    techStack: "Python, ML, Graph Analysis, Blockchain APIs"
  },
  {
    id: 3,
    name: "Crypto Market Sentiment Analyzer",
    description:
      "An NLP system that analyzes crypto-related content and classifies sentiment (bullish, bearish, neutral).",
    techStack: "Python, NLP, Transformers, PyTorch"
  }
];

const shuffleArray = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const Project = () => {
  const [randomProjects, setRandomProjects] = useState([]);

  useEffect(() => {
    setRandomProjects(shuffleArray(projects));
  }, []);

  return (
    <div className="project-container">
      <h1>Projects</h1>

      <div className="project-grid">
        {randomProjects.map((proj) => (
          <div key={proj.id} className="project-card">
            <h3>{proj.name}</h3>
            <p className="desc">{proj.description}</p>

            <div className="tech">
              {proj.techStack.split(",").map((tech, i) => (
                <span key={i}>{tech.trim()}</span>
              ))}
            </div>

            <button className="view-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

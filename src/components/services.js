import React, { useState } from "react";
import "../assets/service.css";

const services = [
  {
    title: "Web Development",
    description: "Modern, responsive websites built with the latest technologies.",
    content:
      "We build high-performance, responsive, and scalable websites using modern technologies like React, Node.js, and cloud-based architectures. Our focus is on clean code, fast load times, and seamless user experience across all devices.",
    icon: "💻"
  },
  {
    title: "AI based applications",
    description: "Clean and user-focused AI tools.",
    content:
      "We design and develop intelligent AI-powered applications that solve real-world problems. From automation tools to predictive systems, our solutions are optimized for usability, accuracy, and performance.",
    icon: "🤖"
  },
  {
    title: "D-Apps Development",
    description: "Secure and scalable decentralized app solutions for your business.",
    content:
      "We create decentralized applications (DApps) built on blockchain technology. These systems ensure transparency, security, and scalability, enabling businesses to operate without centralized limitations.",
    icon: "⛓️"
  },
  {
    title: "Maintenance",
    description: "Reliable support and updates to keep things running.",
    content:
      "We provide ongoing maintenance, updates, and technical support to ensure your applications remain secure, up-to-date, and fully optimized. Our goal is to minimize downtime and maximize performance.",
    icon: "🛠️"
  }
];

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  // 👉 Full service view
  if (selectedService) {
    return (
      <div className="services-container">
        <button
          className="back-btn"
          onClick={() => setSelectedService(null)}
        >
          ← Back
        </button>

        <div className="service-full">
          <div className="icon" style={{ fontSize: "3rem" }}>
            {selectedService.icon}
          </div>

          <h1>{selectedService.title}</h1>

          <p className="service-description">
            {selectedService.description}
          </p>

          <p
            className="service-content"
            style={{ whiteSpace: "pre-wrap", marginTop: "15px" }}
          >
            {selectedService.content}
          </p>
        </div>
      </div>
    );
  }

  // 👉 Default grid view
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p className="subtitle">
        We provide high-quality solutions tailored to your needs.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <button
              className="learn-btn"
              onClick={() => setSelectedService(service)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

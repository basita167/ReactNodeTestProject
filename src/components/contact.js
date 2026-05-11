import React, { useState } from "react";
import "../assets/contact.css";

function Contact() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!form.username) newErrors.username = "Name is required";
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!form.message) newErrors.message = "Message is required";
    return newErrors;
  };


    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 
 const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();

  if (Object.keys(validationErrors).length === 0) {
    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        setForm({ username: "", email: "", message: "" });
        setErrors({});
      } else {
        alert(data.error);
      }

    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  } else {
    setErrors(validationErrors);
  }
};
 
 
 
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Us</h2>

        {submitted && <p className="success">Message sent successfully!</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="username"
              placeholder="Your Name"
              value={form.username}
              onChange={handleChange}
            />
            {errors.username && <span>{errors.username}</span>}
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>

          <div className="input-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span>{errors.message}</span>}
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

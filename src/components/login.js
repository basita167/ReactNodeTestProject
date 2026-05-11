import React, { useState } from "react";
import "../assets/contact.css";
import AdminDashboard from "./adminDashboard";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logs, setLogs] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (data.success) {
        setLogs(data.logs);     // 🔥 store logs
        setIsLoggedIn(true);    // switch to dashboard
      } else {
        setError("Invalid credentials");
      }

    } catch (err) {
      setError("Server error");
    }
  };

  if (isLoggedIn) {
    return <AdminDashboard logs={logs} />;
  }

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Admin Dashboard</h2>
        <p className="subtitle">Please login to your account</p>

        <form onSubmit={handleSubmit}>
          <input
            className="login-input"
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />

          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

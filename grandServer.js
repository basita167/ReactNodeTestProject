const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// =========================
// FILE PATHS
// =========================
const logFilePath = path.join(__dirname, "logs.json");
const userFilePath = path.join(__dirname, "userCreadentials.json");

// =========================
// INIT LOG FILE
// =========================
if (!fs.existsSync(logFilePath)) {
  fs.writeFileSync(
    logFilePath,
    JSON.stringify({ logs: [] }, null, 2)
  );
}

// =========================
// CONTACT ROUTE
// =========================
app.post("/contact", (req, res) => {
  const { username, email, message } = req.body;

  if (!username || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  const newEntry = {
    username,
    email,
    message,
    timestamp: new Date().toISOString()
  };

  try {
    const fileData = fs.readFileSync(logFilePath, "utf-8");

    let data;
    try {
      data = JSON.parse(fileData);
    } catch {
      data = { logs: [] };
    }

    if (!Array.isArray(data.logs)) {
      data.logs = [];
    }

    data.logs.push(newEntry);

    fs.writeFileSync(
      logFilePath,
      JSON.stringify(data, null, 2)
    );

    res.json({
      success: true,
      message: "Message saved successfully"
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

// =========================
// LOGIN + ADMIN LOGS ROUTE
// =========================
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  try {
    const usersData = fs.readFileSync(userFilePath, "utf-8");
    const users = JSON.parse(usersData).users;

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    // read logs
    const logData = fs.readFileSync(logFilePath, "utf-8");
    const logs = JSON.parse(logData).logs;

    res.json({
      success: true,
      logs
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

// =========================
// START SERVER
// =========================
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

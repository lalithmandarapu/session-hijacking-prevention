const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const users = [{ id: 1, username: "admin", password: "password123" }];

// Login route
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
  });

  res.json({ message: "Logged in successfully" });
});

// Logout route
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});

// Protected route
router.get("/protected", (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ message: "Welcome to the protected route", user: verified });
  } catch {
    res.status(400).json({ message: "Invalid token" });
  }
});

module.exports = router;

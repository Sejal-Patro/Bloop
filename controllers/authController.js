const User = require("../models/User.js");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hash });
    await user.save();
    res.status(201).json({ message: "User registered" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    res.status(200).json({ message: "Login successful", username: user.username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
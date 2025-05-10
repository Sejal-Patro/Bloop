import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: "Username is required" });
  }

  // Dummy success response
  return res.json({ message: "Login successful", user: username });
});

export default router;

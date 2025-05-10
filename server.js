// Step 1: Load environment variables from .env
import dotenv from 'dotenv';
dotenv.config();

// Step 2: Import required modules
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Step 3: Import routes
import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoutes.js';

// Step 4: Initialize Express app
const app = express();

// Step 5: Middleware
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(cors());

// Step 6: Use routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// Step 7: Debug - Check what MONGO_URI is
console.log("Mongo URI:", process.env.MONGO_URI);

// Step 8: Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ MongoDB connected successfully");
}).catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});

// Step 9: Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

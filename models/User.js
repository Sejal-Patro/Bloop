import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String, // assuming for auth
});

export default mongoose.model('User', UserSchema);

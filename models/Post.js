import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: null
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model('Post', PostSchema);
export default Post;

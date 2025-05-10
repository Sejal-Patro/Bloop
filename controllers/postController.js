import Post from '../models/Post.js';

// Create a new post (with or without image)
export const createPost = async (req, res) => {
  const { username, content } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null;

  if (!username || !content) {
    return res.status(400).json({ error: 'Username and content are required.' });
  }

  try {
    const newPost = new Post({
      author: username,
      content,
      image: image || '',  // safer if no image
    });

    await newPost.save();
    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post.' });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching posts.' });
  }
};

export const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete post" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updated = await Post.findByIdAndUpdate(
      req.params.id,
      { content: req.body.content },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update post" });
  }
};

export const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.likes += 1;
    await post.save();
    res.status(200).json({ likes: post.likes });
  } catch (err) {
    res.status(500).json({ error: "Failed to like post" });
  }
};

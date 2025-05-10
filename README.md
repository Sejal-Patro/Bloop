 Bloop — A Social Media Platform with AI Chatbot
Welcome to Bloop!
Bloop is a modern social media platform that connects users, lets them share updates, search for friends, and chat with an integrated AI chatbot powered by OpenAI’s GPT.

 Features
 User authentication (login/signup)
 Add and search friends
 Post status updates
 Chat with an AI chatbot
 RESTful API using Express.js
 MongoDB database integration

🏗 Tech Stack
Frontend	Backend	Database
React.js	Node.js + Express.js	MongoDB

 Getting Started
1️ Clone the repo
bash
Copy
Edit
git clone https://github.com/yourusername/bloop.git
cd bloop
2️ Install dependencies
Backend
bash
Copy
Edit
cd backend
npm install
Frontend
bash
Copy
Edit
cd ../frontend
npm install
3️ Set up environment variables
Create a .env file in backend/ with:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_jwt_secret
 Replace with your actual keys.

4️ Run the app
Backend
bash
Copy
Edit
npm start
Frontend
bash
Copy
Edit
npm start
 AI Chatbot
The AI chatbot uses OpenAI’s GPT API to respond to user messages inside the chat interface.

Located at /chat route in frontend

Backend endpoint: POST /api/chatbot

Pass user prompt → returns AI-generated response

API Endpoints
Method	Endpoint	Description
GET	/api/users/search	Search users by name
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
POST	/api/chatbot	Send message to AI

 Project Structure
bash
Copy
Edit
/bloop
  /backend
    /models
    /routes
    /controllers
    /middleware
    server.js
  /frontend
    /src
    App.js
    index.js
 Contributing
Pull requests are welcome! For major changes, please open an issue first.

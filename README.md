# SuuSri AI Internship — Week 1 Project

## 📌 Project Name
SuuSri Internship — Week 1 Onboarding & Task Manager

## 👤 Intern
Swatismita Parida — Full-Stack Developer Intern

## 🛠️ Technology Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB Atlas (Mongoose)
- API Testing: Postman
- Version Control: Git & GitHub

## 📁 Folder Structure
suusri-internship/
├── frontend/
│   ├── about.html
│   ├── login.html
│   ├── dashboard.html
│   ├── tasks.html
│   ├── style.css
│   ├── script.js
│   └── tasks.js
├── backend/
│   ├── server.js
│   ├── .env
│   └── .gitignore
└── README.md

## 🚀 How to Run This Project

### Backend
1. Open terminal, go to the backend folder: cd backend
2. Install dependencies: npm install
3. Create a .env file with your MongoDB connection string:
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
4. Start the server: node server.js

### Frontend
1. Open the frontend folder in VS Code.
2. Right-click tasks.html → Open with Live Server.
3. The Task Manager app will open in your browser.

## ✅ Features Completed (Week 1)
- Understood SuuSri AI's products and internship project
- Set up complete development environment (VS Code, Git, Node.js, MongoDB, Postman)
- Practiced Git & GitHub workflow (branch → commit → push → PR → merge)
- Built a responsive frontend UI (navbar, login page, dashboard, sidebar, profile card)
- Built a full-stack Task Manager app:
  - Add a task
  - View all tasks
  - Delete a task
  - Backend REST APIs: GET /tasks, POST /tasks, DELETE /tasks/:id
  - Connected to MongoDB Atlas

## 🔗 API Endpoints
| Method | Endpoint    | Description          |
|--------|-------------|------------------------|
| GET    | /tasks      | Get all tasks          |
| POST   | /tasks      | Add a new task          |
| DELETE | /tasks/:id  | Delete a task by ID    |
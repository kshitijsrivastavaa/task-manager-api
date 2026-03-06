# Task Manager API – Backend Developer Assignment

A scalable full-stack application built as part of a **Backend Developer Intern assignment**. The project demonstrates backend API design, authentication, security practices, and frontend integration using modern web technologies.

---

## 👨‍💻 Author

**Name:** Kshitij Srivastava  
**Email:** kshitij.srivastava16@gmail.com  

---

## 📌 Project Overview

This project implements a **secure and scalable REST API** with authentication and role-based access control. It includes a basic frontend interface to interact with the backend APIs.

Users can register, log in, and manage tasks using protected API endpoints secured with JWT authentication.

---

## 🚀 Features

### Authentication
- User registration
- User login
- Password hashing using bcrypt
- JWT-based authentication
- Secure protected routes

### Role-Based Access Control
- User role management
- Middleware for authorization
- Admin-only protected routes

### Task Management (CRUD APIs)
Users can:

- Create tasks
- View tasks
- Update tasks
- Delete tasks

### API Versioning

All endpoints follow versioning structure:


/api/v1/


Example endpoints:


POST /api/v1/auth/register
POST /api/v1/auth/login
GET /api/v1/tasks
POST /api/v1/tasks
PUT /api/v1/tasks/:id
DELETE /api/v1/tasks/:id


### Frontend UI

A simple React frontend allows users to:

- Login
- Access protected dashboard
- Create tasks
- View task list

---

## 📄 API Documentation

Swagger API documentation is available at:


http://localhost:5000/api-docs


---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- Swagger API documentation

### Frontend
- React
- Axios
- Vite

---

## 📂 Project Structure


task-manager-api
│
├── backend
│ ├── config
│ │ └── swagger.js
│ ├── controllers
│ ├── middleware
│ │ ├── auth.js
│ │ ├── admin.js
│ │ └── errorHandler.js
│ ├── models
│ ├── routes
│ ├── server.js
│ └── package.json
│
├── frontend
│ ├── src
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── index.html
│
└── README.md


---

## ⚙️ Installation Guide

### 1. Clone the Repository


git clone https://github.com/kshitijsrivastavaa/task-manager-api.git

cd task-manager-api


---

## Backend Setup


cd backend
npm install


Create `.env` file:


MONGO_URI=mongodb://127.0.0.1:27017/taskmanager
JWT_SECRET=supersecret123
PORT=5000


Run backend server:


npm run dev


Backend will run at:


http://localhost:5000


---

## Frontend Setup


cd frontend
npm install
npm run dev


Frontend runs at:


http://localhost:5173


---

## 🔐 Security Features

- Password hashing using bcrypt
- JWT authentication
- Protected API routes
- Role-based access control

---

## 📈 Scalability Considerations

The system can scale using:

- Redis caching
- Microservices architecture
- Docker containerization
- Load balancing
- Kubernetes orchestration

---

## 📬 Contact

**Kshitij Srivastava**  
Email: kshitij.srivastava16@gmail.com  

---

⭐ If you found this project useful, feel free to star the repository.

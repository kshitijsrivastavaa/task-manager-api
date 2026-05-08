# 🚀 Task Manager API — Secure Full-Stack Task Management System

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/Express.js-REST_API-black?style=for-the-badge" />
  <img src="https://img.shields.io/badge/MongoDB-Database-brightgreen?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/JWT-Authentication-red?style=for-the-badge" />
  <img src="https://img.shields.io/badge/React-Frontend-blue?style=for-the-badge&logo=react" />
</p>

<p align="center">
  <b>Production-Style Full-Stack Task Management System with Authentication, RBAC & Secure REST APIs</b>
</p>

---

# 📌 Overview

Task Manager API is a scalable full-stack application built as part of a Backend Developer assignment to demonstrate:

* Secure backend API architecture
* Authentication & authorization workflows
* REST API engineering
* Role-Based Access Control (RBAC)
* Frontend-backend integration
* Scalable project structure

The system allows users to register, authenticate, and manage tasks securely through protected API endpoints.

---

# ✨ Core Features

## 🔐 Authentication & Security

* JWT-based authentication
* Secure password hashing using bcrypt
* Protected API routes
* Authorization middleware
* Persistent user sessions

## 👥 Role-Based Access Control (RBAC)

* Admin & user role support
* Middleware-based authorization
* Admin-only protected operations
* Secure route access management

## ✅ Task Management System

Users can:

* Create tasks
* Update tasks
* Delete tasks
* View all tasks
* Manage task lifecycle securely

## ⚙️ REST API Architecture

* Versioned API structure
* Modular backend architecture
* Middleware-driven request handling
* Error handling pipeline
* Secure authentication flows

## 🌐 Frontend Integration

Simple React frontend supporting:

* Login authentication
* Protected dashboard access
* Task creation & management
* API interaction workflows

---

# 🛠 Tech Stack

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt
* Swagger API Documentation

## Frontend

* React.js
* Vite
* Axios

---

# 🧠 System Highlights

* Clean backend architecture
* Modular route organization
* Middleware-based security model
* Scalable API structure
* Separation of concerns
* Production-oriented project structure

---

# 📂 Project Structure

```bash
Task-Manager-API/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── swagger.js
│
├── frontend/
│   ├── src/
│   ├── App.jsx
│   └── main.jsx
│
└── README.md
```

---

# 🔌 API Endpoints

## Authentication

| Method | Endpoint                |
| ------ | ----------------------- |
| POST   | `/api/v1/auth/register` |
| POST   | `/api/v1/auth/login`    |

## Tasks

| Method | Endpoint            |
| ------ | ------------------- |
| GET    | `/api/v1/tasks`     |
| POST   | `/api/v1/tasks`     |
| PUT    | `/api/v1/tasks/:id` |
| DELETE | `/api/v1/tasks/:id` |

---

# 📄 API Documentation

Swagger documentation available at:

```bash
http://localhost:5000/api-docs
```

---

# ⚙️ Environment Variables

## Backend `.env`

```env
MONGO_URI=mongodb://127.0.0.1:27017/taskmanager
JWT_SECRET=your_secret_key
PORT=5000
```

---

# 🚀 Local Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/kshitijsrivastavaa/task-manager-api.git
cd task-manager-api
```

---

## 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs at:

```bash
http://localhost:5000
```

---

## 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```bash
http://localhost:5173
```

---

# 🔒 Security Features

* JWT authentication
* Password hashing using bcrypt
* Protected API routes
* Authorization middleware
* Role-based access control

---

# 📈 Scalability Considerations

Architecture can be extended with:

* Redis caching
* Docker containerization
* Kubernetes orchestration
* Load balancing
* Microservices migration
* Horizontal backend scaling

---

# 🧪 Example API Flow

```bash
1. Register User
2. Login User
3. Receive JWT Token
4. Access Protected Routes
5. Perform CRUD Operations on Tasks
```

---

# 👨‍💻 Author

## Kshitij Srivastava

* GitHub: [https://github.com/kshitijsrivastavaa](https://github.com/kshitijsrivastavaa)
* Email: [kshitij.srivastava16@gmail.com](mailto:kshitij.srivastava16@gmail.com)

---

# ⭐ Support

If you found this project useful, consider giving it a star.

```bash
⭐ Star the repository on GitHub
```

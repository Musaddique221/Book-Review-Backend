# 📘 Book Review Backend API

This is the **backend** service for a Book Review web application, built using **Node.js**, **Express.js**, and **MongoDB**. It provides APIs for user authentication, book management, and review operations.

---

## 🚀 Features

- 🔐 User authentication (Signup/Login with JWT)
- 📚 CRUD operations for books
- ✍️ Add, update, delete book reviews
- 🧾 RESTful API architecture
- 🛡️ Protected routes using middleware
- 🗃️ MongoDB with Mongoose for schema modeling

---

## 🗂️ Source Code

- **Modular structure**: Organized by `controllers`, `routes`, `models`, and `middleware`.
- **Environment variables** are used for secrets and database configuration.
- **Helpful comments** are added to important logic for better understanding and maintainability.

---

## 🛠️ Technologies

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- dotenv
- bcryptjs

---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/Musaddique221/Book-Review-Backend.git
cd backend
npm install
create .env file


PORT=5000
MONGO_URI=mongodb+srv://musaddiqueshaikh900:z45T47dG7ZWEmQ8D@book-review.fjodvxp.mongodb.net/
JWT_SECRET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

npm run dev

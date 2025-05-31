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


🧪 API Examples

user signup
curl -X POST http://localhost:5000/users/signup \
-H "Content-Type: application/json" \
-d '{"name": "John Doe", "email": "john@example.com","phoneNumber": "9004375387:, "password": "123456"}'

User Login

curl -X POST http://localhost:5000/users/login \
-H "Content-Type: application/json" \
-d '{"email": "john@example.com", "password": "123456"}'

 Book API Examples

 curl -X POST http://localhost:5000/books \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_JWT_TOKEN" \
-d '{
  "title": "Atomic Habits",
  "author": "James Clear",
  "genre": "Self-help",
  "description": "An easy & proven way to build good habits & break bad ones."
}'


get all boooks
curl -X GET http://localhost:5000/books

 Get Book by ID

 curl -X GET http://localhost:5000/books/BOOK_ID



 ✍️REVIEW API EXAMPLE
 create review
 curl -X POST http://localhost:5000/reviews/BOOK_ID/reviews \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_JWT_TOKEN" \
-d '{
  "rating": 5,
  "comment": "Excellent book. Highly recommend!"
}'


2. Get All Reviews for a Book
curl -X GET http://localhost:5000/reviews/BOOK_ID/reviews


✏️ 3. Update a Review (Protected)

curl -X PUT http://localhost:5000/reviews/REVIEW_ID \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_JWT_TOKEN" \
-d '{
  "rating": 4,
  "comment": "Updated my rating after a second read."
}'


❌ 4. Delete a Review (Protected)
curl -X DELETE http://localhost:5000/reviews/REVIEW_ID \
-H "Authorization: Bearer YOUR_JWT_TOKEN"


Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...









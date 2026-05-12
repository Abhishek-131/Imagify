# 🎨 Text To Image Generator

An AI-powered full-stack web application that generates images from user text prompts.  
This project allows users to create AI-generated images with a modern responsive interface, secure authentication, payment integration, and cloud-based backend services.

---

# 🚀 Live Demo

Live : https://imagify-teal-delta.vercel.app/

---

# 📌 Project Overview

The **Text To Image Generator** is a full-stack MERN-based application where users can:

- Register and login securely
- Generate AI images using text prompts
- Purchase credits/subscriptions using Razorpay
- Access a responsive and animated UI
- Store user data securely in MongoDB

This project demonstrates:
- Full Stack Web Development
- REST API Development
- Authentication & Authorization
- Payment Gateway Integration
- Frontend + Backend Deployment

---

# 🛠️ Tech Stack

## Frontend Technologies

| Technology | Purpose |
|------------|----------|
| React.js | Frontend Library |
| Vite | Fast Build Tool |
| Tailwind CSS | Styling |
| React Router DOM | Routing |
| Axios | API Requests |
| Framer Motion | Animations |
| React Toastify | Notifications |

---

## Backend Technologies

| Technology | Purpose |
|------------|----------|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| JWT | Authentication |
| bcrypt | Password Hashing |
| Razorpay | Payment Integration |
| dotenv | Environment Variables |

---

# 📂 Folder Structure

```bash
Text-To-Image-Generator/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ✨ Features

## 👤 Authentication System

- User Registration
- User Login
- JWT Authentication
- Password Encryption using bcrypt
- Protected Routes

---

## 🖼️ AI Image Generation

- Generate images using text prompts
- Real-time API communication
- Fast image rendering
- User-friendly interface

---

## 💳 Payment Integration

- Razorpay payment gateway integration
- Credit purchasing system
- Secure payment handling

---

## 📱 Responsive Design

- Mobile-friendly layout
- Tablet support
- Desktop optimization
- Smooth animations using Framer Motion

---

# ⚙️ Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/abhishek-131/imagify.git
```

```bash
cd imagify
```

---

# 2️⃣ Frontend Setup

## Navigate to Client Folder

```bash
cd client
```

## Install Dependencies

```bash
npm install
```

## Run Frontend

```bash
npm run dev
```

Frontend will run on:

```bash
http://localhost:5173
```

---

# 3️⃣ Backend Setup

## Navigate to Server Folder

```bash
cd server
```

## Install Dependencies

```bash
npm install
```

## Create Environment File

Create a `.env` file inside the server folder.

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key

RAZORPAY_KEY_ID=your_razorpay_key_id

RAZORPAY_KEY_SECRET=your_razorpay_secret
```

---

## Start Backend Server

### Development Mode

```bash
npm run server
```

### Production Mode

```bash
npm start
```

Backend will run on:

```bash
http://localhost:4000
```

---

# 📦 Frontend Dependencies

```json
{
  "dependencies": {
    "@tailwindcss/vite": "^4.1.5",
    "axios": "^1.9.0",
    "motion": "^12.11.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.5.3",
    "react-toastify": "^11.0.5"
  }
}
```

---

# 📦 Backend Dependencies

```json
{
  "dependencies": {
    "axios": "^1.9.0",
    "bcrypt": "^6.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.5.0",
    "express": "^5.1.0",
    "form-data": "^4.0.2",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^6.16.0",
    "mongoose": "^8.14.3",
    "nodemon": "^3.1.10",
    "razorpay": "^2.9.6"
  }
}
```

---

# 🌐 API Endpoints

# 🔐 Authentication APIs

## Register User

```http
POST /api/user/register
```

### Request Body

```json
{
  "name": "Abhishek",
  "email": "abhishek@gmail.com",
  "password": "123456"
}
```

---

## Login User

```http
POST /api/user/login
```

### Request Body

```json
{
  "email": "abhishek@gmail.com",
  "password": "123456"
}
```

---

# 🖼️ Image APIs

## Generate Image

```http
POST /api/image/generate
```

### Request Body

```json
{
  "prompt": "A futuristic city at night"
}
```

---

# 💳 Payment APIs

## Create Razorpay Order

```http
POST /api/payment/create-order
```

---

# 🔒 Environment Variables

| Variable | Description |
|----------|-------------|
| PORT | Server Port |
| MONGODB_URI | MongoDB Connection String |
| JWT_SECRET | JWT Secret Key |
| RAZORPAY_KEY_ID | Razorpay Public Key |
| RAZORPAY_KEY_SECRET | Razorpay Secret Key |

---

# ☁️ Deployment

# Frontend Deployment

Recommended Platforms:

- Vercel
- Netlify

## Build Frontend

```bash
npm run build
```

---

# Backend Deployment

Recommended Platforms:

- Render
- Railway
- Cyclic

---

# 📸 Screenshots

## Home Page

Add screenshot here

```bash
screenshots/home.png
```

---

## Login Page

Add screenshot here

```bash
screenshots/login.png
```

---

## Generate Image Page

Add screenshot here

```bash
screenshots/generate.png
```

---

# 🔥 Future Enhancements

- AI Style Selection
- Download Generated Images
- Prompt History
- User Dashboard
- Dark Mode
- Multiple Image Generation
- AI Image Gallery
- Social Sharing Feature

---

# 🧠 Learning Outcomes

Through this project, you can learn:

- MERN Stack Development
- Authentication Systems
- REST API Development
- MongoDB Integration
- Payment Gateway Integration
- Deployment Process
- State Management
- Responsive UI Design

---

# 👨‍💻 Author

## Abhishek Kumar

- MCA Student at Maulana Azad National Institute of Technology, Bhopal
- Full Stack Web Developer
- Passionate about MERN Stack & Software Development

---

# 🤝 Contribution

Contributions are welcome.

## Steps to Contribute

### 1. Fork the repository

### 2. Create a new branch

```bash
git checkout -b feature-name
```

### 3. Commit changes

```bash
git commit -m "Add new feature"
```

### 4. Push to GitHub

```bash
git push origin feature-name
```

### 5. Create Pull Request

---

# 🐛 Common Issues

## MongoDB Connection Error

Check:

- Internet connection
- MongoDB URI
- Whitelist IP in MongoDB Atlas

---

## CORS Error

Ensure backend CORS configuration allows frontend URL.

---

## Razorpay Payment Failure

Check:

- Razorpay keys
- Test mode enabled
- Valid order creation

---

# 📄 License

This project is licensed under the MIT License.

---

# ⭐ Support

If you like this project:

- Give this repository a ⭐
- Share with others
- Follow for more projects

---

# 📬 Contact

## Abhishek Kumar

Email: nitbabhishek131@gmail.com

LinkedIn: https://linkedin.com/in/abhishekkumar131

GitHub: https://github.com/abhishek-131

---

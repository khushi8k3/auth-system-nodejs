# Node.js Authentication & Authorization Boilerplate

A complete authentication and authorization system built with Node.js and Express. Includes user registration, secure login, email verification, password reset, access & refresh token handling, cookie-based token storage, and protected routes.

---

## 🚀 Features

- **User Registration** with email verification
- **User Login** with secure JWT authentication
- **Password Management** (change password, forgot & reset)
- **Email Verification** via token link
- **Token Management** with access & refresh token cycle
- **HTTP-only Cookies** for secure token handling
- **Protected Routes** for authenticated users
- **Logout** and token invalidation

---

## 📍 Authentication Routes (`/api/v1/auth/`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | User registration |
| POST | `/login` | User login |
| POST | `/logout` | User logout (secured) |
| GET  | `/current-user` | Get current user (secured) |
| POST | `/change-password` | Change password (secured) |
| POST | `/refresh-token` | Refresh access token |
| GET  | `/verify-email/:verificationToken` | Email verification |
| POST | `/forgot-password` | Request password reset |
| POST | `/reset-password/:resetToken` | Reset forgotten password |
| POST | `/resend-email-verification` | Resend verification email (secured) |

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB / Mongoose
- JWT (JSON Web Tokens)
- Bcrypt for hashing
- Nodemailer for sending emails
- **Cookie-Parser** for secure token cookies

---

## 📦 Installation

```bash
git clone https://github.com/your-username/node-auth-boilerplate.git
cd node-auth-boilerplate
npm install

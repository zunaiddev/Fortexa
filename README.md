# 📩 Fotexa – Secure Chat Application

Fotexa is a **real-time, end-to-end encrypted chat application** built with a focus on **security, privacy, and user
control**. It allows users to create secure accounts, chat with friends, and manage their data with complete ownership.

---

## 🚀 Features

- 🔐 **Secure Account Creation** – Sign up with a username, name, and strong password.
- 📧 **Optional Email Verification** – Users may add an email for account recovery (not mandatory).
- 📨 **End-to-End Encryption** – Messages remain private between sender and receiver.
- 💬 **Real-time Messaging** – Instant chat with friends and contacts.
- 🕵️ **Incognito Mode** – Create or join temporary rooms; chats are deleted once the session ends.
- 👤 **User Dashboard** – Recent chats, profile options, and search functionality.
- 🎨 **Dark Theme UI** – Modern and professional design to ensure a trustworthy user experience.

---

## 🖥️ Tech Stack

**Frontend**

- React.js (for building UI)
- Tailwind CSS (for styling)

**Backend**

- Spring Boot (REST APIs & WebSocket support)
- Spring Security (authentication & authorization)

**Database**

- MySQL

**Other Tools**

- JWT (authentication tokens)
- Socket.IO / WebSocket (real-time communication)

---

## 📂 Project Structure

```
fotexa/
│── frontend/       # React frontend
│── backend/        # Spring Boot backend
│── docs/           # Documentation
│── README.md       # Project documentation
```

---

## 🔑 Key Highlights

- Users have **full control of their data**.
- No forced email requirement – password recovery is optional.
- Chats in **Incognito Mode** vanish after the session ends.
- A **secure and modern** chat experience inspired by trusted platforms.

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/fotexa.git
cd fotexa
```

2. **Setup backend**
    - Go to the backend folder
    - Configure `application.properties` with your MySQL credentials
    - Run the Spring Boot application

3. **Setup frontend**
    - Navigate to frontend folder
    - Install dependencies
      ```bash
      npm install
      ```  
    - Start the development server
      ```bash
      npm start
      ```  

4. Open in browser at **http://localhost:3000**

---

## 🛡️ Security

Fotexa is designed with **privacy-first architecture**:

- Passwords are securely hashed.
- Messages use **end-to-end encryption**.
- No third-party access to user data.

---

## 📜 License

This project is licensed under the **MIT License** – feel free to use and modify.  

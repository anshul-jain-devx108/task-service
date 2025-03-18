
# Task Management Service with Google Calendar Sync

A full-stack Node.js application that manages tasks with automatic synchronization to Google Calendar. The service supports creating, updating, deleting, and retrieving tasks, while ensuring synchronization with Google Calendar.

---

## 📁 Folder Structure
```
/task-service/
│── src/
│   ├── config/
│   │   └── firebase.js
│   ├── controllers/
│   │   └── taskController.js
│   ├── models/
│   │   └── taskModel.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── services/
│   │   └── googleCalendarService.js
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── server.js
│── .env
│── Dockerfile
│── docker-compose.yml
│── package.json
│── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd task-service
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set up Environment Variables
Create a `.env` file in the root directory and provide the following configuration:

```env
PORT=3000
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
FIREBASE_API_KEY=<your-firebase-api-key>
FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
FIREBASE_PROJECT_ID=<your-firebase-project-id>
FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
FIREBASE_MESSAGING_SENDER_ID=<your-firebase-sender-id>
FIREBASE_APP_ID=<your-firebase-app-id>
```

---

## 🚀 Run Locally

### Using Docker:
```bash
docker-compose up --build
```

### Without Docker:
```bash
node src/server.js
```

---

## 📄 API Documentation

### Base URL:
```
http://localhost:3000/api/tasks
```

### Routes:
1. **Create a Task (Sync to Google Calendar)**
   - **Endpoint:** `/`
   - **Method:** POST
   - **Headers:** Authorization: Bearer <access_token>
   - **Body:**
   ```json
   {
     "title": "Task Title",
     "dueDate": "2025-04-01T10:00:00Z"
   }
   ```

2. **Get All Tasks by User**
   - **Endpoint:** `/`
   - **Method:** GET
   - **Headers:** Authorization: Bearer <access_token>

3. **Get Task by ID**
   - **Endpoint:** `/:id`
   - **Method:** GET
   - **Headers:** Authorization: Bearer <access_token>

4. **Update a Task (Google Calendar Sync)**
   - **Endpoint:** `/:id`
   - **Method:** PUT
   - **Headers:** Authorization: Bearer <access_token>
   - **Body:**
   ```json
   {
     "title": "Updated Task Title",
     "dueDate": "2025-04-05T15:00:00Z"
   }
   ```

5. **Delete a Task (Removes from Google Calendar)**
   - **Endpoint:** `/:id`
   - **Method:** DELETE
   - **Headers:** Authorization: Bearer <access_token>

---

## 🔑 Authentication

- Ensure you have a valid **Google OAuth Access Token**.
- Include the token in the request header:
```
Authorization: Bearer <access_token>
```

---

## 🛠️ Technologies Used
- Node.js with Express
- Firebase Firestore
- Google Calendar API
- Docker & Docker Compose

---

## 🧩 Future Enhancements
- User authentication with refresh tokens.
- Enhanced error handling.
- Detailed logging mechanism.

---

## 📧 Support
For any issues or support, feel free to reach out!

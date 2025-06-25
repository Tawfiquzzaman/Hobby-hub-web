# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


1. This website is based on hobbies
2. This Website has some beautiful groups
3. User can add groups here
4. user can create account and make their own groups
5. User can also update their groups.

Live url: nimble-parfait-4eb680.netlify.app
=======
Project Live Link: https://nimble-parfait-4eb680.netlify.app/

Description:
Hobby-hub is a full-stack web application built with ReactJS and MongoDB, where users can create, join, and manage hobby-based groups. The platform supports secure authentication, real-time group updates, and a clean user interface for hobby enthusiasts to connect and collaborate.

Home Screen:
![image](https://github.com/user-attachments/assets/71e1cdc4-a697-4410-b63d-db3cc33fe033)

## 🛠️ Technology Stack

### ⚙️ Frontend
- ReactJS
- React Router
- Axios
- Tailwind CSS
- SweetAlert2
- Lottie Animations

### 🖥️ Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### 🔐 Authentication & Security
- Firebase Authentication (Email/Password, Google, GitHub)
- JSON Web Tokens (JWT)

### ☁️ Deployment
- Netlify (Frontend)
- Render / Heroku (Backend)

## Main Features
1. User can add hobby groups
2. User can modify groups
3. user can do CRUD operation with his added groups.
4. User can join to the groups

   and so on......

## 📦 Dependencies

### 💻 Frontend
- **react** – Core library for building user interfaces
- **react-dom** – DOM rendering support for React
- **react-router-dom** – Routing and navigation handling
- **axios** – For making HTTP requests to the backend
- **firebase** – Authentication (Email/Password, Google, GitHub)
- **jwt-decode** – Decode JSON Web Tokens for auth
- **lottie-react** – For adding animated illustrations
- **sweetalert2** – Stylish pop-up alerts and modals
- **react-helmet** – Manage document head (title/meta)
- **tailwindcss** – Utility-first CSS framework for responsive UI

### 🛠️ Backend (If applicable or in a separate repo)
- **express** – Node.js framework for building REST APIs
- **mongoose** – MongoDB object modeling for Node.js
- **cors** – Middleware to enable Cross-Origin Resource Sharing
- **dotenv** – Load environment variables from a `.env` file
- **jsonwebtoken** – For issuing and verifying JWTs
- **bcryptjs** – Password hashing and salting

> 🔍 *Use `npm install` or `yarn` to install all dependencies listed in `package.json`.*


## 🚀 How to Run This Project Locally

Follow the steps below to set up and run **Hobby-hub** on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/hobby-hub.git
cd hobby-hub

## Install Dependencies
npm install

##Configure Environment Variables
VITE_API_BASE_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

## Start the React App
npm run dev
The app will run at: http://localhost:5173


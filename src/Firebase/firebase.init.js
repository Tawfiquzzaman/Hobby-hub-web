// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6GVWkQE9G2w0xbGv-oLOW6R1wz2Wfe7g",
  authDomain: "hobby-hub-web.firebaseapp.com",
  projectId: "hobby-hub-web",
  storageBucket: "hobby-hub-web.firebasestorage.app",
  messagingSenderId: "181483453886",
  appId: "1:181483453886:web:4348921c934391b3a14def"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
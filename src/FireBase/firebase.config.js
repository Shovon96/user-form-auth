// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIjPCzvSoI434kAs2f4aRp6AEicBbJEAg",
  authDomain: "user-form-auth.firebaseapp.com",
  projectId: "user-form-auth",
  storageBucket: "user-form-auth.appspot.com",
  messagingSenderId: "609339271469",
  appId: "1:609339271469:web:3618592f03fb2d6a97cba4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
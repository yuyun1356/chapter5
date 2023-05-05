// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOAgY6NUnVMb2gWXkt2mye-nT767AdjFM",
  authDomain: "watchmovie-e1479.firebaseapp.com",
  projectId: "watchmovie-e1479",
  storageBucket: "watchmovie-e1479.appspot.com",
  messagingSenderId: "315491701136",
  appId: "1:315491701136:web:e0ebfb5c53b3f585e7e315"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app
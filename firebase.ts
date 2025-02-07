// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7XsJrq7Jf7-TZ_JyxwmFj7YeLMDFyw8Y",
  authDomain: "shppers-yt-b0053.firebaseapp.com",
  projectId: "shppers-yt-b0053",
  storageBucket: "shppers-yt-b0053.firebasestorage.app",
  messagingSenderId: "964530168059",
  appId: "1:964530168059:web:6e322a1f6f1e80af03505e"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}

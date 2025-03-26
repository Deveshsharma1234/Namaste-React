
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3wv-8sgt6vIpP-WaGhLOdtxWPMsMpxJs",
  authDomain: "netflixgpt-f8e59.firebaseapp.com",
  projectId: "netflixgpt-f8e59",
  storageBucket: "netflixgpt-f8e59.firebasestorage.app",
  messagingSenderId: "539886566906",
  appId: "1:539886566906:web:7d58648c697b0c4494f843",
  measurementId: "G-XKCKPNWQJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
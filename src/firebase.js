import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHZyaRZuhPdIr0qF4t9TNmha3AYjwvzGs",
  authDomain: "react-otp-82ead.firebaseapp.com",
  projectId: "react-otp-82ead",
  storageBucket: "react-otp-82ead.appspot.com",
  messagingSenderId: "240491821311",
  appId: "1:240491821311:web:88b47d354f99d79d4ef4ca",
  measurementId: "G-EDLVHNLE8Q"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// // 
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAHZyaRZuhPdIr0qF4t9TNmha3AYjwvzGs",
//   authDomain: "react-otp-82ead.firebaseapp.com",
//   projectId: "react-otp-82ead",
//   storageBucket: "react-otp-82ead.appspot.com",
//   messagingSenderId: "240491821311",
//   appId: "1:240491821311:web:88b47d354f99d79d4ef4ca",
//   measurementId: "G-EDLVHNLE8Q"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
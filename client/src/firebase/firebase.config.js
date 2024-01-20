// import { initializeApp } from 'firebase/app'

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// }

// export const app = initializeApp(firebaseConfig)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCakjTy3nG9MSR7XYI31k436-rtsP-9NJY",
  authDomain: "stayvista-e4f2f.firebaseapp.com",
  projectId: "stayvista-e4f2f",
  storageBucket: "stayvista-e4f2f.appspot.com",
  messagingSenderId: "259038702953",
  appId: "1:259038702953:web:3d817d0497601d634fe1f8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
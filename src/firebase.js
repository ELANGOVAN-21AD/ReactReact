// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnKoH2d-JvYQX_L0qj327XhGRDhjnd9EQ",
  authDomain: "anonnmesa.firebaseapp.com",
  projectId: "anonnmesa",
  storageBucket: "anonnmesa.appspot.com",
  messagingSenderId: "622514877093",
  appId: "1:622514877093:web:43bf42f574de1a6e7b534c",
  measurementId: "G-W8D13V703C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
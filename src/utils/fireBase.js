// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOKMHhqkBI--anf0lSgh-ZFh0jUypGW2c",
  authDomain: "netflix-gpt-9368c.firebaseapp.com",
  projectId: "netflix-gpt-9368c",
  storageBucket: "netflix-gpt-9368c.appspot.com",
  messagingSenderId: "784098772075",
  appId: "1:784098772075:web:c4d37468e688e241ccdd2e",
  measurementId: "G-TY738PTPG2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

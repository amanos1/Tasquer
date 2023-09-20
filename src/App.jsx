import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import "./App.css";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI0uWdLgmstDE4DTVGgB3BDJOAeyekzU0",
  authDomain: "tasque-man.firebaseapp.com",
  projectId: "tasque-man",
  storageBucket: "tasque-man.appspot.com",
  messagingSenderId: "1015903155155",
  appId: "1:1015903155155:web:2bc0c722f795744fc8b526",
  measurementId: "G-RTWY3DJ9GE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SideBar />
      <Main database={database} />
    </>
  );
}

export default App;

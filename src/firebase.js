import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FFIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FFIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FFIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FFIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FFIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FFIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

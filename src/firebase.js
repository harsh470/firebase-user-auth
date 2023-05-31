import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAX8Mk9DzkiLG6UL7g9H24fiyr6KwZrAgI",
  authDomain: "fir-user-auth-c7761.firebaseapp.com",
  projectId: "fir-user-auth-c7761",
  storageBucket: "fir-user-auth-c7761.appspot.com",
  messagingSenderId: "323889284046",
  appId: "1:323889284046:web:e574a709c647bd5327e19f",
  measurementId: "G-JSPJWZJM46"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {auth}
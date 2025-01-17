import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyBWaE6eQEXFQkAsnrRTNG0XLiXk-_RXTeA",

  authDomain: "koma-app-aaa43.firebaseapp.com",

  projectId: "koma-app-aaa43",

  storageBucket: "koma-app-aaa43.firebasestorage.app",

  messagingSenderId: "521851736403",

  appId: "1:521851736403:web:83b612fb9bbad3b306d1a6"

};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
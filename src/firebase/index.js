// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth , GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr7RAWdVSwL-vCGa5ALi9gXCQRVHqmUps",
  authDomain: "chat-proje-2e7fb.firebaseapp.com",
  projectId: "chat-proje-2e7fb",
  storageBucket: "chat-proje-2e7fb.appspot.com",
  messagingSenderId: "665083794481",
  appId: "1:665083794481:web:d86bdb2baf6e853b6b3110"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//kimlik doğrulama
export const auth = getAuth(app);

//google saglayıcı
export const provider = new GoogleAuthProvider();

//veritabanının referansını al
export const db = getFirestore(app);
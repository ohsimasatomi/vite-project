import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from './router/index';

import "bootstrap/dist/css/bootstrap.min.css"

createApp(App).use(VueRouter).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKN2AZESqQndhWQKXOQnloDGwsov_271A",
  authDomain: "vite-project-eafbf.firebaseapp.com",
  projectId: "vite-project-eafbf",
  storageBucket: "vite-project-eafbf.appspot.com",
  messagingSenderId: "468641761144",
  appId: "1:468641761144:web:7d61c95789748e3afaaa8d",
  measurementId: "G-LS3CXS0KWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
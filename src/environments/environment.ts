export const environment ={
  firebase: {
    projectId: 'ecampus-app-3c691',
    appId: '1:870795948018:web:8d4c4a00dc59750e6dc56b',
    databaseURL: 'https://ecampus-app-3c691-default-rtdb.firebaseio.com',
    storageBucket: 'ecampus-app-3c691.appspot.com',
    apiKey: 'AIzaSyCm5ELJ1-6yl4-_U2iAcNDslDfB8CmE8ww',
    authDomain: 'ecampus-app-3c691.firebaseapp.com',
    messagingSenderId: '870795948018',
    measurementId: 'G-KFCS1ZPZ2L',
  },
    production: false
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm5ELJ1-6yl4-_U2iAcNDslDfB8CmE8ww",
  authDomain: "ecampus-app-3c691.firebaseapp.com",
  databaseURL: "https://ecampus-app-3c691-default-rtdb.firebaseio.com",
  projectId: "ecampus-app-3c691",
  storageBucket: "ecampus-app-3c691.appspot.com",
  messagingSenderId: "870795948018",
  appId: "1:870795948018:web:8d4c4a00dc59750e6dc56b",
  measurementId: "G-KFCS1ZPZ2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
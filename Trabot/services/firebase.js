import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8wzkiYeVekD26DxBdlyX1MXBMdUoKa9g",
  authDomain: "trabot-e9c9f.firebaseapp.com",
  projectId: "trabot-e9c9f",
  storageBucket: "trabot-e9c9f.appspot.com",
  messagingSenderId: "249002822374",
  appId: "1:249002822374:web:f828986847e2ea08f90927"
  // measurementId: "G-3JN0JQSQL2"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth };

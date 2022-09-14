// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCAJmwarEsN2Ykldnw2sLgD0W4JQiM0ZY",
  authDomain: "fyp2-e28e1.firebaseapp.com",
  projectId: "fyp2-e28e1",
  storageBucket: "fyp2-e28e1.appspot.com",
  messagingSenderId: "791146732075",
  appId: "1:791146732075:web:ecc89e09bbcc257cb3286e"
};

// Initialize Firebase
let app;
//firebase.initializeApp(firebaseConfig);
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth = firebase.auth()

export {auth};
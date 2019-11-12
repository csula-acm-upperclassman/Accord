import firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACUy4jMOcJGqvnTV27ef1u1RQcrhgJzj8",
    authDomain: "accord-test-84c55.firebaseapp.com",
    databaseURL: "https://accord-test-84c55.firebaseio.com",
    projectId: "accord-test-84c55",
    storageBucket: "accord-test-84c55.appspot.com",
    messagingSenderId: "415592032412",
    appId: "1:415592032412:web:80a3ba3d1b076fed026559",
    measurementId: "G-8GMJ03CR0Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebaseConfig;
import firebase from 'firebase'

 const firebaseConfig = {
    apiKey: "AIzaSyDa2_vgedOaE5Ipzi_2QKg1KStkv00mDd0",
    authDomain: "accord-8f243.firebaseapp.com",
    databaseURL: "https://accord-8f243.firebaseio.com",
    projectId: "accord-8f243",
    storageBucket: "accord-8f243.appspot.com",
    messagingSenderId: "705063812957",
    appId: "1:705063812957:web:d41f74058370ad04c0f2b4",
    measurementId: "G-PHD9G7ZCQ9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebaseConfig
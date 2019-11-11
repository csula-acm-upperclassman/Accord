//firebase configurations

import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBpCUQbEiEUM81A3Cf_kny6mCxOqTJlKH8",
    authDomain: "accord-workshop.firebaseapp.com",
    databaseURL: "https://accord-workshop.firebaseio.com",
    projectId: "accord-workshop",
    storageBucket: "accord-workshop.appspot.com",
    messagingSenderId: "931982832125",
    appId: "1:931982832125:web:accfb1f8e402e672126994",
    measurementId: "G-46MT5GH2WJ"
  }
const fire = firebase.initializeApp(config);
fire.analytics()

export default fire
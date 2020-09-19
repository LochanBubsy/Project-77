import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBxChOI6-ThZkNqGG0BZHeRiMnof41hCSY",
    authDomain: "barter-app-ee8af.firebaseapp.com",
    databaseURL: "https://barter-app-ee8af.firebaseio.com",
    projectId: "barter-app-ee8af",
    storageBucket: "barter-app-ee8af.appspot.com",
    messagingSenderId: "717519788451",
    appId: "1:717519788451:web:dc0182923d4b73e9446216"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
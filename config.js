import * as firebase from 'react-native'
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCpwXwpMoVfQb7eUy3READ688m5Qt8hkDY",
    authDomain: "reminder-app-a7907.firebaseapp.com",
    projectId: "reminder-app-a7907",
    storageBucket: "reminder-app-a7907.appspot.com",
    messagingSenderId: "730978232923",
    appId: "1:730978232923:web:9b96cfc8f7517380d0ad7e"
  };

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
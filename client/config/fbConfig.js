import firebase from 'firebase/app' //imports base features
import 'firebase/firestore' 
import 'firebase/auth'

// initialise firebase
var config = {
  apiKey: "AIzaSyCAb0JeHMa-VFTZNw_WQ6UTrqHyBFqoqL0",
  authDomain: "the-gear-report-9da45.firebaseapp.com",
  databaseURL: "https://the-gear-report-9da45.firebaseio.com",
  projectId: "the-gear-report-9da45",
  storageBucket: "the-gear-report-9da45.appspot.com",
  messagingSenderId: "886902139933"
};

firebase.initializeApp(config);

export default firebase
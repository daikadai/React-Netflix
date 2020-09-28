import Firebase from 'firebase/app'; 
import 'firebase/firestore';
import 'firebase/auth';

// we need to somehow seed the database


// we need a config here
const config = {
  apiKey: "AIzaSyAQKcF4CgiNt-_QqsFo4JgbrJeMnW2e5E8",
  authDomain: "netflix-e0c2c.firebaseapp.com",
  databaseURL: "https://netflix-e0c2c.firebaseio.com",
  projectId: "netflix-e0c2c",
  storageBucket: "netflix-e0c2c.appspot.com",
  messagingSenderId: "108917853735",
  appId: "1:108917853735:web:647ecd2adda9b147a7c802"
};

const firebase = Firebase.initializeApp(config);


export { firebase };

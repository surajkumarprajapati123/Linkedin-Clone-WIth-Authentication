import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBVHMk_VbhJS53GrtvgcNwf6hJQ_hNLkrw",
    authDomain: "linkedin-clone-reactjs-8865d.firebaseapp.com",
    projectId: "linkedin-clone-reactjs-8865d",
    storageBucket: "linkedin-clone-reactjs-8865d.appspot.com",
    messagingSenderId: "270761416990",
    appId: "1:270761416990:web:6f1e7581ca0ee00748510f"
  };

  // This special line of code connect everything
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  // gets the firebase database
  const db = firebaseapp.firestore();
  // using firebase authentication 
  const auth =  firebase.auth();
  export{db,auth}
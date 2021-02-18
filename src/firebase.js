import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDtwGfY2dIg49y9K0yZfPWj50yJxcnyd-U",
    authDomain: "facebook-clone-22a5b.firebaseapp.com",
    databaseURL: "https://facebook-clone-22a5b.firebaseio.com",
    projectId: "facebook-clone-22a5b",
    storageBucket: "facebook-clone-22a5b.appspot.com",
    messagingSenderId: "420404177059",
    appId: "1:420404177059:web:67953e824100c233597716",
    measurementId: "G-S6N7HDCHSS"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
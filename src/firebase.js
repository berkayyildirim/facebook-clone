import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCb8R4tP5NUfp66hU9GiUYhZ4ZwuiBJUPc",
    authDomain: "facebook-clone-9bcb9.firebaseapp.com",
    projectId: "facebook-clone-9bcb9",
    storageBucket: "facebook-clone-9bcb9.appspot.com",
    messagingSenderId: "1013927804464",
    appId: "1:1013927804464:web:64fa3c8316775dce7bf7f5",
    measurementId: "G-387WKS8QYV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db
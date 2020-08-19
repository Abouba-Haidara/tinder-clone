import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB0bnktGFmlIPTjcpFhA6tR5v0awcdhoTM",
    authDomain: "tinder-clone-f6acd.firebaseapp.com",
    databaseURL: "https://tinder-clone-f6acd.firebaseio.com",
    projectId: "tinder-clone-f6acd",
    storageBucket: "tinder-clone-f6acd.appspot.com",
    messagingSenderId: "117004610888",
    appId: "1:117004610888:web:dabeb3faf9c908020b977d",
    measurementId: "G-6EXYTDCQ3D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database =  firebaseApp.firestore();
export default database;
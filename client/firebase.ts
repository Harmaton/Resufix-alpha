import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDjZkJBZ4LSmQ-ruZ2qbqP6mRw-FAYpmEI",
    authDomain: "resufix-alpha.firebaseapp.com",
    projectId: "resufix-alpha",
    storageBucket: "resufix-alpha.appspot.com",
    messagingSenderId: "124105179727",
    appId: "1:124105179727:web:9bd4051bef7bf7de67603a",
    measurementId: "G-KZKX82G3FD"
  };
  
// Initialize Firebase
 const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
 const db = getFirestore(app);

 export {db};

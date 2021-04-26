import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

//seed the database

//config
const config = {
  apiKey: 'AIzaSyCCvyEqejeFSLvzwK-q4G-PKghB8fZEcuQ',
  authDomain: 'netflix-clone-c297a.firebaseapp.com',
  projectId: 'netflix-clone-c297a',
  storageBucket: 'netflix-clone-c297a.appspot.com',
  messagingSenderId: '841597041820',
  appId: '1:841597041820:web:39e93db2bfd8ae013e0159',
  measurementId: 'G-F9DCRVCZDP',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);
export { firebase };

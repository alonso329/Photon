import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBuo4FaxJh5dEUV09Ur2IvwEFqugsxaI-M",
  authDomain: "photon-a6f76.firebaseapp.com",
  projectId: "photon-a6f76",
  storageBucket: "photon-a6f76.appspot.com",
  messagingSenderId: "641665693145",
  appId: "1:641665693145:web:eb9fdd032181676d6755c8",
  measurementId: "G-X4EQFRTM3J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;

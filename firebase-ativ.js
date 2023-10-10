import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "sua-api-key",
  authDomain: "seu-domínio.firebaseapp.com",
  databaseURL: "https://seu-domínio.firebaseio.com",
  projectId: "seu-projeto-id",
  storageBucket: "seu-projeto-id.appspot.com",
  messagingSenderId: "seu-id",
  appId: "seu-app-id"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

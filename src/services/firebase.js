import firebase from 'firebase';

const config = {
  
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();